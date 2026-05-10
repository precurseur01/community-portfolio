import { BookOpen, ArrowRight, Clock, Award, BarChart3 } from 'lucide-react';
import type { Course, CourseProgress } from '../../data/academy/types';
import ProgressBar from './ProgressBar';

interface CourseOverviewProps {
  course: Course;
  progress?: CourseProgress;
  onSelectChapter: (chapterId: string) => void;
  onSelectExam: () => void;
}

export default function CourseOverview({ course, progress, onSelectChapter, onSelectExam }: CourseOverviewProps) {
  const completedCount = progress?.completedChapters.length ?? 0;
  const totalChapters = course.chapters.length;
  const pct = totalChapters > 0 ? Math.round((completedCount / totalChapters) * 100) : 0;

  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="rounded-2xl overflow-hidden relative shadow-2xl">
        <div className="p-8 relative z-10" style={{ background: `linear-gradient(135deg, ${course.color}20, ${course.color}05)` }}>
          <div className="flex items-start gap-4 flex-wrap">
            <span className="text-5xl">{course.icon}</span>
            <div className="flex-1 min-w-[200px]">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3"
                style={{ background: `${course.color}20`, color: course.color, border: `1px solid ${course.color}40` }}>
                {course.level === 'beginner' ? '📘 Débutant' : course.level === 'intermediate' ? '📙 Intermédiaire' : '🎓 Avancé'}
              </span>
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">{course.title}</h1>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{course.description}</p>

              <div className="flex items-center gap-4 flex-wrap text-xs text-slate-500">
                <span className="flex items-center gap-1.5"><Clock size={13} /> {course.duration}</span>
                {totalChapters > 0 && <span className="flex items-center gap-1.5"><BookOpen size={13} /> {totalChapters} chapitres</span>}
                <span className="flex items-center gap-1.5"><BarChart3 size={13} /> {totalChapters > 0 ? course.chapters.reduce((a, c) => a + c.quiz.length, 0) : course.exam.length} questions</span>
              </div>
            </div>
          </div>

          {/* Progress */}
          {completedCount > 0 && totalChapters > 0 && (
            <div className="mt-6 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-400">Progression</span>
                <span className="text-xs font-semibold" style={{ color: course.color }}>{pct}%</span>
              </div>
              <ProgressBar value={pct} color={course.color} size="md" />
            </div>
          )}
        </div>
      </div>

      {/* Chapters or Exam Only */}
      <div>
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          {totalChapters > 0 ? (
            <>
              <BookOpen size={18} style={{ color: course.color }} />
              Programme du cours
            </>
          ) : (
            <>
              <Award size={18} style={{ color: '#FF8C42' }} />
              Accès direct à l'examen
            </>
          )}
        </h2>

        <div className="space-y-3">
          {course.chapters.map((ch, ci) => {
            const isDone = progress?.completedChapters.includes(ch.id);
            const quizScore = progress?.chapterScores[ch.id];

            return (
              <button key={ch.id}
                onClick={() => onSelectChapter(ch.id)}
                className="w-full text-left group rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/5 hover:border-white/20 p-4 transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg"
                    style={{ background: isDone ? '#50BC7420' : `${course.color}15` }}>
                    {isDone ? '✅' : ch.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Chapitre {ci + 1}</span>
                      {quizScore !== undefined && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full font-semibold"
                          style={{ background: '#50BC7420', color: '#50BC74' }}>
                          Quiz: {quizScore}%
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-white group-hover:text-white/90 truncate">{ch.title}</p>
                    <p className="text-xs text-slate-500 truncate mt-0.5">{ch.description}</p>
                  </div>
                  <ArrowRight size={16} className="text-slate-600 group-hover:translate-x-1 transition-transform flex-shrink-0"
                    style={{ color: isDone ? '#50BC74' : undefined }} />
                </div>
              </button>
            );
          })}

          {/* Exam card */}
          {course.exam.length > 0 && (
            <button onClick={onSelectExam}
              className={`w-full text-left group rounded-xl border-2 p-6 transition-all duration-200 hover:-translate-y-1 shadow-xl ${
                totalChapters === 0 ? 'scale-100' : ''
              }`}
              style={{ borderColor: '#FF8C4240', background: 'linear-gradient(135deg, rgba(255,140,66,0.1), rgba(255,140,66,0.05))' }}>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                  style={{ background: '#FF8C42' }}>
                  <Award size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-2 py-0.5 rounded bg-[#FF8C42]/20" style={{ color: '#FF8C42' }}>Épreuve Certifiante</span>
                    {progress?.examScore !== undefined && (
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-[#50BC74]/20 text-[#50BC74]">Score: {progress.examScore}%</span>
                    )}
                  </div>
                  <p className="text-lg font-bold text-white mb-1">Examen Final Premium</p>
                  <p className="text-sm text-slate-400">{course.exam.length} questions • Validé si ≥ 70%</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <ArrowRight size={20} className="text-white group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
