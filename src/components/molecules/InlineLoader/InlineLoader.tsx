import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

import { Button } from '@src/components/athoms';

import { useInlineLoader } from './InlineLoader.styles';
import { InlineLoaderProps } from './InlineLoader.types';

export function InlineLoader(props: InlineLoaderProps) {
  const { title, loading, ...others } = props;
  const classes = useInlineLoader();
  return (
    <Button {...others} color="primary" variant="outlined" className={classes.button}>
      <span className={classes.title}>{title}</span>
      <CircularProgress variant={loading ? 'indeterminate' : 'determinate'} value={100} />
    </Button>
  );
}
