import { makeStyles, Theme } from '@material-ui/core/styles';

export const useBookBarStyles = makeStyles((theme: Theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));
