import {makeStyles} from '@mui/styles';
import {AppBar, Toolbar, Slide} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import SideNav from './SideNav';

const useStyles = makeStyles((theme) => ({

  navBar: {
    background: '#010080',
    paddingRight: '0px !important',
    height: '80px',
    color: 'white',
  },

  header: {
    fontWeight: 'bolder !important',
    fontSize: '28px',
    color: 'white',
    fontFamily: 'Bebas-Neue',
    textDecoration: 'none',
  },

}));

export default function Header(props) {
  const classes = useStyles();

  return (

    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar className={classes.navBar}>
            <SideNav />
            <a className={classes.header} href ="/">
                            DanSquared
            </a>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

    </React.Fragment>


  );
}

export function HideOnScroll(props) {
  // eslint-disable-next-line react/prop-types
  const {children} = props;

  const trigger = useScrollTrigger({
    target: window,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
