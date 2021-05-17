export interface BookBarProps {
  title: string;
  favorite?: boolean;
  onClickBack?: () => void;
  onClickFavorite?: () => void;
}
