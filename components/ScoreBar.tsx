'use client';

interface ScoreBarProps {
  score: number;
  color?: string;
}

export default function ScoreBar({ score, color = '#eab308' }: ScoreBarProps) {
  const clamped = Math.min(100, Math.max(0, score));

  return (
    <div className="flex items-center gap-3">
      <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-zinc-800">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{ width: `${clamped}%`, backgroundColor: color }}
        />
      </div>
      <span className="w-12 text-right text-sm font-black tabular-nums text-white">
        {score.toFixed(1)}
      </span>
    </div>
  );
}
