import React, { useRef, useState, useEffect } from "react"
import { useReactToPrint } from "react-to-print"
import type { ChangeEvent } from 'react';
import type { CSSProperties } from 'react';
import Img from "../../constants/img";
import html2pdf from "html2pdf.js";
import type { Dispatch, SetStateAction } from "react";

type ProfessionalReceiptProps = {
    setReceipts: Dispatch<SetStateAction<boolean>>;
};

// ─── TYPES ───────────────────────────────────────────────────────────────────

type TypePaiement = "avance" | "total" | "solde" | ""
type ModePaiement = "Espèces" | "MTN Mobile Money" | "Orange Money" | "Virement Bancaire" | ""

interface ReceiptData {
    numero: string
    date: string
    nom: string
    description: string
    typePaiement: TypePaiement
    modePaiement: ModePaiement
    montantTotal: string
    avance: string
    reste: string
    montantPaye: string
}

interface ServiceItem {
    icon: string
    label: string
}

interface FinancialRow {
    label: string
    value: string
    bold: boolean
    accent?: boolean
}

// Extend Window to support html2pdf loaded via CDN
declare global {
    interface Window {
        html2pdf?: () => {
            set: (opts: Record<string, unknown>) => ReturnType<NonNullable<Window["html2pdf"]>>
            from: (el: HTMLElement) => ReturnType<NonNullable<Window["html2pdf"]>>
            save: () => void
        }
    }
}

// ─── CONSTANTS ───────────────────────────────────────────────────────────────

const SERVICES: ServiceItem[] = [
    { icon: "🎯", label: "Stratégie Digitale" },
    { icon: "✍️", label: "Création de Contenu" },
    { icon: "📈", label: "Croissance & Engagement" },
    { icon: "📣", label: "Publicité Sociale" },
    { icon: "⚙️", label: "Automatisation & Performance" },
    { icon: "💻", label: "Développement Web & Apps" },
    { icon: "🎓", label: "Formation & Certifications" },
]

const MODES_PAIEMENT: ModePaiement[] = [
    "Espèces",
    "MTN Mobile Money",
    "Orange Money",
    "Virement Bancaire",
]

// ─── HELPERS ─────────────────────────────────────────────────────────────────

const generateReceiptNumber = (): string => {
    const d = new Date()
    const datePart = d.toISOString().slice(0, 10).replace(/-/g, "")
    const rand = Math.floor(1000 + Math.random() * 9000)
    return `FRD-${datePart}-${rand}`
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
    if (parsed < 1000)
        return (
            units[Math.floor(parsed / 100)] +
            " cent" +
            (parsed % 100 ? " " + numberToWords(parsed % 100) : "")
        )
    if (parsed < 1_000_000)
        return (
            numberToWords(Math.floor(parsed / 1000)) +
            " mille" +
            (parsed % 1000 ? " " + numberToWords(parsed % 1000) : "")
        )
    return parsed.toString()
}

const capitalize = (s: string): string =>
    s.charAt(0).toUpperCase() + s.slice(1)

// ─── RECEIPT COMPONENT ───────────────────────────────────────────────────────

interface ReceiptProps {
    data: ReceiptData
    montantLettre: string
}

const Receipt: React.FC<ReceiptProps> = ({ data, montantLettre }) => {
    const typeBadgeBg: Record<TypePaiement, string> = {
        total: "#16a34a",
        avance: "#d97706",
        solde: "#0f3460",
        "": "#888",
    }

    const typeBadgeLabel: Record<TypePaiement, string> = {
        total: "✅ Paiement Total",
        avance: "⏳ Avance / Acompte",
        solde: "🏁 Solde Final",
        "": "— Type de paiement —",
    }

    const financialRows: FinancialRow[] = [
        { label: "Montant Total Prestation", value: data.montantTotal, bold: false },
        { label: "Montant Versé (ce reçu)", value: data.montantPaye, bold: true },
        { label: "Avance Antérieure", value: data.avance, bold: false },
        { label: "Reste à Régler", value: data.reste, bold: false, accent: true },
    ]

    return (
        <div
            style={{
                fontFamily: "'Sora', 'Segoe UI', sans-serif",
                background: "#fff",
                width: "210mm",
                minHeight: "297mm",
                padding: "12mm 14mm",
                boxSizing: "border-box",
                color: "#1a1a2e",
                fontSize: "9pt",
                position: "relative",
            }}
        >
            {/* ── HEADER ── */}
            <div
                style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    borderBottom: "2.5px solid #0f3460",
                    paddingBottom: "8px",
                    marginBottom: "10px",
                    gap: "16px",
                }}
            >
                {/* Brand */}
                <div style={{ minWidth: "120px" }}>
                    <div
                        style={{
                            fontWeight: 800,
                            fontSize: "17pt",
                            color: "#0f3460",
                            letterSpacing: "-1px",
                            lineHeight: 1,
                        }}
                    >
                        <img src={Img.logo} className="h-[15mm] object-contain" />
                    </div>
                    <div style={{ fontSize: "7.5pt", color: "#555", marginTop: "2px" }}>
                        Agence Digitale
                    </div>
                    <div style={{ fontSize: "7pt", color: "#888", marginTop: "4px" }}>
                        🌐 digital.freedry.dev
                        <br />
                        📞 +237 670 616 710
                    </div>
                </div>

                {/* Title + badge */}
                <div style={{ textAlign: "center", flex: 1 }}>
                    <div
                        style={{
                            fontSize: "14pt",
                            fontWeight: 700,
                            color: "#0f3460",
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                        }}
                    >
                        Facture / Reçu de Paiement
                    </div>
                    <div
                        style={{
                            display: "inline-block",
                            background: typeBadgeBg[data.typePaiement],
                            color: "#fff",
                            borderRadius: "4px",
                            padding: "2px 10px",
                            fontSize: "8.5pt",
                            fontWeight: 600,
                            marginTop: "5px",
                            letterSpacing: "0.5px",
                        }}
                    >
                        {typeBadgeLabel[data.typePaiement]}
                    </div>
                </div>

                {/* Receipt meta */}
                <div style={{ minWidth: "110px", textAlign: "right", fontSize: "8pt" }}>
                    <div style={{ color: "#888" }}>N° Reçu</div>
                    <div style={{ fontWeight: 700, color: "#0f3460", fontSize: "8.5pt" }}>
                        {data.numero}
                    </div>
                    <div style={{ color: "#888", marginTop: "4px" }}>Date</div>
                    <div style={{ fontWeight: 600 }}>{data.date}</div>
                </div>
            </div>

            {/* ── SERVICES BAR ── */}
            <div
                style={{
                    background: "#f0f4ff",
                    borderLeft: "3px solid #0f3460",
                    borderRadius: "0 4px 4px 0",
                    padding: "5px 10px",
                    marginBottom: "10px",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px 14px",
                }}
            >
                {SERVICES.map((s) => (
                    <span
                        key={s.label}
                        style={{ fontSize: "7.5pt", color: "#0f3460", fontWeight: 500 }}
                    >
                        {s.icon} {s.label}
                    </span>
                ))}
            </div>

            {/* ── CLIENT ── */}
            <div style={{ display: "flex", gap: "12px", marginBottom: "10px" }}>
                <div
                    style={{
                        flex: 1,
                        border: "1px solid #dde3f0",
                        borderRadius: "5px",
                        padding: "6px 10px",
                    }}
                >
                    <div
                        style={{
                            fontSize: "7pt",
                            color: "#888",
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                        }}
                    >
                        Client
                    </div>
                    <div style={{ fontWeight: 700, fontSize: "10.5pt", marginTop: "1px" }}>
                        {data.nom || "—"}
                    </div>
                </div>
            </div>

            {/* ── DESCRIPTION ── */}
            <div style={{ marginBottom: "10px" }}>
                <SectionHeader label="📋 Objet / Prestation" />
                <div
                    style={{
                        border: "1px solid #dde3f0",
                        borderTop: "none",
                        borderRadius: "0 0 3px 3px",
                        minHeight: "38px",
                        padding: "6px 10px",
                        fontSize: "9pt",
                        color: "#1a1a2e",
                        whiteSpace: "pre-wrap",
                    }}
                >
                    {data.description || "—"}
                </div>
            </div>

            {/* ── MODE DE PAIEMENT ── */}
            <div style={{ marginBottom: "10px" }}>
                <SectionHeader label="💳 Mode de Paiement" />
                <div
                    style={{
                        border: "1px solid #dde3f0",
                        borderTop: "none",
                        borderRadius: "0 0 3px 3px",
                        padding: "5px 10px",
                        display: "flex",
                        gap: "14px",
                    }}
                >
                    {MODES_PAIEMENT.map((m) => (
                        <span
                            key={m}
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "4px",
                                fontSize: "8.5pt",
                                fontWeight: data.modePaiement === m ? 700 : 400,
                                color: data.modePaiement === m ? "#0f3460" : "#555",
                            }}
                        >
                            <span
                                style={{
                                    width: "11px",
                                    height: "11px",
                                    borderRadius: "50%",
                                    border: `2px solid ${data.modePaiement === m ? "#0f3460" : "#bbb"}`,
                                    background: data.modePaiement === m ? "#0f3460" : "transparent",
                                    display: "inline-block",
                                    flexShrink: 0,
                                }}
                            />
                            {m}
                        </span>
                    ))}
                </div>
            </div>

            {/* ── TABLEAU + SIGNATURE ── */}
            <div style={{ display: "flex", gap: "14px", marginBottom: "10px" }}>
                <table style={{ width: "58%", borderCollapse: "collapse", fontSize: "9pt" }}>
                    <thead>
                        <tr>
                            <th
                                colSpan={2}
                                style={{
                                    background: "#0f3460",
                                    color: "#fff",
                                    padding: "4px 8px",
                                    textAlign: "left",
                                    fontSize: "7.5pt",
                                    letterSpacing: "0.5px",
                                    textTransform: "uppercase",
                                }}
                            >
                                Récapitulatif Financier
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {financialRows.map((row, i) => (
                            <tr key={row.label} style={{ background: i % 2 === 0 ? "#f8faff" : "#fff" }}>
                                <td
                                    style={{
                                        border: "1px solid #dde3f0",
                                        padding: "4px 8px",
                                        fontWeight: row.bold ? 700 : 400,
                                        color: row.accent ? "#e94560" : "#1a1a2e",
                                    }}
                                >
                                    {row.label}
                                </td>
                                <td
                                    style={{
                                        border: "1px solid #dde3f0",
                                        padding: "4px 8px",
                                        fontWeight: row.bold ? 700 : 400,
                                        color: row.accent ? "#e94560" : "#1a1a2e",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    {row.value
                                        ? `${parseInt(row.value, 10).toLocaleString("fr-FR")} FCFA`
                                        : "—"}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Signature + Cachet */}
                <div
                    style={{
                        flex: 1,
                        border: "1px solid #dde3f0",
                        borderRadius: "5px",
                        padding: "8px 10px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >
                    <div
                        style={{
                            fontSize: "7.5pt",
                            color: "#888",
                            textTransform: "uppercase",
                            fontWeight: 600,
                        }}
                    >
                        Signature & Cachet
                    </div>
                    <div
                        style={{
                            flex: 1,
                            marginTop: "6px",
                            border: "1.5px dashed #c5cde8",
                            borderRadius: "4px",
                            minHeight: "50px",
                        }}
                    />
                    <div
                        style={{ fontSize: "7pt", color: "#aaa", marginTop: "4px", textAlign: "center" }}
                    >
                        Signature autorisée
                    </div>
                </div>
            </div>

            {/* ── MONTANT EN LETTRES ── */}
            <div
                style={{
                    background: "#f0f4ff",
                    border: "1px solid #c5cde8",
                    borderRadius: "4px",
                    padding: "6px 10px",
                    marginBottom: "14px",
                }}
            >
                <span style={{ fontSize: "8pt", color: "#888" }}>Montant versé en lettres : </span>
                <span style={{ fontWeight: 600, color: "#0f3460", fontSize: "9pt" }}>
                    {montantLettre || "—"}
                </span>
            </div>

            {/* ── FOOTER ── */}
            <div
                style={{
                    borderTop: "1.5px solid #e0e6f5",
                    paddingTop: "7px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "7.5pt",
                    color: "#888",
                }}
            >
                <div>
                    <span style={{ fontWeight: 700, color: "#0f3460" }}>Free Digital Solution</span> —
                    digital.freedry.dev — +237 670 616 710
                </div>
                <div style={{ textAlign: "right" }}>
                    Ce document tient lieu de reçu officiel.
                    <br />
                    Conservez-le pour vos archives.
                </div>
            </div>
        </div>
    )
}

// ─── SMALL SHARED COMPONENT ──────────────────────────────────────────────────

const SectionHeader: React.FC<{ label: string }> = ({ label }) => (
    <div
        style={{
            background: "#0f3460",
            color: "#fff",
            fontSize: "7.5pt",
            fontWeight: 700,
            padding: "3px 8px",
            borderRadius: "3px 3px 0 0",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            marginTop: "30px",
        }}
    >
        {label}
    </div>
)

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

const ReceiptGenerator = ({ setReceipts }: ProfessionalReceiptProps) => {
    const receiptRef = useRef<HTMLDivElement>(null)

    const [data, setData] = useState<ReceiptData>({
        numero: generateReceiptNumber(),
        date: getFormattedDate(),
        nom: "",
        description: "",
        typePaiement: "",
        modePaiement: "",
        montantTotal: "",
        avance: "",
        reste: "",
        montantPaye: "",
    })

    // Auto-compute "reste"
    useEffect(() => {
        const total = parseFloat(data.montantTotal) || 0
        const avance = parseFloat(data.avance) || 0
        const paye = parseFloat(data.montantPaye) || 0
        const alreadyPaid = avance + paye
        setData((prev) => ({
            ...prev,
            reste: total > 0 ? Math.max(0, total - alreadyPaid).toString() : "",
        }))
    }, [data.montantTotal, data.avance, data.montantPaye])

    const handle = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ): void => {
        const { name, value } = e.target
        setData((prev) => ({ ...prev, [name]: value }))
    }

    const regenerate = (): void => {
        setData((prev) => ({
            ...prev,
            numero: generateReceiptNumber(),
            date: getFormattedDate(),
        }))
    }

    const downloadPDF = () => {
        if (!receiptRef.current) return

        html2pdf()
            .set({
                margin: 0,
                filename: "recu-formation.pdf",
                image: { type: "jpeg", quality: 1 },
                html2canvas: { scale: 3 },
                jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
            })
            .from(receiptRef.current)
            .save()
    }

    const handlePrint = useReactToPrint({
        contentRef: receiptRef
    })
    const montantLettre: string = data.montantPaye
        ? capitalize(numberToWords(data.montantPaye)) + " francs CFA"
        : ""

    // ── Shared styles ──────────────────────────────────────────────────────────

    const inputStyle: CSSProperties = {
        border: "1px solid #dde3f0",
        borderRadius: "6px",
        padding: "8px 12px",
        fontSize: "13px",
        width: "100%",
        outline: "none",
        color: "#1a1a2e",
        fontFamily: "inherit",
        background: "#fff",
        boxSizing: "border-box",
    }

    const labelStyle: CSSProperties = {
        display: "block",
        fontSize: "11px",
        fontWeight: 600,
        color: "#555",
        marginBottom: "4px",
        textTransform: "uppercase",
        letterSpacing: "0.4px",
    }

    const btnBase: CSSProperties = {
        border: "none",
        borderRadius: "8px",
        padding: "10px 22px",
        fontSize: "13px",
        fontWeight: 600,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "6px",
    }

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #0f3460 0%, #16213e 100%)",
                padding: "32px 20px",
                fontFamily: "'Sora', 'Segoe UI', sans-serif",
            }}
        >

            <link
                href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&display=swap"
                rel="stylesheet"
            />


            {/* ── FORM CARD ── */}
            <div
                style={{
                    maxWidth: "860px",
                    margin: "0 auto 28px",
                    background: "#fff",
                    borderRadius: "14px",
                    boxShadow: "0 8px 40px rgba(15,52,96,0.18)",
                    padding: "28px 28px 22px",
                    marginTop: "50px",
                }}
            >
                <button
                    onClick={() => setReceipts(false)}
                    className=" text-black px-8 py-4 backdrop-blur-sm border border-dark/20 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
                >
                    reçu cm
                </button>
                <div style={{ marginBottom: "20px" }}>
                    <div style={{ fontSize: "20px", fontWeight: 800, color: "#0f3460" }}>
                        Free Digital Solutions<span style={{ color: "#e94560" }}>.</span> — Générateur de Facture
                    </div>
                    <div style={{ fontSize: "12px", color: "#888", marginTop: "2px" }}>
                        Remplissez les champs ci-dessous pour générer votre reçu.
                    </div>
                </div>

                <div
                    style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}
                >
                    {/* Nom */}
                    <div>
                        <label style={labelStyle}>👤 Nom du client</label>
                        <input
                            name="nom"
                            placeholder="Ex: Jean Dupont"
                            value={data.nom}
                            onChange={handle}
                            style={inputStyle}
                        />
                    </div>

                    {/* Type paiement */}
                    <div>
                        <label style={labelStyle}>🏷 Type de paiement</label>
                        <select
                            name="typePaiement"
                            value={data.typePaiement}
                            onChange={handle}
                            style={{ ...inputStyle, cursor: "pointer" }}
                        >
                            <option value="">— Sélectionner —</option>
                            <option value="avance">Avance / Acompte</option>
                            <option value="total">Paiement Total</option>
                            <option value="solde">Solde Final (dernière tranche)</option>
                        </select>
                    </div>

                    {/* Mode paiement */}
                    <div>
                        <label style={labelStyle}>💳 Mode de paiement</label>
                        <select
                            name="modePaiement"
                            value={data.modePaiement}
                            onChange={handle}
                            style={{ ...inputStyle, cursor: "pointer" }}
                        >
                            <option value="">— Sélectionner —</option>
                            {MODES_PAIEMENT.map((m) => (
                                <option key={m} value={m}>
                                    {m}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Montant total */}
                    <div>
                        <label style={labelStyle}>💰 Montant total (FCFA)</label>
                        <input
                            name="montantTotal"
                            type="number"
                            placeholder="Ex: 150000"
                            value={data.montantTotal}
                            onChange={handle}
                            style={inputStyle}
                        />
                    </div>

                    {/* Montant versé */}
                    <div>
                        <label style={labelStyle}>✅ Montant versé ce jour (FCFA)</label>
                        <input
                            name="montantPaye"
                            type="number"
                            placeholder="Ex: 50000"
                            value={data.montantPaye}
                            onChange={handle}
                            style={inputStyle}
                        />
                    </div>

                    {/* Avance antérieure */}
                    <div>
                        <label style={labelStyle}>⏳ Avance antérieure (FCFA)</label>
                        <input
                            name="avance"
                            type="number"
                            placeholder="Ex: 30000"
                            value={data.avance}
                            onChange={handle}
                            style={inputStyle}
                        />
                    </div>

                    {/* Description — full width */}
                    <div style={{ gridColumn: "1 / -1" }}>
                        <label style={labelStyle}>📋 Objet / Prestation</label>
                        <textarea
                            name="description"
                            placeholder="Ex: Formation Community Management – Module 1 & 2, Création de contenu mensuel…"
                            value={data.description}
                            onChange={handle}
                            rows={3}
                            style={{ ...inputStyle, resize: "vertical" }}
                        />
                    </div>
                </div>

                {/* Actions */}
                <div
                    style={{
                        display: "flex",
                        gap: "12px",
                        marginTop: "20px",
                        flexWrap: "wrap",
                    }}
                >
                    <button
                        onClick={handlePrint}
                        style={{ ...btnBase, background: "#0f3460", color: "#fff" }}
                    >
                        🖨️ Imprimer
                    </button>
                    <button
                        onClick={downloadPDF}
                        style={{ ...btnBase, background: "#e94560", color: "#fff" }}
                    >
                        📥 Télécharger PDF
                    </button>
                    <button
                        onClick={regenerate}
                        style={{
                            ...btnBase,
                            background: "#f0f4ff",
                            color: "#0f3460",
                            border: "1px solid #c5cde8",
                        }}
                    >
                        🔄 Nouveau Numéro
                    </button>
                </div>
            </div>

            {/* ── RECEIPT PREVIEW ── */}
            <div
                style={{
                    maxWidth: "860px",
                    margin: "0 auto",
                    boxShadow: "0 12px 50px rgba(0,0,0,0.3)",
                    borderRadius: "6px",
                    overflow: "hidden",
                }}
            >
                <div ref={receiptRef}>
                    <Receipt data={data} montantLettre={montantLettre} />
                </div>
            </div>
        </div>
    )
}

export default ReceiptGenerator