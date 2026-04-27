'use client';

import { type GOALS } from '@/lib/ranking';

type Goal = (typeof GOALS)[number];

interface GoalCardProps {
  goal: Goal;
  selected: boolean;
  onToggle: () => void;
}

export default function GoalCard({ goal, selected, onToggle }: GoalCardProps) {
  return (
    <button
      onClick={onToggle}
      className={`
        relative flex flex-col items-center gap-3 rounded-xl border p-5 text-center
        transition-all duration-200 cursor-pointer w-full
        ${selected
          ? 'border-yellow-400 bg-yellow-400/10 shadow-[0_0_20px_rgba(234,179,8,0.3)]'
          : 'border-zinc-800 bg-zinc-900/60 hover:border-zinc-600 hover:bg-zinc-900'
        }
      `}
    >
      {selected && (
        <span className="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-xs font-black text-black">
          ✓
        </span>
      )}
      <span className="text-4xl leading-none">{goal.icon}</span>
      <div>
        <p className={`font-black text-sm tracking-tight ${selected ? 'text-yellow-300' : 'text-white'}`}>
          {goal.label}
        </p>
        <p className="mt-0.5 text-xs text-zinc-400">{goal.description}</p>
      </div>
    </button>
  );
}
