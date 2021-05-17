import React, { useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import InputBase from '@material-ui/core/InputBase';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';

import { Button } from '@src/components/athoms';

import { useSearchBarStyles } from './SearchBar.styles';
import { SearchBarProps } from './SearchBar.types';

export function SearchBar(props: SearchBarProps) {
  const { onSubmit, title } = props;
  const [value, setValue] = useState('');
  const classes = useSearchBarStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.title} variant="h6" noWrap>
          {title}
        </Typography>
        <div className={classes.grow} />
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            name="search"
            placeholder="Search…"
            onChange={ev => setValue(ev.target.value)}
            onKeyUp={ev => {
              ev.persist();
              console.log(ev.key);
              if (ev.key === 'Enter') {
                onSubmit(value);
              }
            }}
            value={value}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
          <Button variant="text" textColor="#fff" onClick={() => onSubmit(value)}>
            SEARCH
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
