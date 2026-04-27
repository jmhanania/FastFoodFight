import { type MenuItem, type Restaurant } from '@/data/restaurants';

export type GoalId = 'lose-weight' | 'build-muscle' | 'low-carb' | 'heart-health' | 'high-fiber' | 'low-sugar';

export const GOALS: { id: GoalId; label: string; icon: string; description: string }[] = [
  { id: 'lose-weight', label: 'Lose Weight', icon: '🔥', description: 'Lowest calorie options' },
  { id: 'build-muscle', label: 'Build Muscle', icon: '💪', description: 'Highest protein options' },
  { id: 'low-carb', label: 'Low Carb / Keto', icon: '⚡', description: 'Lowest carbohydrate options' },
  { id: 'heart-health', label: 'Heart Health', icon: '❤️', description: 'Low sodium & saturated fat' },
  { id: 'high-fiber', label: 'High Fiber', icon: '🌿', description: 'Highest fiber options' },
  { id: 'low-sugar', label: 'Low Sugar', icon: '🍬', description: 'Lowest sugar options' },
];

export interface ScoredItem extends MenuItem {
  restaurantId: string;
  score: number;
}

export interface RankedRestaurant {
  restaurant: Restaurant;
  score: number;
  topItems: ScoredItem[];
  rank: number;
}

function normalize(value: number, min: number, max: number): number {
  if (max === min) return 0.5;
  return (value - min) / (max - min);
}

function getMinMax(items: MenuItem[], key: keyof MenuItem): { min: number; max: number } {
  const values = items.map((item) => item[key] as number);
  return { min: Math.min(...values), max: Math.max(...values) };
}

function computeItemScore(item: MenuItem, goalId: GoalId, ranges: Record<string, { min: number; max: number }>): number {
  const n = (key: keyof MenuItem) => normalize(item[key] as number, ranges[key].min, ranges[key].max);

  switch (goalId) {
    case 'lose-weight':
      return (1 - n('calories')) * 100;
    case 'build-muscle':
      return n('protein') * 100;
    case 'low-carb':
      return (1 - n('carbs')) * 100;
    case 'heart-health':
      return ((1 - n('sodium')) + (1 - n('satFat'))) / 2 * 100;
    case 'high-fiber':
      return n('fiber') * 100;
    case 'low-sugar':
      return (1 - n('sugar')) * 100;
  }
}

export function scoreItems(items: (MenuItem & { restaurantId: string })[], goalIds: GoalId[]): ScoredItem[] {
  const fields: (keyof MenuItem)[] = ['calories', 'protein', 'fat', 'satFat', 'carbs', 'fiber', 'sugar', 'sodium'];
  const ranges: Record<string, { min: number; max: number }> = {};
  for (const field of fields) {
    ranges[field] = getMinMax(items, field);
  }

  return items.map((item) => {
    const goalScores = goalIds.map((g) => computeItemScore(item, g, ranges));
    const score = goalScores.reduce((a, b) => a + b, 0) / goalScores.length;
    return { ...item, score };
  }).sort((a, b) => b.score - a.score);
}

export function rankRestaurants(restaurants: Restaurant[], goalIds: GoalId[]): RankedRestaurant[] {
  const allItems: (MenuItem & { restaurantId: string })[] = restaurants.flatMap((r) =>
    r.items.map((item) => ({ ...item, restaurantId: r.id }))
  );

  const fields: (keyof MenuItem)[] = ['calories', 'protein', 'fat', 'satFat', 'carbs', 'fiber', 'sugar', 'sodium'];
  const ranges: Record<string, { min: number; max: number }> = {};
  for (const field of fields) {
    ranges[field] = getMinMax(allItems, field);
  }

  const scoredAll: ScoredItem[] = allItems.map((item) => {
    const goalScores = goalIds.map((g) => computeItemScore(item, g, ranges));
    const score = goalScores.reduce((a, b) => a + b, 0) / goalScores.length;
    return { ...item, score };
  });

  const ranked = restaurants.map((restaurant) => {
    const restaurantItems = scoredAll
      .filter((item) => item.restaurantId === restaurant.id)
      .sort((a, b) => b.score - a.score);

    const top3 = restaurantItems.slice(0, 3);
    const restaurantScore = top3.length > 0
      ? Math.round((top3.reduce((sum, item) => sum + item.score, 0) / top3.length) * 10) / 10
      : 0;

    return {
      restaurant,
      score: restaurantScore,
      topItems: restaurantItems,
      rank: 0,
    };
  }).sort((a, b) => b.score - a.score);

  return ranked.map((r, i) => ({ ...r, rank: i + 1 }));
}
