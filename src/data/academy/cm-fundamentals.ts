import type { Course } from './types';
import { ch1 } from './chapters/ch1-etablir';
import { ch2 } from './chapters/ch2-strategies';
import { ch3 } from './chapters/ch3-contenu';
import { ch4 } from './chapters/ch4-moderation';
import { ch5 } from './chapters/ch5-mesurer';
import { examFinal1 } from './exam-final-1';
import { examFinal2 } from './exam-final-2';
import { examPremium, examPremiumMeta } from './exam-premium';

// ─── Export ──────────────────────────────────────────────────────────────────

export const cmFundamentals: Course = {
  id: 'cm-fundamentals',
  title: 'Community Management — Guide d\'étude Meta',
  description: 'Cours complet basé sur le guide officiel Meta : établir, stratégiser, créer du contenu, modérer et mesurer la réussite d\'une communauté.',
  icon: '📘',
  color: '#09A9E3',
  gradient: 'from-[#09A9E3] to-[#0B3C5D]',
  chapters: [ch1, ch2, ch3, ch4, ch5],
  exam: examFinal1,
  level: 'beginner',
  duration: '6h00',
};

export const cmAdvancedExam: Course = {
  id: 'cm-advanced-exam',
  title: 'Community Management — Examen Avancé',
  description: 'Examen avancé : 30 mises en situation réelles couvrant la gestion de crise, le scaling, le ROI, le leadership et la modération internationale.',
  icon: '🎓',
  color: '#FF8C42',
  gradient: 'from-[#FF8C42] to-[#d96a2a]',
  chapters: [ch1, ch2, ch3, ch4, ch5],
  exam: examFinal2,
  level: 'advanced',
  duration: '6h00',
};

export const cmPremiumExam: Course = {
  id: 'cm-premium-exam',
  title: 'Examen de Community Management — Épreuve Écrite Premium',
  description: 'Évaluation finale certifiante : 30 questions de haut niveau validant vos compétences stratégiques et opérationnelles.',
  icon: '💎',
  color: '#09A9E3',
  gradient: 'from-[#09A9E3] to-[#0B3C5D]',
  chapters: [],
  exam: examPremium,
  examMetadata: examPremiumMeta,
  level: 'advanced',
  duration: '2h00',
};
