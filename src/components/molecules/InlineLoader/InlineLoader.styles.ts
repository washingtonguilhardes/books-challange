import { makeStyles } from '@material-ui/core/styles';

export const useInlineLoader = makeStyles({
  button: {
    minHeight: 54,
    minWidth: 200,
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    marginRight: 24,
  },
});
