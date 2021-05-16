import { makeStyles, Theme } from '@material-ui/core/styles';

import { ButtonProps } from './Button.types';

export const useButtonStyles = makeStyles<Theme, ButtonProps>(() => {
  return {
    root({ textColor }) {
      return {
        color: textColor ?? '',
      };
    },
  };
});
