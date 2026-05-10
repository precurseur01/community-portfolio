interface ProgressBarProps {
  value: number;    // 0-100
  color?: string;   // hex color
  size?: 'sm' | 'md';
  showLabel?: boolean;
}

export default function ProgressBar({ value, color = '#50BC74', size = 'sm', showLabel = false }: ProgressBarProps) {
  const h = size === 'sm' ? 'h-1.5' : 'h-2.5';
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div className="flex items-center gap-2 w-full">
      <div className={`flex-1 ${h} rounded-full bg-white/10 overflow-hidden`}>
        <div
          className={`${h} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${clamped}%`, background: color }}
        />
      </div>
      {showLabel && (
        <span className="text-[11px] font-semibold tabular-nums" style={{ color }}>
          {Math.round(clamped)}%
        </span>
      )}
    </div>
  );
}
