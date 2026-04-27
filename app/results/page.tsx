import Link from 'next/link';
import { restaurants } from '@/data/restaurants';
import { rankRestaurants, GOALS, type GoalId } from '@/lib/ranking';
import RestaurantRankCard from '@/components/RestaurantRankCard';

interface ResultsPageProps {
  searchParams: { goals?: string };
}

export default function ResultsPage({ searchParams }: ResultsPageProps) {
  const rawGoals = searchParams.goals ?? '';
  const validGoalIds = new Set(GOALS.map((g) => g.id));
  const selectedGoalIds = rawGoals
    .split(',')
    .filter((g): g is GoalId => validGoalIds.has(g as GoalId));

  const goalIds: GoalId[] = selectedGoalIds.length > 0 ? selectedGoalIds : ['lose-weight'];

  const rankedRestaurants = rankRestaurants(restaurants, goalIds);
  const selectedGoalDefs = GOALS.filter((g) => goalIds.includes(g.id));

  return (
    <main className="min-h-screen px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-zinc-400 transition-colors duration-150 hover:text-yellow-400"
          >
            ← Back to Goals
          </Link>
          <div className="flex flex-wrap gap-2">
            {selectedGoalDefs.map((goal) => (
              <span
                key={goal.id}
                className="inline-flex items-center gap-1.5 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1 text-xs font-bold text-yellow-300"
              >
                {goal.icon} {goal.label}
              </span>
            ))}
          </div>
        </div>

        <header className="mb-10 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-zinc-600">
            FastFoodFight 🥊
          </p>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            <span className="text-yellow-400">THE</span> RANKINGS
          </h1>
          <div className="mx-auto mt-3 flex max-w-xs items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-yellow-400/40" />
            <span className="text-xs text-zinc-600">⚔️</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-yellow-400/40" />
          </div>
          <p className="mt-3 text-sm text-zinc-500">
            Ranked by average score of top 3 items per restaurant
          </p>
        </header>

        <div className="space-y-4">
          {rankedRestaurants.map((rankedRestaurant) => (
            <RestaurantRankCard
              key={rankedRestaurant.restaurant.id}
              rankedRestaurant={rankedRestaurant}
              selectedGoals={goalIds}
            />
          ))}
        </div>

        <footer className="mt-12 text-center">
          <p className="text-xs text-zinc-700">
            Nutritional data sourced from Canadian restaurant websites. Preset configurations used for build-your-own items.
          </p>
          <Link
            href="/"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-zinc-900 border border-zinc-800 px-6 py-3 text-sm font-bold text-zinc-300 transition-all duration-200 hover:border-yellow-400/40 hover:text-yellow-400"
          >
            ← Change Goals
          </Link>
        </footer>
      </div>
    </main>
  );
}
