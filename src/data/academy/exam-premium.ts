import { examFinal3 as part1, examPremiumMeta } from './exam-premium-part1';
import { examPremiumPart2 as part2 } from './exam-premium-part2';
import type { Question } from './types';

// ─── Examen Premium complet (30 questions) ───────────────────────────────────

export const examPremium: Question[] = [...part1, ...part2];

export { examPremiumMeta };
