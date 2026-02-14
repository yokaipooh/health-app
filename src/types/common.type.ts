export interface MealCardProps {
  imageUrl: string;
  date: string;
  label: string;
  onClick?: () => void;
}

export interface RecordCategoryCardProps {
  imageUrl: string;
  title: string;
  subTitle: string;
  onClick?: () => void;
}

export interface ColumnCardProps {
  imageUrl: string;
  date: string;
  time: string;
  title: string;
  tags: string[];
  onClick?: () => void;
}

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

export type MockExerciseItem = {
  id: number;
  title: string;
  kcal: string;
  time: string;
};

export type MockDiaryItem = {
  id: number;
  date: string;
  time: string;
  title: string;
  content: string;
};

export type MockBodyRecordItem = {
  name: string; // month or label
  weight: number;
  bodyFat: number;
};
