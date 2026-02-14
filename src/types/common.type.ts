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
