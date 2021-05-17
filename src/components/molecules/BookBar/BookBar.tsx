import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import { useBookBarStyles } from './BookBar.styles';
import { BookBarProps } from './BookBar.types';

export function BookBar(props: BookBarProps) {
  const { title, onClickBack, favorite, onClickFavorite } = props;
  const classes = useBookBarStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          style={{ marginRight: 16 }}
          edge="start"
          color="inherit"
          aria-label="back to home page"
          onClick={onClickBack}>
          <ArrowBackIcon />
        </IconButton>
        <Typography className={classes.title} variant="h6" noWrap>
          {title}
        </Typography>
        <div className={classes.grow} />
        <IconButton
          style={{ marginRight: 16 }}
          edge="start"
          color="inherit"
          aria-label="back to home page"
          onClick={onClickFavorite}>
          {favorite ? (
            <FavoriteIcon color="inherit" />
          ) : (
            <FavoriteBorderIcon color="inherit" />
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
