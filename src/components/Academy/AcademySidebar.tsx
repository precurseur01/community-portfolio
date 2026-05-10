import { ChevronDown, CheckCircle, BookOpen, Award } from 'lucide-react';
import { useState } from 'react';
import type { Course, CourseProgress } from '../../data/academy/types';
import ProgressBar from './ProgressBar';

interface AcademySidebarProps {
  courses: Course[];
  activeCourseId?: string;
  activeChapterId?: string;
  activeView?: 'overview' | 'chapter' | 'quiz' | 'exam';
  progress: Record<string, CourseProgress>;
  onSelectCourse: (courseId: string) => void;
  onSelectChapter: (courseId: string, chapterId: string) => void;
  onSelectExam: (courseId: string) => void;
  className?: string;
}

export default function AcademySidebar({
  courses, activeCourseId, activeChapterId, activeView, progress,
  onSelectCourse, onSelectChapter, onSelectExam, className = ''
}: AcademySidebarProps) {
  const [expanded, setExpanded] = useState<string[]>(activeCourseId ? [activeCourseId] : []);

  const toggle = (id: string) => {
    setExpanded(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const getCourseProgress = (course: Course) => {
    const p = progress[course.id];
    if (!p) return 0;
    const total = course.chapters.length + (course.exam.length > 0 ? 1 : 0);
    const done = p.completedChapters.length + (p.examCompleted ? 1 : 0);
    return Math.round((done / total) * 100);
  };

  return (
    <aside className={`space-y-2 ${className}`}>
      {/* Header */}
      <div className="px-3 pb-3 border-b border-white/10 mb-3">
        <div className="flex items-center gap-2 text-white">
          <BookOpen size={16} style={{ color: '#09A9E3' }} />
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#09A9E3' }}>Academy</span>
        </div>
      </div>

      {/* Courses */}
      {courses.map(course => {
        const isExpanded = expanded.includes(course.id);
        const isActive = activeCourseId === course.id;
        const pct = getCourseProgress(course);
        const cp = progress[course.id];

        return (
          <div key={course.id} className="rounded-xl overflow-hidden">
            {/* Course header */}
            <button
              onClick={() => { toggle(course.id); onSelectCourse(course.id); }}
              className={`w-full text-left px-3 py-3 flex items-center gap-3 transition-all duration-200 rounded-xl ${
                isActive && !activeChapterId && activeView !== 'exam' ? 'bg-white/10' : 'hover:bg-white/5'
              }`}
            >
              <span className="text-xl flex-shrink-0">{course.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-white truncate">{course.title.split('—')[0].trim()}</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full font-semibold uppercase"
                    style={{ background: `${course.color}20`, color: course.color }}>
                    {course.level === 'beginner' ? 'Débutant' : course.level === 'intermediate' ? 'Intermédiaire' : 'Avancé'}
                  </span>
                  {pct > 0 && <ProgressBar value={pct} color={course.color} size="sm" />}
                </div>
              </div>
              {course.chapters.length > 0 && (
                <ChevronDown size={14} className={`text-slate-500 transition-transform duration-200 flex-shrink-0 ${isExpanded ? 'rotate-180' : ''}`} />
              )}
            </button>

            {/* Chapters & Exam */}
            <div className={`transition-all duration-300 overflow-hidden ${(isExpanded || course.chapters.length === 0) ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="pl-4 pr-2 pb-2 space-y-0.5">
                {course.chapters.map((ch, ci) => {
                  const isChActive = isActive && activeChapterId === ch.id;
                  const isDone = cp?.completedChapters.includes(ch.id);

                  return (
                    <button key={ch.id}
                      onClick={() => onSelectChapter(course.id, ch.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2.5 transition-all text-xs ${
                        isChActive ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {isDone ? (
                        <CheckCircle size={14} className="flex-shrink-0" style={{ color: '#50BC74' }} />
                      ) : (
                        <span className="w-3.5 h-3.5 rounded-full border flex-shrink-0 flex items-center justify-center text-[9px] font-bold"
                          style={isChActive ? { borderColor: course.color, color: course.color } : { borderColor: 'rgba(255,255,255,0.2)' }}>
                          {ci + 1}
                        </span>
                      )}
                      <span className="truncate">{ch.title}</span>
                    </button>
                  );
                })}

                {/* Exam link */}
                {course.exam.length > 0 && (
                  <button
                    onClick={() => onSelectExam(course.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center gap-2.5 transition-all text-xs mt-1 ${
                      isActive && activeView === 'exam' ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Award size={14} className="flex-shrink-0" style={{ color: cp?.examCompleted ? '#50BC74' : '#FF8C42' }} />
                    <span className="font-semibold truncate">Examen Final Premium</span>
                    {cp?.examScore !== undefined && (
                      <span className="ml-auto text-[10px] font-bold" style={{ color: '#50BC74' }}>
                        {cp.examScore}%
                      </span>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </aside>
  );
}
