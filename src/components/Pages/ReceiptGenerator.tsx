import React, { useRef, useState, useEffect } from "react"
import type { ChangeEvent } from "react"
import { useReactToPrint } from "react-to-print"
import html2pdf from "html2pdf.js"
import Img from "../../constants/img"
import ProfessionalReceipt from "./Receipt2"

// ── TYPES ─────────────────────────────────────────────────────────────────────

type ObjetPaiement = "inscription" | "tranche1" | "tranche2" | "avance" | "total" | ""
type ModePaiement = "mobileMoney" | "especes" | "virement" | ""
type FormatFormation = "presentiel6h" | "presentiel12h" | "enligne" | ""

type ReceiptData = {
  numero: string
  date: string
  nom: string
  phone: string
  montantTotal: string
  totalPaye: string
  reste: string
  montantPaye: string
  objetPaiement: ObjetPaiement
  modePaiement: ModePaiement
  formatFormation: FormatFormation
}

// ── HELPERS ───────────────────────────────────────────────────────────────────

const generateReceiptNumber = (): string => {
  const d = new Date()
  const datePart = d.toISOString().slice(0, 10).replace(/-/g, "")
  const rand = Math.floor(1000 + Math.random() * 9000)
  return `REC-${datePart}-${rand}`
}

const getFormattedDate = (): string =>
  new Date().toLocaleDateString("fr-FR")

const numberToWords = (n: string | number): string => {
  const parsed = parseInt(String(n), 10)
  if (!n || isNaN(parsed)) return ""

  const units: string[] = [
    "", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf",
    "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize",
    "dix-sept", "dix-huit", "dix-neuf",
  ]
  const tens: string[] = [
    "", "", "vingt", "trente", "quarante", "cinquante", "soixante",
    "soixante-dix", "quatre-vingt", "quatre-vingt-dix",
  ]

  if (parsed === 0) return "zéro"
  if (parsed < 20) return units[parsed]
  if (parsed < 100)
    return tens[Math.floor(parsed / 10)] + (parsed % 10 ? "-" + units[parsed % 10] : "")
  if (parsed < 1000) {
    const h = Math.floor(parsed / 100)
    const r = parsed % 100
    return (h === 1 ? "" : units[h] + " ") + "cent" + (r ? " " + numberToWords(r) : "")
  }
  if (parsed < 1_000_000) {
    const t = Math.floor(parsed / 1000)
    const r = parsed % 1000
    return (t === 1 ? "" : numberToWords(t) + " ") + "mille" + (r ? " " + numberToWords(r) : "")
  }
  return parsed.toString()
}

const capitalize = (s: string): string =>
  s ? s.charAt(0).toUpperCase() + s.slice(1) : ""

const fmtFCFA = (val: string): string => {
  const n = parseInt(val, 10)
  return isNaN(n) ? "—" : n.toLocaleString("fr-FR") + " FCFA"
}

// ── LABELS ────────────────────────────────────────────────────────────────────

const OBJET_LABELS: Record<ObjetPaiement, string> = {
  inscription: "Frais d'inscription",
  tranche1: "1ère tranche",
  tranche2: "2ème tranche",
  avance: "Avance",
  total: "Paiement total",
  "": "",
}

const MODE_LABELS: Record<ModePaiement, string> = {
  mobileMoney: "Mobile Money",
  especes: "Espèces",
  virement: "Virement",
  "": "",
}

const FORMAT_LABELS: Record<FormatFormation, string> = {
  presentiel6h: "Présentiel 6h",
  presentiel12h: "Présentiel 12h",
  enligne: "En ligne",
  "": "",
}

// ── SUB-COMPONENTS (RECEIPT) ──────────────────────────────────────────────────

const SectionBlock: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div>
    <div style={{
      background: "#0f3460",
      color: "#fff",
      fontSize: "7pt",
      fontWeight: 700,
      padding: "2px 8px",
      borderRadius: "3px 3px 0 0",
      textTransform: "uppercase" as const,
      letterSpacing: "0.5px",
    }}>
      {title}
    </div>
    <div style={{
      border: "1px solid #dde3f0",
      borderTop: "none",
      borderRadius: "0 0 3px 3px",
      padding: "5px 8px",
      display: "flex",
      flexDirection: "column" as const,
      gap: "3px",
    }}>
      {children}
    </div>
  </div>
)

const CheckItem: React.FC<{ checked: boolean; label: string }> = ({ checked, label }) => (
  <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "8.5pt", color: checked ? "#0f3460" : "#888", fontWeight: checked ? 600 : 400 }}>
    <span style={{
      width: "12px",
      height: "12px",
      border: `2px solid ${checked ? "#0f3460" : "#ccc"}`,
      borderRadius: "2px",
      background: checked ? "#0f3460" : "transparent",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}>
      {checked && (
        <svg viewBox="0 0 10 8" width="8" height="6" fill="none">
          <path d="M1 4l2.5 2.5L9 1" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </span>
    {label}
  </span>
)

// ── RECEIPT (PRINTABLE) ───────────────────────────────────────────────────────

interface ReceiptProps {
  data: ReceiptData
  montantLettre: string
}

const Receipt: React.FC<ReceiptProps> = ({ data, montantLettre }) => (
  <div style={{
    fontFamily: "'Sora', 'Segoe UI', sans-serif",
    background: "#fff",
    width: "210mm",
    minHeight: "148mm",
    padding: "8mm 12mm",
    boxSizing: "border-box" as const,
    color: "#1a1a2e",
    fontSize: "9pt",
    display: "flex",
    flexDirection: "column" as const,
    gap: "6px",
  }}>

    {/* HEADER */}
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: "2.5px solid #0f3460",
      paddingBottom: "6px",
      gap: "12px",
    }}>
      <img src={Img.ifpit} style={{ height: "20mm", objectFit: "contain" }} alt="IFPIT" />
      <div style={{ textAlign: "center", flex: 1 }}>
        <div style={{ fontSize: "13pt", fontWeight: 800, color: "#0f3460", textTransform: "uppercase" as const, letterSpacing: "0.5px" }}>
          REÇU DE PAIEMENT – FORMATION
        </div>
        <div style={{ fontSize: "10pt", color: "#16a34a", fontWeight: 600, marginTop: "2px" }}>
          Formation en Community Management
        </div>
        <div style={{ fontSize: "7.5pt", color: "#555", marginTop: "3px" }}>
          digital.freedry.dev &nbsp;|&nbsp; +237 670 616 710
        </div>
      </div>
      <img src={Img.logo} style={{ height: "12mm", objectFit: "contain" }} alt="Logo" />
    </div>

    {/* INFOS CLIENT */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px 20px" }}>
      <div style={{ fontSize: "8.5pt", color: "#555" }}>
        N° Reçu :{" "}
        <span style={{ fontWeight: 700, color: "#0f3460", borderBottom: "1px solid #0f3460" }}>
          {data.numero}
        </span>
      </div>
      <div style={{ fontSize: "8.5pt", color: "#555", textAlign: "right" }}>
        Date :{" "}
        <span style={{ fontWeight: 600, color: "#1a1a2e", borderBottom: "1px solid #ccc" }}>
          {data.date}
        </span>
      </div>
      <div style={{ fontSize: "8.5pt", color: "#555" }}>
        Participant :{" "}
        <span style={{ fontWeight: 700, color: "#1a1a2e", borderBottom: "1px solid #ccc" }}>
          {data.nom || "—"}
        </span>
      </div>
      <div style={{ fontSize: "8.5pt", color: "#555", textAlign: "right" }}>
        Téléphone :{" "}
        <span style={{ fontWeight: 600, color: "#1a1a2e", borderBottom: "1px solid #ccc" }}>
          {data.phone || "—"}
        </span>
      </div>
    </div>

    {/* OBJET / MODE / FORMAT */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" }}>
      <SectionBlock title="Objet du paiement">
        {(["inscription", "tranche1", "tranche2", "avance", "total"] as ObjetPaiement[]).map((o) => (
          <CheckItem key={o} checked={data.objetPaiement === o} label={OBJET_LABELS[o]} />
        ))}
      </SectionBlock>

      <SectionBlock title="Mode de paiement">
        {(["mobileMoney", "especes", "virement"] as ModePaiement[]).map((m) => (
          <CheckItem key={m} checked={data.modePaiement === m} label={MODE_LABELS[m]} />
        ))}
      </SectionBlock>

      <SectionBlock title="Format">
        {(["presentiel6h", "presentiel12h", "enligne"] as FormatFormation[]).map((f) => (
          <CheckItem key={f} checked={data.formatFormation === f} label={FORMAT_LABELS[f]} />
        ))}
      </SectionBlock>
    </div>

    {/* TABLEAU FINANCIER + SIGNATURE */}
    <div style={{ display: "flex", gap: "12px" }}>
      <table style={{ width: "58%", borderCollapse: "collapse", fontSize: "9pt" }}>
        <thead>
          <tr>
            <th colSpan={2} style={{
              background: "#0f3460",
              color: "#fff",
              padding: "4px 8px",
              textAlign: "left",
              fontSize: "7pt",
              letterSpacing: "0.5px",
              textTransform: "uppercase" as const,
            }}>
              Récapitulatif Financier
            </th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ background: "#f0f4ff" }}>
            <td style={{ border: "1px solid #dde3f0", padding: "5px 8px", color: "#0f3460" }}>
              Montant Total Formation
            </td>
            <td style={{ border: "1px solid #dde3f0", padding: "5px 8px", fontWeight: 700, color: "#0f3460", whiteSpace: "nowrap" as const }}>
              {fmtFCFA(data.montantTotal)}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #dde3f0", padding: "5px 8px", color: "#16a34a" }}>
              Total Payé
            </td>
            <td style={{ border: "1px solid #dde3f0", padding: "5px 8px", fontWeight: 700, color: "#16a34a", whiteSpace: "nowrap" as const }}>
              {fmtFCFA(data.totalPaye)}
            </td>
          </tr>
          <tr style={{ background: "#fff0f3" }}>
            <td style={{ border: "1px solid #f5c6cc", padding: "5px 8px", color: "#e94560", fontWeight: 700 }}>
              Reste à Payer
            </td>
            <td style={{ border: "1px solid #f5c6cc", padding: "5px 8px", fontWeight: 800, color: "#e94560", whiteSpace: "nowrap" as const }}>
              {fmtFCFA(data.reste)}
            </td>
          </tr>
        </tbody>
      </table>

      {/* Signature */}
      <div style={{
        flex: 1,
        border: "1px solid #dde3f0",
        borderRadius: "5px",
        padding: "7px 10px",
        display: "flex",
        flexDirection: "column" as const,
        justifyContent: "space-between",
      }}>
        <div style={{ fontSize: "7pt", color: "#888", textTransform: "uppercase" as const, fontWeight: 600 }}>
          Signature &amp; Cachet
        </div>
        <div style={{ flex: 1, marginTop: "4px", border: "1.5px dashed #c5cde8", borderRadius: "4px", minHeight: "44px" }} />
        <div style={{ fontSize: "6.5pt", color: "#aaa", marginTop: "4px", textAlign: "center" as const }}>
          Signature autorisée
        </div>
      </div>
    </div>

    {/* MONTANT PAYÉ + EN LETTRES */}
    <div style={{
      background: "#f0f4ff",
      border: "1px solid #c5cde8",
      borderRadius: "4px",
      padding: "6px 10px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      flexWrap: "wrap" as const,
    }}>
      <div>
        <span style={{ fontSize: "7.5pt", color: "#888" }}>Montant payé ce jour (FCFA) : </span>
        <span style={{ fontWeight: 800, color: "#0f3460", fontSize: "11pt" }}>
          {fmtFCFA(data.montantPaye)}
        </span>
      </div>
      <div style={{ borderLeft: "1px solid #c5cde8", paddingLeft: "10px", flex: 1 }}>
        <span style={{ fontSize: "7.5pt", color: "#888" }}>En lettres : </span>
        <span style={{ fontWeight: 600, color: "#0f3460", fontSize: "9pt", fontStyle: "italic" }}>
          {montantLettre || "—"}
        </span>
      </div>
    </div>

  </div>
)

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────

const ReceiptGenerator: React.FC = () => {
  const receiptRef = useRef<HTMLDivElement>(null)
  const [receipts, setReceipts] = useState<boolean>(false)

  const [data, setData] = useState<ReceiptData>({
    numero: generateReceiptNumber(),
    date: getFormattedDate(),
    nom: "",
    phone: "",
    montantTotal: "",
    totalPaye: "",
    reste: "",
    montantPaye: "",
    objetPaiement: "",
    modePaiement: "",
    formatFormation: "",
  })

  // Auto-calcul reste = montantTotal - totalPaye
  useEffect(() => {
    const total = parseFloat(data.montantTotal) || 0
    const paye = parseFloat(data.totalPaye) || 0
    setData((prev) => ({
      ...prev,
      reste: total > 0 ? Math.max(0, total - paye).toString() : "",
    }))
  }, [data.montantTotal, data.totalPaye])

  // Montant en lettres auto depuis montantPaye
  const montantLettre = data.montantPaye
    ? capitalize(numberToWords(data.montantPaye)) + " francs CFA"
    : ""

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePrint = useReactToPrint({ contentRef: receiptRef })

  const downloadPDF = () => {
    if (!receiptRef.current) return
    html2pdf()
      .set({
        margin: 0,
        filename: "recu-formation-cm.pdf",
        image: { type: "jpeg", quality: 1 },
        html2canvas: { scale: 3 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      })
      .from(receiptRef.current)
      .save()
  }

  const inputStyle: React.CSSProperties = {
    border: "1px solid #dde3f0",
    borderRadius: "8px",
    padding: "9px 13px",
    fontSize: "13px",
    width: "100%",
    outline: "none",
    color: "#1a1a2e",
    fontFamily: "inherit",
    background: "#fff",
    boxSizing: "border-box" as const,
    transition: "border-color 0.2s",
  }

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "11px",
    fontWeight: 600,
    color: "#555",
    marginBottom: "5px",
    textTransform: "uppercase" as const,
    letterSpacing: "0.4px",
  }

  const btnBase: React.CSSProperties = {
    border: "none",
    borderRadius: "8px",
    padding: "10px 22px",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    transition: "opacity 0.2s",
  }

  if (receipts) {
    return <ProfessionalReceipt setReceipts={setReceipts} />
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f3460 0%, #16213e 100%)",
      padding: "32px 20px",
      fontFamily: "'Sora', 'Segoe UI', sans-serif",
    }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&display=swap"
        rel="stylesheet"
      />

      {/* FORM CARD */}
      <div style={{
        maxWidth: "860px",
        margin: "50px auto 28px",
        background: "#fff",
        borderRadius: "14px",
        boxShadow: "0 8px 40px rgba(15,52,96,0.18)",
        padding: "28px",
      }}>

        {/* En-tête formulaire */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px" }}>
          <div>
            <div style={{ fontSize: "20px", fontWeight: 800, color: "#0f3460" }}>
              IFPIT<span style={{ color: "#e94560" }}>.</span> — Reçu Formation CM
            </div>
            <div style={{ fontSize: "12px", color: "#888", marginTop: "3px" }}>
              Formation Community Management — Remplissez les champs pour générer le reçu
            </div>
          </div>
          <button
            onClick={() => setReceipts(true)}
            style={{
              ...btnBase,
              background: "#f0f4ff",
              color: "#0f3460",
              border: "1px solid #c5cde8",
              fontSize: "12px",
              padding: "8px 16px",
            }}
          >
            Reçu Professionnel →
          </button>
        </div>

        {/* Grille de champs */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>

          {/* Nom */}
          <div>
            <label style={labelStyle}>Nom du Participant</label>
            <input
              name="nom"
              placeholder="Ex : Jean Dupont"
              value={data.nom}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          {/* Téléphone */}
          <div>
            <label style={labelStyle}>Téléphone</label>
            <input
              name="phone"
              placeholder="Ex : +237 6XX XXX XXX"
              value={data.phone}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          {/* Montant total */}
          <div>
            <label style={labelStyle}>Montant Total Formation (FCFA)</label>
            <input
              name="montantTotal"
              type="number"
              placeholder="Ex : 150000"
              value={data.montantTotal}
              onChange={handleChange}
              style={{ ...inputStyle, color: "#0f3460", fontWeight: 600 }}
            />
          </div>

          {/* Total payé */}
          <div>
            <label style={labelStyle}>Total Déjà Payé (FCFA)</label>
            <input
              name="totalPaye"
              type="number"
              placeholder="Ex : 75000"
              value={data.totalPaye}
              onChange={handleChange}
              style={{ ...inputStyle, color: "#16a34a", fontWeight: 600 }}
            />
          </div>

          {/* Reste — lecture seule, calculé auto */}
          <div>
            <label style={{ ...labelStyle, color: "#e94560" }}>Reste à Payer (calculé auto)</label>
            <div style={{
              ...inputStyle,
              background: "#fff0f3",
              border: "1px solid #f5c6cc",
              color: "#e94560",
              fontWeight: 700,
              cursor: "not-allowed",
            }}>
              {data.reste ? `${parseInt(data.reste).toLocaleString("fr-FR")} FCFA` : "—"}
            </div>
          </div>

          {/* Montant de ce reçu */}
          <div>
            <label style={labelStyle}>Montant de ce Reçu (FCFA)</label>
            <input
              name="montantPaye"
              type="number"
              placeholder="Ex : 25000"
              value={data.montantPaye}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          {/* Montant en lettres — affiché auto, pleine largeur */}
          <div style={{ gridColumn: "1 / -1" }}>
            <label style={labelStyle}>Montant en Lettres (automatique)</label>
            <div style={{
              background: "#f0f4ff",
              border: "1px solid #c5cde8",
              borderRadius: "8px",
              padding: "10px 14px",
              fontSize: "13px",
              color: "#0f3460",
              fontWeight: 600,
              fontStyle: "italic",
              minHeight: "42px",
              display: "flex",
              alignItems: "center",
            }}>
              {montantLettre || (
                <span style={{ color: "#aaa", fontStyle: "normal", fontWeight: 400 }}>
                  Saisissez le montant du reçu pour générer automatiquement…
                </span>
              )}
            </div>
          </div>

          {/* Objet */}
          <div>
            <label style={labelStyle}>Objet du Paiement</label>
            <select
              name="objetPaiement"
              value={data.objetPaiement}
              onChange={handleChange}
              style={{ ...inputStyle, cursor: "pointer" }}
            >
              <option value="">— Sélectionner —</option>
              <option value="inscription">Frais d'inscription</option>
              <option value="tranche1">1ère tranche</option>
              <option value="tranche2">2ème tranche</option>
              <option value="avance">Avance</option>
              <option value="total">Paiement total</option>
            </select>
          </div>

          {/* Mode paiement */}
          <div>
            <label style={labelStyle}>Mode de Paiement</label>
            <select
              name="modePaiement"
              value={data.modePaiement}
              onChange={handleChange}
              style={{ ...inputStyle, cursor: "pointer" }}
            >
              <option value="">— Sélectionner —</option>
              <option value="mobileMoney">Mobile Money</option>
              <option value="especes">Espèces</option>
              <option value="virement">Virement</option>
            </select>
          </div>

          {/* Format */}
          <div style={{ gridColumn: "1 / -1" }}>
            <label style={labelStyle}>Format de Formation</label>
            <select
              name="formatFormation"
              value={data.formatFormation}
              onChange={handleChange}
              style={{ ...inputStyle, cursor: "pointer" }}
            >
              <option value="">— Sélectionner —</option>
              <option value="presentiel6h">Présentiel 6h</option>
              <option value="presentiel12h">Présentiel 12h</option>
              <option value="enligne">En ligne</option>
            </select>
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: "12px", marginTop: "22px", flexWrap: "wrap" }}>
          <button
            onClick={handlePrint}
            style={{ ...btnBase, background: "#0f3460", color: "#fff" }}
          >
            Imprimer
          </button>
          <button
            onClick={downloadPDF}
            style={{ ...btnBase, background: "#e94560", color: "#fff" }}
          >
            Télécharger PDF
          </button>
          <button
            onClick={() => setData((prev) => ({ ...prev, numero: generateReceiptNumber(), date: getFormattedDate() }))}
            style={{ ...btnBase, background: "#f0f4ff", color: "#0f3460", border: "1px solid #c5cde8" }}
          >
            Nouveau Numéro
          </button>
        </div>
      </div>

      {/* APERÇU DU REÇU */}
      <div style={{
        maxWidth: "860px",
        margin: "0 auto",
        boxShadow: "0 12px 50px rgba(0,0,0,0.3)",
        borderRadius: "6px",
        overflow: "hidden",
      }}>
        <div ref={receiptRef}>
          <Receipt data={data} montantLettre={montantLettre} />
        </div>
      </div>
    </div>
  )
}

export default ReceiptGenerator
