import { makeStyles, Theme } from '@material-ui/core/styles';
import React, { FC } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(0),
    padding: theme.spacing(2),
    backgroundColor: '#e3e3e3',
    display: 'flex',
    justifyContent: 'center',
  },
  main: {},
  copyrightBox: {},
}));

const Footer: FC = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <div className={classes.main}>
        <div className={classes.copyrightBox}>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
