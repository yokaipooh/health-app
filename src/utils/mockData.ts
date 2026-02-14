import d01 from '../assets/images/d01.jpg';
import d02 from '../assets/images/d02.jpg';
import l01 from '../assets/images/l01.jpg';
import l02 from '../assets/images/l02.jpg';
import l03 from '../assets/images/l03.jpg';
import m01 from '../assets/images/m01.jpg';
import m02 from '../assets/images/m02.jpg';
import m03 from '../assets/images/m03.jpg';
import s01 from '../assets/images/s01.jpg';

import col1 from '../assets/images/column-1.jpg';
import col2 from '../assets/images/column-2.jpg';
import col3 from '../assets/images/column-3.jpg';
import col4 from '../assets/images/column-4.jpg';
import col5 from '../assets/images/column-5.jpg';
import col6 from '../assets/images/column-6.jpg';
import col7 from '../assets/images/column-7.jpg';
import col8 from '../assets/images/column-8.jpg';

export type MockMealItem = {
  id: number;
  imageUrl: string;
  date: string;
  label: string;
};

export type MockColumnItem = {
  id: number;
  imageUrl: string;
  date: string;
  time: string;
  title: string;
  tags: string[];
};

let mealIdCounter = 1;
let columnIdCounter = 1;

const MEAL_IMAGES = {
  Morning: [m01, m02, m03],
  Lunch: [l01, l02, l03],
  Dinner: [d01, d02],
  Snack: [s01],
};

const COLUMN_IMAGES = [col1, col2, col3, col4, col5, col6, col7, col8];

/**
 * Generates an array of mock meal history items.
 * @param count Number of items to generate.
 */
export const generateMealHistory = (count: number): MockMealItem[] => {
  const items: MockMealItem[] = [];
  const labels = ['Morning', 'Lunch', 'Dinner', 'Snack'];

  for (let i = 0; i < count; i++) {
    const id = mealIdCounter++;
    const label = labels[id % 4] as keyof typeof MEAL_IMAGES;
    const images = MEAL_IMAGES[label];
    // Cycle through images for this label
    const imageUrl = images[id % images.length];

    items.push({
      id,
      imageUrl,
      date: `05.${(21 + Math.floor(id / 4)).toString().padStart(2, '0')}`,
      label,
    });
  }
  return items;
};

/**
 * Generates an array of mock column articles.
 * @param count Number of items to generate.
 */
export const generateColumnArticles = (count: number): MockColumnItem[] => {
  const items: MockColumnItem[] = [];
  const titles = [
    '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
  ];
  const tags = ['魚料理', '和食', 'DHA'];

  for (let i = 0; i < count; i++) {
    const id = columnIdCounter++;
    items.push({
      id,
      imageUrl: COLUMN_IMAGES[id % COLUMN_IMAGES.length],
      date: '2021.05.17',
      time: '23:25',
      title: titles[id % 4],
      tags: tags,
    });
  }
  return items;
};
