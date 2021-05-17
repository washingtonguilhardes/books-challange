import React from 'react';

import { default as MUIButton } from '@material-ui/core/Button';

import clsx from 'clsx';

import { useButtonStyles } from './Button.styles';
import { ButtonProps } from './Button.types';

export function Button(props: ButtonProps) {
  const { textColor, ...others } = props;
  const classes = useButtonStyles({ textColor, ...props });
  return <MUIButton {...others} className={clsx(classes.root, others.className)} />;
}
