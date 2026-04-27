'use client';

import { useState } from 'react';
import ScoreBar from '@/components/ScoreBar';
import { type RankedRestaurant, type GoalId, GOALS } from '@/lib/ranking';

interface RestaurantRankCardProps {
  rankedRestaurant: RankedRestaurant;
  selectedGoals: GoalId[];
}

const RANK_BADGES: Record<number, string> = {
  1: '🥇',
  2: '🥈',
  3: '🥉',
};

export default function RestaurantRankCard({ rankedRestaurant, selectedGoals }: RestaurantRankCardProps) {
  const [expanded, setExpanded] = useState(false);
  const { restaurant, score, topItems, rank } = rankedRestaurant;

  const displayItems = expanded ? topItems : topItems.slice(0, 3);
  const selectedGoalDefs = GOALS.filter((g) => selectedGoals.includes(g.id));

  return (
    <div
      className="rounded-xl border border-zinc-800 bg-zinc-900/80 overflow-hidden transition-all duration-200 hover:border-zinc-700"
      style={{ borderLeftColor: restaurant.color, borderLeftWidth: '4px' }}
    >
      <div className="p-5">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 flex flex-col items-center gap-1">
            {rank <= 3 ? (
              <span className="text-3xl leading-none">{RANK_BADGES[rank]}</span>
            ) : (
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-black text-white"
                style={{ backgroundColor: restaurant.color }}
              >
                {rank}
              </span>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl leading-none">{restaurant.emoji}</span>
              <h2
                className="text-xl font-black tracking-tight"
                style={{ color: restaurant.color }}
              >
                {restaurant.name}
              </h2>
            </div>

            <div className="mb-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Overall Score</span>
                <span className="text-xs text-zinc-500">/ 100</span>
              </div>
              <ScoreBar score={score} color={restaurant.color} />
            </div>

            {selectedGoalDefs.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-3">
                {selectedGoalDefs.map((goal) => (
                  <span
                    key={goal.id}
                    className="inline-flex items-center gap-1 rounded-full bg-zinc-800 px-2 py-0.5 text-xs text-zinc-300"
                  >
                    {goal.icon} {goal.label}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 border-t border-zinc-800 pt-4">
          <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">
            Top Menu Items
          </p>
          <div className="space-y-2">
            {displayItems.map((item, idx) => (
              <div key={item.name} className="flex items-center gap-3">
                <span className="text-xs text-zinc-600 w-5 text-right flex-shrink-0">
                  {idx + 1}.
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-sm font-semibold text-zinc-200 truncate">{item.name}</span>
                    <span className="text-xs text-zinc-500 flex-shrink-0">{item.calories} cal</span>
                  </div>
                  <ScoreBar score={item.score} color={restaurant.color} />
                </div>
              </div>
            ))}
          </div>

          {topItems.length > 3 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-3 text-xs font-bold text-zinc-400 hover:text-zinc-200 transition-colors duration-150"
            >
              {expanded ? '▲ Show less' : `▼ Show all ${topItems.length} items`}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
