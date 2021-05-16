import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { useBookCardStyles } from './BookCard.styles';
import { BookCardProps } from './BookCard.types';

export function BookCard(props: BookCardProps) {
  const { book, onClickFavorite, favorite } = props;
  const { thumbnail, title, id } = book;
  const classes = useBookCardStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={thumbnail} title={title} />
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={e => {
            e.preventDefault();
            e.stopPropagation();
            if (onClickFavorite) {
              console.log(id);
              onClickFavorite(id);
            }
          }}>
          <FavoriteIcon color={favorite ? 'primary' : 'disabled'} />
        </IconButton>
      </CardActions>
      <CardContent>
        <Typography variant="h5" color="textSecondary" component="p">
          {title.slice(0, 80)}
        </Typography>
      </CardContent>
    </Card>
  );
}
