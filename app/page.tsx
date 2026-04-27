'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import GoalCard from '@/components/GoalCard';
import { GOALS, type GoalId } from '@/lib/ranking';

export default function HomePage() {
  const router = useRouter();
  const [selectedGoals, setSelectedGoals] = useState<Set<GoalId>>(new Set());

  const toggleGoal = (id: GoalId) => {
    setSelectedGoals((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleFight = () => {
    if (selectedGoals.size === 0) return;
    const goalParam = Array.from(selectedGoals).join(',');
    router.push(`/results?goals=${goalParam}`);
  };

  const hasGoals = selectedGoals.size > 0;

  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-yellow-400">
              🇨🇦 Canadian Chains Only
            </div>
            <h1 className="text-5xl font-black tracking-tight sm:text-7xl">
              <span className="text-white">FastFood</span>
              <span className="text-yellow-400">Fight</span>
              <span className="ml-3">🥊</span>
            </h1>
            <p className="mt-4 text-lg text-zinc-400">
              Pick your health goals. We rank every chain. May the best burger win.
            </p>
            <div className="mt-3 flex items-center justify-center gap-2 text-sm text-zinc-600">
              <span>7 restaurants</span>
              <span>·</span>
              <span>56 menu items</span>
              <span>·</span>
              <span>6 health goals</span>
            </div>
          </header>

          <section>
            <h2 className="mb-2 text-center text-sm font-bold uppercase tracking-widest text-zinc-500">
              Step 1 — Choose Your Goals
            </h2>
            <p className="mb-6 text-center text-xs text-zinc-600">
              Select one or more goals to score each restaurant
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {GOALS.map((goal) => (
                <GoalCard
                  key={goal.id}
                  goal={goal}
                  selected={selectedGoals.has(goal.id)}
                  onToggle={() => toggleGoal(goal.id)}
                />
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="sticky bottom-0 border-t border-zinc-800/80 bg-[#0a0a0f]/90 px-4 py-4 backdrop-blur-md sm:px-6">
        <div className="mx-auto max-w-3xl">
          {!hasGoals && (
            <p className="mb-2 text-center text-xs text-zinc-500">
              Pick at least one goal to start
            </p>
          )}
          <button
            onClick={handleFight}
            disabled={!hasGoals}
            className={`
              w-full rounded-xl py-4 text-lg font-black tracking-tight transition-all duration-200
              ${hasGoals
                ? 'cursor-pointer bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-[0_0_30px_rgba(234,179,8,0.4)] hover:shadow-[0_0_50px_rgba(234,179,8,0.6)] hover:scale-[1.01] active:scale-[0.99]'
                : 'cursor-not-allowed bg-zinc-800 text-zinc-600'
              }
            `}
          >
            {hasGoals
              ? `FIGHT! → (${selectedGoals.size} goal${selectedGoals.size > 1 ? 's' : ''} selected)`
              : 'FIGHT! →'}
          </button>
        </div>
      </div>
    </main>
  );
}
