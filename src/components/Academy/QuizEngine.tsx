import { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, FileText, Calculator, Award } from 'lucide-react';
import type { Question, ExamMetadata } from '../../data/academy/types';
import QuizResults from './QuizResults';
import { useAuth } from '../../context/AuthContext';

interface QuizEngineProps {
  questions: Question[];
  title?: string;
  courseColor?: string;
  onComplete?: (score: number, total: number) => void;
  onContinue?: () => void;
  metadata?: ExamMetadata;
}

export default function QuizEngine({ questions, title = 'Quiz', courseColor = '#09A9E3', onComplete, onContinue, metadata }: QuizEngineProps) {
  const { user } = useAuth();
  const candidateName =
    (user?.user_metadata?.full_name as string | undefined) ||
    user?.email ||
    'Candidat';

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<Record<number, number[]>>({});
  const [showResults, setShowResults] = useState(false);
  const [showLanding, setShowLanding] = useState(!!metadata);
  const [score, setScore] = useState(0);

  const q = questions[current];
  const userAnswers = selected[current] || [];
  const progress = ((current + 1) / questions.length) * 100;

  const handleSelect = (idx: number) => {
    if (q.multiSelect) {
      const cur = selected[current] || [];
      const next = cur.includes(idx) ? cur.filter(i => i !== idx) : [...cur, idx];
      setSelected({ ...selected, [current]: next });
    } else {
      setSelected({ ...selected, [current]: [idx] });
    }
  };

  const finish = () => {
    let correct = 0;
    questions.forEach((qu, i) => {
      const ua = selected[i] || [];
      if (ua.length === qu.correctAnswers.length && qu.correctAnswers.every(a => ua.includes(a))) correct++;
    });
    setScore(correct);
    setShowResults(true);
    onComplete?.(correct, questions.length);
  };

  const reset = () => {
    setCurrent(0);
    setSelected({});
    setShowResults(false);
    setShowLanding(!!metadata);
    setScore(0);
  };

  if (showResults) {
    return (
      <QuizResults
        questions={questions}
        selectedAnswers={selected}
        score={score}
        onReset={reset}
        onContinue={onContinue}
        courseColor={courseColor}
        candidateName={candidateName}
        examTitle={metadata?.title ?? title}
        examSubtitle={metadata?.subtitle}
      />
    );
  }

  if (showLanding && metadata) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-card backdrop-blur-sm border border-border rounded-2xl overflow-hidden shadow-2xl">
          {/* Premium Header */}
          <div className="p-8 border-b border-border text-center space-y-4">
            <div className="w-16 h-16 bg-[#09A9E3]/20 rounded-full flex items-center justify-center mx-auto mb-2">
              <Award className="text-[#09A9E3]" size={32} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-1 tracking-tight">{metadata.title}</h1>
              <p className="text-[#09A9E3] font-semibold tracking-[0.2em] text-sm uppercase">{metadata.subtitle}</p>
            </div>
            <div className="w-24 h-1 bg-[#09A9E3] mx-auto rounded-full" />
          </div>

          {/* Exam Details */}
          <div className="p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-secondary/30 p-4 rounded-xl border border-border flex flex-col items-center text-center">
                <Clock className="text-muted-foreground mb-2" size={20} />
                <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider mb-1">Durée</span>
                <span className="text-foreground font-medium">{metadata.duration}</span>
              </div>
              <div className="bg-secondary/30 p-4 rounded-xl border border-border flex flex-col items-center text-center">
                <FileText className="text-muted-foreground mb-2" size={20} />
                <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider mb-1">Documents</span>
                <span className="text-foreground font-medium">{metadata.documents}</span>
              </div>
              <div className="bg-secondary/30 p-4 rounded-xl border border-border flex flex-col items-center text-center">
                <Calculator className="text-muted-foreground mb-2" size={20} />
                <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider mb-1">Matériel</span>
                <span className="text-foreground font-medium">{metadata.materiel}</span>
              </div>
            </div>

            <div className="bg-[#FF8C42]/10 border border-[#FF8C42]/30 p-5 rounded-xl">
              <div className="flex gap-3">
                <div className="w-5 h-5 bg-[#FF8C42] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-black text-[10px] font-bold">!</span>
                </div>
                <div>
                  <h4 className="text-[#FF8C42] font-bold text-sm mb-1">Consignes Importantes</h4>
                  <p className="text-foreground/80 text-xs leading-relaxed">
                    Cet examen comporte 30 questions. Pour valider votre épreuve premium, vous devez obtenir un score minimal de 70%. Une fois l'épreuve commencée, assurez-vous d'avoir une connexion stable.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowLanding(false)}
              className="w-full py-4 rounded-xl font-bold text-white transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#09A9E3]/20"
              style={{ background: 'linear-gradient(135deg, #09A9E3 0%, #0B3C5D 100%)' }}
            >
              COMMENCER L'ÉPREUVE
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="rounded-t-2xl border border-border bg-card backdrop-blur-sm p-5 shadow-md">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-foreground">{title}</h3>
          <span className="text-sm font-semibold" style={{ color: courseColor }}>
            {current + 1} / {questions.length}
          </span>
        </div>
        <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
          <div className="h-full rounded-full transition-all duration-300" style={{ width: `${progress}%`, background: courseColor }} />
        </div>
      </div>

      {/* Question */}
      <div className="border border-border bg-card backdrop-blur-sm p-7 rounded-xl shadow-lg">
        {q.multiSelect && (
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
            style={{ background: `${courseColor}20`, color: courseColor, border: `1px solid ${courseColor}40` }}>
            Sélection multiple
          </span>
        )}
        <p className="text-foreground leading-relaxed whitespace-pre-line text-base md:text-lg font-medium">{q.question}</p>
      </div>

      {/* Options */}
      <div className="space-y-2.5">
        {q.options.map((opt, i) => {
          const isSel = userAnswers.includes(i);
          return (
            <button key={i} onClick={() => handleSelect(i)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 hover:-translate-y-0.5 ${
                isSel ? 'shadow-lg' : 'bg-card border-border hover:border-border/80 hover:bg-secondary/30'
              }`}
              style={isSel ? {
                borderColor: courseColor,
                background: `${courseColor}12`,
                boxShadow: `0 4px 24px ${courseColor}25`,
              } : {}}>
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                  isSel ? 'border-transparent' : 'border-border'
                }`} style={isSel ? { background: courseColor } : {}}>
                  {isSel && (
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <span className={`text-sm ${isSel ? 'text-foreground font-medium' : 'text-foreground/90'}`}>{opt}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="rounded-b-2xl border border-border bg-card backdrop-blur-sm p-5 shadow-md">
        <div className="flex items-center justify-between">
          <button onClick={() => setCurrent(c => Math.max(0, c - 1))} disabled={current === 0}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all disabled:opacity-30 disabled:cursor-not-allowed bg-secondary/30 border border-border text-foreground/80 hover:bg-secondary/60">
            <ChevronLeft size={16} /> Précédent
          </button>

          <span className="text-xs text-muted-foreground">
            {Object.keys(selected).length} / {questions.length} réponses
          </span>

          <button onClick={() => current === questions.length - 1 ? finish() : setCurrent(c => c + 1)}
            disabled={userAnswers.length === 0}
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 hover:shadow-lg disabled:hover:shadow-none"
            style={{ background: userAnswers.length === 0 ? 'hsl(var(--muted))' : current === questions.length - 1 ? '#50BC74' : courseColor, color: userAnswers.length === 0 ? 'hsl(var(--muted-foreground))' : '#ffffff', boxShadow: userAnswers.length === 0 ? 'none' : `0 4px 16px ${current === questions.length - 1 ? '#50BC7440' : courseColor + '40'}` }}>
            {current === questions.length - 1 ? 'Terminer' : 'Suivant'} <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
