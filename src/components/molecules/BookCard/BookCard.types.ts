export interface BookCardItem {
  id: string;
  title: string;
  thumbnail: string;
}

export interface BookCardProps {
  book: BookCardItem;
  favorite?: boolean;
  onClickFavorite?: (id: string) => void;
}
