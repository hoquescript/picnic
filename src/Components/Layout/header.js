import React from "react";
import { Grid, useMediaQuery  } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import { TiTicket } from "react-icons/ti";
import { MdEventAvailable } from "react-icons/md";

import logo from "../../Assets/header.svg";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden'
  },
  logoWrapper: {
    display: "flex",
    justifyContent: "center",
    // transform: 'translateY(.3rem)'
  },
  logo: {
    height: '14rem',
    width: '14rem',
    transform: 'scale(1.2)',
    [theme.breakpoints.down(600)]:{
      height: '13rem',
      width: '13rem',
      transform: 'scale(1.1)',
    },
    [theme.breakpoints.down(400)]:{
      height: '12rem',
      width: '12rem',
      transform: 'scale(1)',
    }
  },
  subMenu: {
    position: "relative",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: '15rem',
    [theme.breakpoints.down(1180)]:{
      height: '11rem',
    },
    [theme.breakpoints.down(800)]:{
      height: '12rem',
    }

  },
  icon: {
    height: '20rem',
    width: '20rem',
    position: "absolute",
    top: '1rem',
    left: "50%",
    transform: "translateX(-50%)",
    color: "rgba(255,255,255,0.2)"
  },
  details: {
    backgroundColor: "#e8bb07",
    '&:hover': {
      backgroundColor: "#c69f05"
    },

  },
  booking: {
    backgroundColor: "#f39c12",
    '&:hover': {
      backgroundColor: "#c67f0f"
    },
  },
  menu: {
    color: "#fff",
    fontFamily: "'Open Sans', sans-serif",
    textTransform: "uppercase",
    fontSize: '2.4rem',
    letterSpacing: 2,
    fontWeight: 500
  },
  heading:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: '2.5rem',
    [theme.breakpoints.down(600)]:{
      transform: 'translateY(-8px)',
      marginLeft: '.5rem',
    },
    [theme.breakpoints.down(400)]:{
      transform: 'translateY(-6px)',
      marginLeft: '-1rem',
    },
    transform: 'translateY(-10px)'
  },
  primaryHead:{
    fontFamily: "'Roboto Slab', serif",
    fontSize: '3.2rem',
    fontWeight: 600,
    letterSpacing: 2,
    color: '#00206a',
    [theme.breakpoints.down(400)]:{
      letterSpacing: 1,
      fontSize: '3rem',
    }

  },
  secondaryHead:{
    color: '#d35400',
    fontFamily: "'Courgette', cursive",
    fontSize: '1.8rem',
    [theme.breakpoints.down(400)]:{
      letterSpacing: 0,
      fontSize: '1.5rem',
    }
  }
}));
const Header = () => {
  const classes = useStyles();
  const phone = useMediaQuery(theme => theme.breakpoints.down(1180))
  console.log(phone)
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={phone ? 12:6} className={classes.logoWrapper}>
          <NavLink to="/">
            <Grid container>
              <Grid item>
                <img className={classes.logo} src={logo} />
              </Grid>
              <Grid item className={classes.heading}>
                <div>
                  <h3 className={classes.primaryHead}>Primeasia University</h3>
                  <h4 className={classes.secondaryHead}>Department of Computer Science & Engineering</h4>
                </div>
              </Grid>
            </Grid>
          </NavLink>
        </Grid>
        <Grid item xs={phone ? 6:3}>
          <NavLink to="/details">
            <div className={[classes.subMenu, classes.details].join(" ")}>
              <MdEventAvailable className={classes.icon} />
              <h1 className={classes.menu}>Picnic Details</h1>
            </div>
          </NavLink>
        </Grid>
        <Grid item xs={phone ? 6:3}>
          <NavLink to="/booking">
            <div className={[classes.subMenu, classes.booking].join(" ")}>
              <TiTicket className={classes.icon} />
              <h1 className={classes.menu}>Register Now</h1>
            </div>
          </NavLink>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
