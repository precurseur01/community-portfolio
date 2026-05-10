import { cmFundamentals, cmAdvancedExam, cmPremiumExam } from './cm-fundamentals';

// ─── Course Registry ─────────────────────────────────────────────────────────

export const allCourses: Course[] = [cmFundamentals, cmAdvancedExam, cmPremiumExam];

export function getCourseById(id: string): Course | undefined {
  return allCourses.find(c => c.id === id);
}

export { cmFundamentals, cmAdvancedExam, cmPremiumExam };
