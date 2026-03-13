import React, { useRef, useState } from "react"
import type { ChangeEvent } from "react"
import { useReactToPrint } from "react-to-print"
import html2pdf from "html2pdf.js"
import Img from "../../constants/img"
import ProfessionalReceipt from "./Receipt2"

type ReceiptData = {
    numero: string
    date: string
    nom: string
    phone: string
    montantTotal: string
    totalPaye: string
    reste: string
    montantPaye: string
    montantLettre: string
}


const ReceiptGenerator: React.FC = () => {
    const receiptRef = useRef<HTMLDivElement>(null)

    const today = new Date()
    const formattedDate = today.toLocaleDateString("fr-FR") // jj/mm/aaaa
    const generateReceiptNumber = () => {
        const today = new Date()
        const datePart = today.toISOString().slice(0, 10).replace(/-/g, "") // YYYYMMDD
        const randomPart = Math.floor(1000 + Math.random() * 9000) // 4 chiffres aléatoires
        return `REC-${datePart}-${randomPart}`
    }
    const [data, setData] = useState<ReceiptData>({
        numero: generateReceiptNumber(),
        date: formattedDate,
        nom: "",
        phone: "",
        montantTotal: "",
        totalPaye: "",
        reste: "",
        montantPaye: "",
        montantLettre: ""
    })
    const [receipts, setReceipts] = useState<boolean>(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setData((prev) => ({ ...prev, [name]: value }))
    }

    const handlePrint = useReactToPrint({
        contentRef: receiptRef
    })

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

    const Receipt: React.FC = () => (
        <div className="bg-white border rounded-lg p-8 h-[132mm] flex flex-col justify-between">

            {/* HEADER */}

            <div className="flex items-center justify-between border-b-2 border-blue-900 pb-2">

                <img src={Img.ifpit} className="h-[22mm] object-contain" />

                <div className="text-center flex-1">

                    <h1 className="text-[14pt] font-bold text-blue-900 uppercase">
                        REÇU DE PAIEMENT – FORMATION
                    </h1>

                    <h2 className="text-[11pt] text-cyan-600">
                        Formation en Community Management
                    </h2>

                    <p className="text-[9pt]  text-black">
                        🌐 digital.freedry.dev | 📞 +237 670 616 710
                    </p>

                </div>

                <img src={Img.logo} className="h-[22mm] object-contain" />

            </div>

            {/* INFOS */}

            <div className="flex justify-between mt-3 text-[10pt]">

                <div className="w-1/2 text-black">
                    N° Reçu :
                    <span className="border-b w-32 inline-block ml-2">
                        {data.numero}
                    </span>
                </div>

                <div className="w-1/2 text-right  text-black">
                    Date :
                    <span className="border-b w-32 inline-block ml-2">
                        {data.date}
                    </span>
                </div>

            </div>

            <div className="flex justify-between mt-2 text-[10pt]">

                <div className="w-1/2  text-black ">
                    Nom du Participant :
                    <span className="border-b w-40 inline-block ml-2">
                        {data.nom}
                    </span>
                </div>

                <div className="w-1/2 text-right  text-black">
                    Téléphone :
                    <span className="border-b w-40 inline-block ml-2">
                        {data.phone}
                    </span>
                </div>

            </div>

            {/* OBJET */}

            <div className="mt-4">

                <div className="bg-gray-100 border-l-4 border-green-600 px-2 py-1 text-[9pt] font-bold  text-black">
                    OBJET DU PAIEMENT
                </div>

                <div className="flex gap-4 text-[9pt] mt-2  text-black">

                    <label className="flex gap-1">
                        <input type="checkbox" /> Frais d'inscription
                    </label>

                    <label className="flex gap-1">
                        <input type="checkbox" /> 1ère tranche
                    </label>

                    <label className="flex gap-1">
                        <input type="checkbox" /> 2ème tranche
                    </label>

                    <label className="flex gap-1">
                        <input type="checkbox" /> Paiement total
                    </label>

                </div>

            </div>

            {/* MODE */}

            <div className="mt-2">

                <div className="bg-gray-100 border-l-4 border-green-600 px-2 py-1 text-[9pt] font-bold  text-black">
                    MODE DE PAIEMENT
                </div>

                <div className="flex gap-4 text-[9pt] mt-2 text-black">

                    <label className="flex gap-1">
                        <input type="checkbox" /> Mobile Money
                    </label>

                    <label className="flex gap-1">
                        <input type="checkbox" /> Espèces
                    </label>

                    <label className="flex gap-1">
                        <input type="checkbox" /> Virement
                    </label>

                </div>

            </div>

            {/* FORMAT */}

            <div className="mt-2  text-black">

                <div className="bg-gray-100 border-l-4 border-green-600 px-2 py-1 text-[9pt] font-bold">
                    FORMAT
                </div>

                <div className="flex gap-4 text-[9pt] mt-2">

                    <label className="flex gap-1">
                        <input type="checkbox" /> Présentiel 6h
                    </label>

                    <label className="flex gap-1">
                        <input type="checkbox" /> Présentiel 12h
                    </label>

                    <label className="flex gap-1">
                        <input type="checkbox" /> En ligne
                    </label>

                </div>

            </div>

            {/* TABLEAU */}

            <div className="flex justify-between mt-3 text-black">

                <table className="border w-[55%] text-[9pt]">

                    <tbody>

                        <tr>
                            <td className="border px-2">Montant Total Formation</td>
                            <td className="border px-2">{data.montantTotal}</td>
                        </tr>

                        <tr>
                            <td className="border px-2">Total Payé</td>
                            <td className="border px-2">{data.totalPaye}</td>
                        </tr>

                        <tr>
                            <td className="border px-2">Reste à payer</td>
                            <td className="border px-2">{data.reste}</td>
                        </tr>

                    </tbody>

                </table>

                <div className="w-[40%] text-right">

                    <div className="text-[9pt]">Signature / Cachet</div>

                    <div className="border-dashed border h-16 mt-2"></div>

                </div>

            </div>

            {/* FOOTER */}

            <div className="text-[10pt] mt-6 text-black">

                <div>
                    Montant Payé (FCFA)
                    <span className="border-b ml-2 w-40 inline-block">
                        {data.montantPaye}
                    </span>
                </div>

                <div className="mt-2">
                    Montant en lettres
                    <span className="border-b ml-2 w-64 inline-block">
                        {data.montantLettre}
                    </span>
                </div>

            </div>

        </div>
    )

    return (
        <>

            {!receipts ?
                <div className="p-10 bg-gray min-h-screen">
                    <div className="mt-12">

                        <button
                            onClick={() => setReceipts(!receipts)}
                            className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
                        >
                            reçu standard
                        </button>

                        {/* FORMULAIRE */}

                        <div className="bg-white p-6 rounded-xl shadow mb-10 grid grid-cols-3 gap-4 text-black">

                            {/* <input name="numero" placeholder="Numéro reçu" onChange={handleChange} className="border p-2" /> */}
                            {/* <input name="date" placeholder="Date" onChange={handleChange} className="border p-2" />- */}
                            <input name="nom" placeholder="Nom" onChange={handleChange} className="border p-2" />
                            <input name="phone" placeholder="Téléphone" onChange={handleChange} className="border p-2" />
                            <input name="montantTotal" placeholder="Montant total" onChange={handleChange} className="border p-2" />
                            <input name="totalPaye" placeholder="Total payé" onChange={handleChange} className="border p-2" />
                            <input name="reste" placeholder="Reste à payer" onChange={handleChange} className="border p-2" />
                            <input name="montantPaye" placeholder="Montant payé" onChange={handleChange} className="border p-2" />
                            <input name="montantLettre" placeholder="Montant en lettres" onChange={handleChange} className="border p-2" />

                        </div>

                        {/* ACTIONS */}

                        <div className="flex gap-4 mb-6">

                            <button
                                onClick={handlePrint}
                                className="bg-blue-600 text-white px-6 py-2 rounded"
                            >
                                Imprimer
                            </button>

                            <button
                                onClick={downloadPDF}
                                className="bg-green-600 text-white px-6 py-2 rounded"
                            >
                                Télécharger PDF
                            </button>

                        </div>

                        {/* PAGE A4 */}

                        <div
                            ref={receiptRef}
                            className="bg-white mx-auto p-10 w-[210mm]"
                        >

                            <Receipt />

                            <div className="border-t-2 border-dashed mt-16 text-center">
                                ✂
                            </div>

                            {/* <Receipt /> */}

                        </div>

                    </div>


                </div>
                :
                <ProfessionalReceipt setReceipts={setReceipts} />}
        </>)
}

export default ReceiptGenerator