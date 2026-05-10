import { BookOpen, AlertTriangle, Lightbulb, List, MessageSquare, Info } from 'lucide-react';
import type { Chapter } from '../../data/academy/types';

interface ChapterContentProps {
  chapter: Chapter;
  courseColor?: string;
  onStartQuiz: () => void;
}

const blockIcons = {
  text: null,
  callout: Info,
  list: List,
  example: MessageSquare,
  tip: Lightbulb,
  warning: AlertTriangle,
};

const blockStyles: Record<string, { bg: string; border: string; titleColor: string }> = {
  text: { bg: '', border: '', titleColor: 'text-white' },
  callout: { bg: 'bg-[#09A9E3]/10', border: 'border-[#09A9E3]/30', titleColor: 'text-[#09A9E3]' },
  list: { bg: 'bg-white/[0.03]', border: 'border-white/10', titleColor: 'text-white' },
  example: { bg: 'bg-[#50BC74]/10', border: 'border-[#50BC74]/30', titleColor: 'text-[#50BC74]' },
  tip: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', titleColor: 'text-amber-400' },
  warning: { bg: 'bg-red-500/10', border: 'border-red-500/30', titleColor: 'text-red-400' },
};

export default function ChapterContent({ chapter, courseColor = '#09A9E3', onStartQuiz }: ChapterContentProps) {
  return (
    <div className="space-y-8">
      {/* Chapter header */}
      <div className="border-b border-white/10 pb-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">{chapter.icon}</span>
          <div>
            <h2 className="text-2xl font-bold text-white">{chapter.title}</h2>
            <p className="text-sm text-slate-400 mt-1">{chapter.description}</p>
          </div>
        </div>
      </div>

      {/* Lessons */}
      {chapter.lessons.map((lesson, li) => (
        <div key={lesson.id} className="space-y-4">
          {/* Lesson title */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
              style={{ background: courseColor }}>
              {li + 1}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">{lesson.title}</h3>
              <span className="text-xs text-slate-500">⏱ {lesson.duration}</span>
            </div>
          </div>

          {/* Lesson blocks */}
          {lesson.content.map((block, bi) => {
            const style = blockStyles[block.type];
            const Icon = blockIcons[block.type];

            if (block.type === 'text') {
              return (
                <p key={bi} className="text-slate-300 text-sm leading-relaxed pl-11">
                  {block.content as string}
                </p>
              );
            }

            return (
              <div key={bi} className={`rounded-xl border p-4 ml-11 ${style.bg} ${style.border}`}>
                {(block.title || Icon) && (
                  <div className={`flex items-center gap-2 mb-2 ${style.titleColor}`}>
                    {Icon && <Icon size={15} />}
                    {block.title && <span className="text-sm font-semibold">{block.title}</span>}
                  </div>
                )}
                {Array.isArray(block.content) ? (
                  <ul className="space-y-1.5">
                    {block.content.map((item, ii) => (
                      <li key={ii} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: courseColor }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-slate-300 leading-relaxed">{block.content}</p>
                )}
              </div>
            );
          })}

          {/* Separator between lessons */}
          {li < chapter.lessons.length - 1 && (
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent ml-11" />
          )}
        </div>
      ))}

      {/* Quiz CTA */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
        <BookOpen size={28} className="mx-auto mb-3" style={{ color: courseColor }} />
        <h3 className="text-lg font-bold text-white mb-2">Testez vos connaissances</h3>
        <p className="text-sm text-slate-400 mb-4">
          {chapter.quiz.length} questions pour valider ce chapitre
        </p>
        <button onClick={onStartQuiz}
          className="px-6 py-3 rounded-xl text-white font-semibold text-sm hover:opacity-90 transition-all hover:-translate-y-0.5"
          style={{ background: courseColor }}>
          Commencer le quiz →
        </button>
      </div>
    </div>
  );
}
