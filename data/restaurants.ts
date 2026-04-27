export interface MenuItem {
  name: string;
  calories: number;
  protein: number;
  fat: number;
  satFat: number;
  carbs: number;
  fiber: number;
  sugar: number;
  sodium: number;
}

export interface Restaurant {
  id: string;
  name: string;
  color: string;
  emoji: string;
  items: MenuItem[];
}

export const restaurants: Restaurant[] = [
  {
    id: 'mcdonalds',
    name: "McDonald's",
    color: '#DA291C',
    emoji: '🍟',
    items: [
      { name: 'Big Mac', calories: 540, protein: 25, fat: 28, satFat: 10, carbs: 46, fiber: 3, sugar: 9, sodium: 940 },
      { name: 'Quarter Pounder with Cheese', calories: 510, protein: 29, fat: 25, satFat: 12, carbs: 43, fiber: 2, sugar: 10, sodium: 1050 },
      { name: 'McDouble', calories: 390, protein: 23, fat: 19, satFat: 8, carbs: 33, fiber: 2, sugar: 7, sodium: 800 },
      { name: 'Junior Chicken', calories: 280, protein: 13, fat: 12, satFat: 2, carbs: 29, fiber: 1, sugar: 4, sodium: 520 },
      { name: 'McChicken', calories: 360, protein: 15, fat: 16, satFat: 3, carbs: 40, fiber: 2, sugar: 5, sodium: 680 },
      { name: 'Filet-O-Fish', calories: 370, protein: 15, fat: 17, satFat: 4, carbs: 38, fiber: 2, sugar: 5, sodium: 560 },
      { name: 'Crispy Chicken Sandwich', calories: 480, protein: 24, fat: 22, satFat: 4, carbs: 48, fiber: 2, sugar: 7, sodium: 900 },
      { name: 'McPlant Burger', calories: 410, protein: 22, fat: 18, satFat: 4, carbs: 42, fiber: 4, sugar: 7, sodium: 810 },
    ],
  },
  {
    id: 'aw',
    name: 'A&W',
    color: '#F5A623',
    emoji: '🍺',
    items: [
      { name: 'Teen Burger', calories: 400, protein: 21, fat: 18, satFat: 7, carbs: 37, fiber: 2, sugar: 7, sodium: 720 },
      { name: 'Mama Burger', calories: 300, protein: 14, fat: 13, satFat: 5, carbs: 30, fiber: 2, sugar: 5, sodium: 480 },
      { name: 'Papa Burger', calories: 490, protein: 28, fat: 23, satFat: 9, carbs: 44, fiber: 2, sugar: 9, sodium: 860 },
      { name: 'Uncle Burger', calories: 600, protein: 35, fat: 30, satFat: 13, carbs: 48, fiber: 2, sugar: 11, sodium: 1060 },
      { name: 'Buddy Burger', calories: 210, protein: 10, fat: 9, satFat: 3.5, carbs: 22, fiber: 1, sugar: 4, sodium: 320 },
      { name: 'Chicken Burger', calories: 420, protein: 23, fat: 17, satFat: 3, carbs: 44, fiber: 2, sugar: 6, sodium: 780 },
      { name: 'Spicy Habanero Burger', calories: 410, protein: 22, fat: 19, satFat: 7, carbs: 37, fiber: 2, sugar: 7, sodium: 740 },
      { name: 'Beyond Meat Burger', calories: 480, protein: 27, fat: 22, satFat: 5, carbs: 44, fiber: 4, sugar: 8, sodium: 1000 },
    ],
  },
  {
    id: 'burgerking',
    name: 'Burger King',
    color: '#F5871F',
    emoji: '👑',
    items: [
      { name: 'Whopper', calories: 660, protein: 28, fat: 38, satFat: 12, carbs: 49, fiber: 2, sugar: 11, sodium: 910 },
      { name: 'Double Whopper', calories: 900, protein: 46, fat: 55, satFat: 18, carbs: 49, fiber: 2, sugar: 11, sodium: 1000 },
      { name: 'Impossible Whopper', calories: 630, protein: 25, fat: 34, satFat: 11, carbs: 58, fiber: 4, sugar: 12, sodium: 1080 },
      { name: 'Junior Whopper', calories: 370, protein: 19, fat: 19, satFat: 6, carbs: 31, fiber: 1, sugar: 7, sodium: 560 },
      { name: 'Crispy Chicken Sandwich', calories: 520, protein: 22, fat: 24, satFat: 4, carbs: 55, fiber: 3, sugar: 8, sodium: 920 },
      { name: 'Original Chicken Sandwich', calories: 450, protein: 20, fat: 21, satFat: 4, carbs: 48, fiber: 2, sugar: 6, sodium: 800 },
      { name: 'Spicy Crispy Chicken', calories: 530, protein: 22, fat: 25, satFat: 4.5, carbs: 55, fiber: 3, sugar: 8, sodium: 980 },
      { name: 'Rodeo Burger', calories: 340, protein: 17, fat: 15, satFat: 5, carbs: 35, fiber: 1, sugar: 10, sodium: 680 },
    ],
  },
  {
    id: 'wendys',
    name: "Wendy's",
    color: '#E2203D',
    emoji: '🦰',
    items: [
      { name: "Dave's Single", calories: 590, protein: 30, fat: 30, satFat: 12, carbs: 51, fiber: 2, sugar: 11, sodium: 1060 },
      { name: "Dave's Double", calories: 820, protein: 51, fat: 45, satFat: 19, carbs: 53, fiber: 2, sugar: 11, sodium: 1290 },
      { name: 'Baconator', calories: 950, protein: 55, fat: 56, satFat: 23, carbs: 53, fiber: 2, sugar: 11, sodium: 1750 },
      { name: 'Jr. Cheeseburger', calories: 290, protein: 16, fat: 13, satFat: 5, carbs: 27, fiber: 1, sugar: 6, sodium: 590 },
      { name: 'Classic Chicken Sandwich', calories: 510, protein: 27, fat: 19, satFat: 4, carbs: 57, fiber: 3, sugar: 8, sodium: 880 },
      { name: 'Spicy Chicken Sandwich', calories: 500, protein: 26, fat: 19, satFat: 4, carbs: 56, fiber: 3, sugar: 8, sodium: 850 },
      { name: 'Grilled Chicken Sandwich', calories: 390, protein: 33, fat: 8, satFat: 1.5, carbs: 46, fiber: 3, sugar: 10, sodium: 770 },
      { name: 'Pretzel Pub Chicken', calories: 560, protein: 34, fat: 22, satFat: 9, carbs: 58, fiber: 2, sugar: 11, sodium: 1490 },
    ],
  },
  {
    id: 'chipotle',
    name: 'Chipotle',
    color: '#A81612',
    emoji: '🌯',
    items: [
      { name: 'Chicken Bowl', calories: 565, protein: 43, fat: 13, satFat: 4, carbs: 65, fiber: 11, sugar: 5, sodium: 1280 },
      { name: 'Steak Bowl', calories: 570, protein: 40, fat: 15, satFat: 5, carbs: 65, fiber: 11, sugar: 5, sodium: 1260 },
      { name: 'Chicken Burrito', calories: 745, protein: 47, fat: 20, satFat: 6, carbs: 95, fiber: 12, sugar: 5, sodium: 1690 },
      { name: 'Sofritas Bowl', calories: 500, protein: 24, fat: 16, satFat: 4, carbs: 68, fiber: 13, sugar: 7, sodium: 1250 },
      { name: 'Veggie Bowl', calories: 495, protein: 19, fat: 15, satFat: 3, carbs: 73, fiber: 14, sugar: 8, sodium: 1140 },
      { name: 'Barbacoa Bowl', calories: 545, protein: 36, fat: 17, satFat: 6, carbs: 65, fiber: 11, sugar: 5, sodium: 1610 },
      { name: 'Chicken Tacos (3 crispy)', calories: 470, protein: 35, fat: 17, satFat: 4, carbs: 49, fiber: 7, sugar: 3, sodium: 1100 },
      { name: 'Steak Soft Tacos (3)', calories: 520, protein: 36, fat: 18, satFat: 6, carbs: 57, fiber: 8, sugar: 3, sodium: 1200 },
    ],
  },
  {
    id: 'subway',
    name: 'Subway',
    color: '#009B44',
    emoji: '🥖',
    items: [
      { name: 'Oven Roasted Chicken', calories: 310, protein: 23, fat: 5, satFat: 1, carbs: 45, fiber: 4, sugar: 6, sodium: 610 },
      { name: 'Turkey Breast', calories: 280, protein: 18, fat: 3.5, satFat: 1, carbs: 46, fiber: 4, sugar: 7, sodium: 720 },
      { name: 'Tuna', calories: 430, protein: 20, fat: 19, satFat: 3.5, carbs: 45, fiber: 4, sugar: 6, sodium: 590 },
      { name: 'Italian BMT', calories: 380, protein: 19, fat: 13, satFat: 5, carbs: 48, fiber: 4, sugar: 7, sodium: 1160 },
      { name: 'Meatball Marinara', calories: 440, protein: 21, fat: 15, satFat: 6, carbs: 54, fiber: 5, sugar: 12, sodium: 1130 },
      { name: 'Veggie Delite', calories: 230, protein: 9, fat: 2.5, satFat: 0.5, carbs: 44, fiber: 4, sugar: 6, sodium: 390 },
      { name: 'Steak & Cheese', calories: 370, protein: 25, fat: 10, satFat: 4.5, carbs: 45, fiber: 4, sugar: 6, sodium: 960 },
      { name: 'Black Forest Ham', calories: 290, protein: 19, fat: 5, satFat: 1.5, carbs: 45, fiber: 4, sugar: 6, sodium: 830 },
    ],
  },
  {
    id: 'mrsub',
    name: 'Mr. Sub',
    color: '#E31937',
    emoji: '🥙',
    items: [
      { name: 'Classic Italian', calories: 380, protein: 19, fat: 14, satFat: 5, carbs: 46, fiber: 3, sugar: 5, sodium: 1090 },
      { name: 'Turkey', calories: 270, protein: 17, fat: 3, satFat: 0.5, carbs: 44, fiber: 3, sugar: 5, sodium: 620 },
      { name: 'Tuna', calories: 400, protein: 18, fat: 17, satFat: 3, carbs: 46, fiber: 3, sugar: 5, sodium: 590 },
      { name: 'Roast Beef', calories: 290, protein: 20, fat: 5, satFat: 1.5, carbs: 43, fiber: 3, sugar: 5, sodium: 660 },
      { name: 'Meatball', calories: 440, protein: 21, fat: 16, satFat: 6, carbs: 52, fiber: 4, sugar: 9, sodium: 1060 },
      { name: 'Chicken Caesar', calories: 330, protein: 22, fat: 8, satFat: 2, carbs: 42, fiber: 3, sugar: 4, sodium: 780 },
      { name: 'Veggie', calories: 220, protein: 9, fat: 2, satFat: 0.5, carbs: 42, fiber: 3, sugar: 4, sodium: 340 },
      { name: 'Club Sub', calories: 320, protein: 22, fat: 8, satFat: 2.5, carbs: 43, fiber: 3, sugar: 5, sodium: 900 },
    ],
  },
];
