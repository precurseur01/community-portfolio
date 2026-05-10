// ─── Academy Data Types ──────────────────────────────────────────────────────

export interface LessonBlock {
  type: 'text' | 'callout' | 'list' | 'example' | 'tip' | 'warning';
  title?: string;
  content: string | string[];
}

export interface Lesson {
  id: string;
  title: string;
  content: LessonBlock[];
  duration: string;
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswers: number[];
  multiSelect: boolean;
  explanation?: string;
}

export interface Chapter {
  id: string;
  title: string;
  description: string;
  icon: string;
  lessons: Lesson[];
  quiz: Question[];
}

export interface ExamMetadata {
  title: string;
  subtitle: string;
  duration: string;
  documents: string;
  materiel: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  gradient: string;
  chapters: Chapter[];
  exam: Question[];
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  examMetadata?: ExamMetadata;
}

export interface CourseProgress {
  courseId: string;
  completedChapters: string[];
  chapterScores: Record<string, number>;
  examScore?: number;
  examCompleted: boolean;
}
