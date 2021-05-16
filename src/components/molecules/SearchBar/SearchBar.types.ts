import React from 'react';

import { TextFieldProps } from '@material-ui/core';

export interface SearchBarProps {
  title?: React.ReactNode;
  TextFieldProps?: TextFieldProps;
  onSubmit: (_text: string) => void;
}
