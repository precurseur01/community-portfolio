import { useRef, useState } from 'react';
import {
  CheckCircle, XCircle, RotateCcw, Award,
  Printer, Download, X, FileText,
} from 'lucide-react';
import { useReactToPrint } from 'react-to-print';
import type { Question } from '../../data/academy/types';

interface QuizResultsProps {
  questions: Question[];
  selectedAnswers: Record<number, number[]>;
  score: number;
  onReset: () => void;
  onContinue?: () => void;
  courseColor?: string;
  candidateName?: string;
  examTitle?: string;
  examSubtitle?: string;
}

export default function QuizResults({
  questions, selectedAnswers, score, onReset, onContinue,
  courseColor = '#09A9E3',
  candidateName = 'Candidat',
  examTitle = 'Examen',
  examSubtitle = '',
}: QuizResultsProps) {
  const pct = Math.round((score / questions.length) * 100);
  const passed = pct >= 70;
  const [showBulletin, setShowBulletin] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const bulletinRef = useRef<HTMLDivElement>(null);

  const today = new Date().toLocaleDateString('fr-FR', {
    day: '2-digit', month: 'long', year: 'numeric',
  });

  /* ── Print (react-to-print rend uniquement bulletinRef dans un iframe) ── */
  const handlePrint = useReactToPrint({
    contentRef: bulletinRef,
    documentTitle: `Bulletin_${candidateName}_${examTitle}`,
  });

  /* ── Download PDF ── */
  const handleDownload = async () => {
    if (!bulletinRef.current || downloading) return;
    setDownloading(true);
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const mod = await import('html2pdf.js' as any);
      const html2pdf = mod.default ?? mod;
      await html2pdf()
        .set({
          margin: [10, 10, 10, 10],
          filename: `Bulletin_${candidateName.replace(/\s+/g, '_')}.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: {
            scale: 2,
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff',
          },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        })
        .from(bulletinRef.current)
        .save();
    } finally {
      setDownloading(false);
    }
  };

  /* ── Helpers ── */
  const passedColor = passed ? '#50BC74' : '#ef4444';

  return (
    <div className="space-y-6">
      {/* ── Score card ── */}
      <div className="rounded-2xl border border-border bg-card backdrop-blur-sm p-8 text-center shadow-xl">
        <div
          className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center"
          style={{ background: passed ? 'rgba(80,188,116,0.15)' : 'rgba(239,68,68,0.15)' }}
        >
          <Award size={36} style={{ color: passedColor }} />
        </div>

        <h2 className="text-3xl font-bold text-foreground mb-1">{score}/{questions.length}</h2>
        <p className="text-lg mb-4" style={{ color: passedColor }}>
          {pct}% — {passed ? 'Réussi ! 🎉' : 'À retravailler'}
        </p>

        <div className="h-2 rounded-full bg-secondary max-w-xs mx-auto mb-6 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{ width: `${pct}%`, background: passedColor }}
          />
        </div>

        <div className="flex items-center justify-center gap-3 flex-wrap">
          <button
            onClick={onReset}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-secondary/30 border border-border text-foreground/80 text-sm font-semibold hover:bg-secondary/60 transition-all"
          >
            <RotateCcw size={15} /> Recommencer
          </button>

          <button
            onClick={() => setShowBulletin(true)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-semibold hover:opacity-90 transition-all"
            style={{ background: courseColor }}
          >
            <FileText size={15} /> Voir le bulletin
          </button>

          {onContinue && passed && (
            <button
              onClick={onContinue}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-semibold hover:opacity-90 transition-all"
              style={{ background: '#50BC74' }}
            >
              Continuer →
            </button>
          )}
        </div>
      </div>

      {/* ── Detailed answers (screen) ── */}
      <div className="space-y-4">
        {questions.map((q, qi) => {
          const userAnswer = selectedAnswers[qi] || [];
          const isCorrect =
            q.correctAnswers.length === userAnswer.length &&
            q.correctAnswers.every(a => userAnswer.includes(a));

          return (
            <div key={qi} className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <div className="flex items-start gap-3 mb-3">
                {isCorrect
                  ? <CheckCircle size={20} className="flex-shrink-0 mt-0.5" style={{ color: '#50BC74' }} />
                  : <XCircle size={20} className="flex-shrink-0 mt-0.5" style={{ color: '#ef4444' }} />
                }
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground mb-1">Question {qi + 1}</p>
                  <p className="text-xs text-muted-foreground line-clamp-2">{q.question.split('\n')[0]}</p>
                </div>
              </div>
              <div className="space-y-1.5 pl-8">
                {q.options.map((opt, oi) => {
                  const isUser = userAnswer.includes(oi);
                  const isRight = q.correctAnswers.includes(oi);
                  let bg = 'bg-secondary/30 border-border';
                  if (isRight) bg = 'bg-[#50BC74]/15 border-[#50BC74]/40';
                  else if (isUser) bg = 'bg-red-500/15 border-red-500/40';
                  return (
                    <div key={oi} className={`px-3 py-2 rounded-lg text-xs border ${bg}`}>
                      <span className="text-foreground/80">{opt}</span>
                      {isRight && <span className="ml-2 text-[#50BC74] font-semibold">✓</span>}
                      {isUser && !isRight && <span className="ml-2 text-red-500 font-semibold">✗</span>}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          BULLETIN MODAL — rendu visible → print + html2pdf fonctionnent
          ══════════════════════════════════════════════════════════════ */}
      {showBulletin && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            backgroundColor: '#dadadc',
            overflow: 'auto',
            display: 'flex', flexDirection: 'column',
          }}
        >
          {/* Barre d'actions (non imprimée) */}
          <div
            className="no-print"
            style={{
              position: 'sticky', top: 0, zIndex: 10000,
              backgroundColor: '#1a1c1e',
              padding: '10px 24px',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
            }}
          >
            <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '14px', fontFamily: 'Manrope, sans-serif', letterSpacing: '0.05em' }}>
              Bulletin d'examen
            </span>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <button
                onClick={() => handlePrint()}
                style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  padding: '7px 14px', borderRadius: '8px',
                  backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
                  color: '#ffffff', fontSize: '13px', fontWeight: 600,
                  cursor: 'pointer', fontFamily: 'Manrope, sans-serif',
                }}
              >
                <Printer size={14} /> Imprimer
              </button>
              <button
                onClick={handleDownload}
                disabled={downloading}
                style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  padding: '7px 14px', borderRadius: '8px',
                  backgroundColor: '#00668a', border: 'none',
                  color: '#ffffff', fontSize: '13px', fontWeight: 600,
                  cursor: downloading ? 'not-allowed' : 'pointer',
                  opacity: downloading ? 0.6 : 1,
                  fontFamily: 'Manrope, sans-serif',
                }}
              >
                <Download size={14} /> {downloading ? 'Génération...' : 'Télécharger PDF'}
              </button>
              <button
                onClick={() => setShowBulletin(false)}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '32px', height: '32px', borderRadius: '8px',
                  backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
                  color: '#94a3b8', cursor: 'pointer',
                }}
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Bulletin imprimable */}
          <div style={{ display: 'flex', justifyContent: 'center', padding: '32px 16px 48px' }}>
            <div
              ref={bulletinRef}
              style={{
                width: '794px',
                backgroundColor: '#ffffff',
                color: '#1a1c1e',
                fontFamily: "'Georgia', 'Times New Roman', serif",
                fontSize: '11px',
                lineHeight: '1.5',
                padding: '40px',
                boxShadow: '0 4px 32px rgba(0,0,0,0.18)',
                boxSizing: 'border-box',
              }}
            >
              {/* ── EN-TÊTE ── */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '16px',
                paddingBottom: '16px',
                borderBottom: '2px solid #00668a',
                marginBottom: '12px',
              }}>
                <img
                  src="/favicon.png"
                  alt="Free Digital Solutions"
                  style={{ width: '52px', height: '52px', objectFit: 'contain', flexShrink: 0 }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.15em', color: '#00668a', textTransform: 'uppercase', fontFamily: 'Manrope, sans-serif' }}>
                    Free Digital Solutions
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: '#1a1c1e', marginTop: '2px', fontFamily: 'Manrope, sans-serif' }}>
                    {examTitle}
                  </div>
                  {examSubtitle && (
                    <div style={{ fontSize: '11px', fontWeight: 600, color: '#00668a', marginTop: '2px', fontFamily: 'Manrope, sans-serif', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      {examSubtitle}
                    </div>
                  )}
                </div>
                <div style={{ textAlign: 'right', fontSize: '10px', color: '#6e7880', fontFamily: 'Manrope, sans-serif' }}>
                  <div style={{ fontWeight: 600, color: '#1a1c1e' }}>{today}</div>
                  <div style={{ marginTop: '2px' }}>Bulletin officiel</div>
                </div>
              </div>

              {/* ── CANDIDAT ── */}
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                backgroundColor: '#f3f3f6', borderRadius: '6px',
                padding: '10px 16px', marginBottom: '16px',
                fontFamily: 'Manrope, sans-serif',
              }}>
                <div>
                  <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6e7880' }}>Candidat</div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#1a1c1e', marginTop: '2px' }}>{candidateName}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6e7880' }}>Seuil de réussite</div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#00668a', marginTop: '2px' }}>70%</div>
                </div>
              </div>

              {/* ── RÉSULTAT ── */}
              <div style={{
                border: `2px solid ${passedColor}`,
                borderRadius: '8px', padding: '16px', marginBottom: '20px',
                backgroundColor: passed ? 'rgba(80,188,116,0.04)' : 'rgba(239,68,68,0.04)',
              }}>
                <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6e7880', marginBottom: '10px', fontFamily: 'Manrope, sans-serif' }}>
                  Résultat final
                </div>
                <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '28px', fontWeight: 800, color: '#1a1c1e', fontFamily: 'Manrope, sans-serif', lineHeight: 1 }}>
                      {score}/{questions.length}
                    </div>
                    <div style={{ fontSize: '9px', color: '#6e7880', marginTop: '3px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Score</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '28px', fontWeight: 800, color: passedColor, fontFamily: 'Manrope, sans-serif', lineHeight: 1 }}>
                      {pct}%
                    </div>
                    <div style={{ fontSize: '9px', color: '#6e7880', marginTop: '3px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Pourcentage</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      display: 'inline-block', padding: '5px 14px', borderRadius: '999px',
                      fontWeight: 700, fontSize: '11px', fontFamily: 'Manrope, sans-serif',
                      backgroundColor: passedColor, color: '#ffffff',
                    }}>
                      {passed ? '✓ RÉUSSI' : '✗ À RETRAVAILLER'}
                    </div>
                    <div style={{ marginTop: '8px', height: '6px', backgroundColor: '#e8e8ea', borderRadius: '999px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${pct}%`, backgroundColor: passedColor, borderRadius: '999px' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* ── CORRIGÉ ── */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{
                  fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em',
                  textTransform: 'uppercase', color: '#6e7880', marginBottom: '10px',
                  fontFamily: 'Manrope, sans-serif', borderBottom: '1px solid #e2e2e5', paddingBottom: '6px',
                }}>
                  Corrigé détaillé — {questions.length} questions
                </div>

                {questions.map((q, qi) => {
                  const userAnswer = selectedAnswers[qi] || [];
                  const isCorrect =
                    q.correctAnswers.length === userAnswer.length &&
                    q.correctAnswers.every(a => userAnswer.includes(a));

                  const lines = q.question.split('\n');
                  const contextLines = lines.slice(0, -1).filter(l => l.trim() !== '');
                  const questionLine = lines[lines.length - 1];

                  return (
                    <div key={qi} style={{ marginBottom: '12px' }}>
                      <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '4px' }}>
                        <span style={{
                          flexShrink: 0, width: '18px', height: '18px',
                          borderRadius: '50%',
                          backgroundColor: isCorrect ? '#50BC74' : '#ef4444',
                          color: '#fff', fontSize: '9px', fontWeight: 700,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontFamily: 'Manrope, sans-serif',
                        }}>
                          {isCorrect ? '✓' : '✗'}
                        </span>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: '9px', fontWeight: 700, color: '#6e7880', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'Manrope, sans-serif' }}>
                            Question {qi + 1}
                          </div>
                          {contextLines.length > 0 && (
                            <p style={{ fontSize: '9.5px', color: '#6e7880', margin: '2px 0 3px', fontStyle: 'italic', lineHeight: '1.4' }}>
                              {contextLines.join(' ')}
                            </p>
                          )}
                          <p style={{ fontSize: '10.5px', fontWeight: 600, color: '#1a1c1e', margin: '0 0 5px', lineHeight: '1.4' }}>
                            {questionLine}
                          </p>
                          <div style={{ paddingLeft: '8px' }}>
                            {q.options.map((opt, oi) => {
                              const isUser = userAnswer.includes(oi);
                              const isRight = q.correctAnswers.includes(oi);
                              const letter = String.fromCharCode(65 + oi);
                              let bgColor = 'transparent';
                              let borderColor = '#dadadc';
                              let textColor = '#3e484f';
                              let fontWeight: number = 400;
                              if (isRight) { bgColor = 'rgba(80,188,116,0.12)'; borderColor = '#50BC74'; textColor = '#006d37'; fontWeight = 600; }
                              else if (isUser) { bgColor = 'rgba(239,68,68,0.08)'; borderColor = '#ef4444'; textColor = '#ef4444'; }
                              return (
                                <div key={oi} style={{
                                  display: 'flex', gap: '6px', alignItems: 'flex-start',
                                  padding: '3px 6px', marginBottom: '2px',
                                  borderRadius: '4px',
                                  border: `1px solid ${borderColor}`,
                                  backgroundColor: bgColor,
                                }}>
                                  <span style={{ flexShrink: 0, fontSize: '9px', fontWeight: 700, color: isRight ? '#006d37' : isUser ? '#ef4444' : '#6e7880', fontFamily: 'Manrope, sans-serif', minWidth: '12px' }}>
                                    {letter}.
                                  </span>
                                  <span style={{ fontSize: '9.5px', color: textColor, fontWeight, lineHeight: '1.4', flex: 1 }}>{opt}</span>
                                  {isRight && <span style={{ flexShrink: 0, fontSize: '9px', color: '#006d37', fontWeight: 700 }}>✓</span>}
                                  {isUser && !isRight && <span style={{ flexShrink: 0, fontSize: '9px', color: '#ef4444', fontWeight: 700 }}>✗</span>}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ── PIED DE PAGE ── */}
              <div style={{
                borderTop: '2px solid #e2e2e5', paddingTop: '12px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <img
                    src="/favicon.png"
                    alt="Free Digital Solutions"
                    style={{ width: '22px', height: '22px', objectFit: 'contain' }}
                  />
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#00668a', fontFamily: 'Manrope, sans-serif', letterSpacing: '0.05em' }}>
                    Free Digital Solutions
                  </span>
                </div>
                <span style={{ fontSize: '9px', color: '#6e7880', fontFamily: 'Manrope, sans-serif', letterSpacing: '0.08em' }}>
                  © 2025 Free Digital Solutions — Tous droits réservés
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
