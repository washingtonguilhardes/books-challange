import { makeStyles } from '@material-ui/core/styles';

export const useBookCardStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
    width: '100%',
    height: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    backgroundPosition: 'center',
    backgroundSize: 'contain',
  },
}));
