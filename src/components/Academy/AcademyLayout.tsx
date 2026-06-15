import { useState, useEffect, useCallback } from 'react';
import { allCourses } from '../../data/academy/courses';
import type { Course, Chapter, CourseProgress } from '../../data/academy/types';
import AcademySidebar from './AcademySidebar';
import AcademyMobileNav from './AcademyMobileNav';
import CourseOverview from './CourseOverview';
import ChapterContent from './ChapterContent';
import QuizEngine from './QuizEngine';

// ─── localStorage helpers ────────────────────────────────────────────────────

const STORAGE_KEY = 'academy_progress';

function loadProgress(): Record<string, CourseProgress> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

function saveProgress(p: Record<string, CourseProgress>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

// ─── Types ───────────────────────────────────────────────────────────────────

type View = 'overview' | 'chapter' | 'quiz' | 'exam';

// ─── Component ───────────────────────────────────────────────────────────────

export default function AcademyLayout() {
  const [activeCourseId, setActiveCourseId] = useState(allCourses[0]?.id ?? '');
  const [activeChapterId, setActiveChapterId] = useState<string | undefined>();
  const [view, setView] = useState<View>('overview');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [progress, setProgress] = useState<Record<string, CourseProgress>>(loadProgress);

  const course: Course | undefined = allCourses.find(c => c.id === activeCourseId);
  const chapter: Chapter | undefined = course?.chapters.find(c => c.id === activeChapterId);

  // Persist progress
  useEffect(() => { saveProgress(progress); }, [progress]);

  // Scroll to top on view change
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [view, activeChapterId]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  // ─── Navigation handlers ──────────────────────────────────────────────────

  const selectCourse = (courseId: string) => {
    setActiveCourseId(courseId);
    setActiveChapterId(undefined);
    setView('overview');
    closeMobile();
  };

  const selectChapter = (courseId: string, chapterId: string) => {
    setActiveCourseId(courseId);
    setActiveChapterId(chapterId);
    setView('chapter');
    closeMobile();
  };

  const selectExam = (courseId: string) => {
    setActiveCourseId(courseId);
    setActiveChapterId(undefined);
    setView('exam');
    closeMobile();
  };

  const startQuiz = () => setView('quiz');

  const handleQuizComplete = (score: number, total: number) => {
    if (!activeChapterId || !activeCourseId) return;
    const pct = Math.round((score / total) * 100);
    setProgress(prev => {
      const cp = prev[activeCourseId] || { courseId: activeCourseId, completedChapters: [], chapterScores: {}, examCompleted: false };
      const completedChapters = pct >= 70 && !cp.completedChapters.includes(activeChapterId)
        ? [...cp.completedChapters, activeChapterId] : cp.completedChapters;
      return { ...prev, [activeCourseId]: { ...cp, completedChapters, chapterScores: { ...cp.chapterScores, [activeChapterId]: pct } } };
    });
  };

  const handleExamComplete = (score: number, total: number) => {
    const pct = Math.round((score / total) * 100);
    setProgress(prev => {
      const cp = prev[activeCourseId] || { courseId: activeCourseId, completedChapters: [], chapterScores: {}, examCompleted: false };
      return { ...prev, [activeCourseId]: { ...cp, examScore: pct, examCompleted: pct >= 70 } };
    });
  };

  const goToNextChapter = () => {
    if (!course || !activeChapterId) return;
    const idx = course.chapters.findIndex(c => c.id === activeChapterId);
    if (idx < course.chapters.length - 1) {
      selectChapter(activeCourseId, course.chapters[idx + 1].id);
    } else {
      selectCourse(activeCourseId);
    }
  };

  // ─── Render ───────────────────────────────────────────────────────────────

  const sidebarContent = (
    <AcademySidebar
      courses={allCourses}
      activeCourseId={activeCourseId}
      activeChapterId={activeChapterId}
      activeView={view}
      progress={progress}
      onSelectCourse={selectCourse}
      onSelectChapter={selectChapter}
      onSelectExam={selectExam}
    />
  );

  const renderContent = () => {
    if (!course) return <div className="text-slate-400 text-center py-20">Sélectionnez un cours</div>;

    switch (view) {
      case 'overview':
        return (
          <CourseOverview
            course={course}
            progress={progress[activeCourseId]}
            onSelectChapter={(chId) => selectChapter(activeCourseId, chId)}
            onSelectExam={() => selectExam(activeCourseId)}
          />
        );

      case 'chapter':
        if (!chapter) return null;
        return (
          <ChapterContent
            chapter={chapter}
            courseColor={course.color}
            onStartQuiz={startQuiz}
          />
        );

      case 'quiz':
        if (!chapter) return null;
        return (
          <QuizEngine
            questions={chapter.quiz}
            title={`Quiz — ${chapter.title}`}
            courseColor={course.color}
            onComplete={handleQuizComplete}
            onContinue={goToNextChapter}
          />
        );

      case 'exam':
        return (
          <QuizEngine
            questions={course.exam}
            title={`Examen Final — ${course.title.split('—')[0].trim()}`}
            courseColor="#FF8C42"
            metadata={course.examMetadata}
            onComplete={handleExamComplete}
            onContinue={() => selectCourse(activeCourseId)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen pt-[76px]">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 py-6">
        <div className="flex gap-6">
          {/* Desktop sidebar */}
          <div className="hidden lg:block w-[280px] flex-shrink-0">
            <div className="sticky top-[100px] bg-card backdrop-blur-sm rounded-2xl border border-border p-4 max-h-[calc(100vh-120px)] overflow-y-auto shadow-lg">
              {sidebarContent}
            </div>
          </div>

          {/* Mobile sidebar */}
          <AcademyMobileNav isOpen={mobileOpen} onToggle={() => setMobileOpen(!mobileOpen)}>
            {sidebarContent}
          </AcademyMobileNav>

          {/* Main content */}
          <main className="flex-1 min-w-0">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
}
