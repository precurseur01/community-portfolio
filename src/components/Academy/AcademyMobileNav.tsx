import { BookOpen, X } from 'lucide-react';

interface AcademyMobileNavProps {
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

export default function AcademyMobileNav({ isOpen, onToggle, children }: AcademyMobileNavProps) {
  return (
    <>
      {/* Toggle button — fixed bottom-left on mobile */}
      <button onClick={onToggle}
        className="lg:hidden fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full shadow-xl flex items-center justify-center transition-all active:scale-90"
        style={{ background: 'linear-gradient(135deg, #09A9E3, #50BC74)' }}>
        {isOpen ? <X size={20} className="text-white" /> : <BookOpen size={20} className="text-white" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm" onClick={onToggle} />
      )}

      {/* Drawer */}
      <div className={`lg:hidden fixed inset-y-0 left-0 z-40 w-[280px] bg-slate-950/95 backdrop-blur-xl border-r border-white/10 transform transition-transform duration-300 ease-out overflow-y-auto ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`} style={{ paddingTop: '80px' }}>
        <div className="p-4">
          {children}
        </div>
      </div>
    </>
  );
}
