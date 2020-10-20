// responsive done
import React from "react";
import { Box, Container, Grid, Paper, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/footer.svg";
import Rakib from "../../Assets/rakib.jpg";
import Wahid from "../../Assets/wahid.jpg";

import FlipClock from "../FlipClock/FlipClock";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    background:
      "linear-gradient(135deg, rgba(62,62,62,0.89) 0%, #151515  100%)",
    padding: "6rem 10rem",
    marginTop: "8rem",
    [theme.breakpoints.down(1160)]: {
      padding: "6rem 0rem"
    }
  },
  lineBreak: {
    height: 3,
    backgroundColor: "#444",
    marginBottom: "2rem"
  },
  logoWrapper: {
    display: "flex",
    justifyContent: "center"
  },
  logo: {
    height: "20rem",
    width: "20rem",
    transform: "translateX(-2rem)",
    [theme.breakpoints.down(800)]: {
      transform: "translateX(8rem)"
    },
    [theme.breakpoints.down(800)]: {
      transform: "translateX(0rem)"
    }
  },
  link: {
    fontSize: "2rem",
    letterSpacing: 2,
    color: "#feca57",
    "&:not(last-child)": {
      marginRight: "2.5rem"
    },
    [theme.breakpoints.down(1160)]: {
      padding: "6rem 0rem"
    }
  },
  devRoot: {
    color: "#ff8b4c"
  },
  inline: {
    display: "inline",
    marginLeft: "2rem",
    fontFamily: "'Raleway', sans-serif",
    color: "#ddd",
    fontSize: "2rem"
  },
  primary: {
    marginLeft: "2rem",
    fontFamily: "'Raleway', sans-serif",
    color: "#feca57"
  },
  avatar: {
    width: "7rem",
    height: "7rem"
  }
}));

const Footer = () => {
  const classes = useStyles();

  const lg = useMediaQuery(theme => theme.breakpoints.down(1400));
  const sm = useMediaQuery(theme => theme.breakpoints.down(800));
  const xs = useMediaQuery(theme => theme.breakpoints.down(500));
  return (
    <div>
      <Container fluid style={{ padding: xs ? "0 3rem" : "0 10rem" }}>
        <div className={classes.lineBreak}></div>
      </Container>

      <div className={classes.root}>
        <Container fluid>
          <Grid container alignItems="center" justify="center">
            <Grid
              container
              item
              justify="center"
              alignItems="center"
              xs={sm ? 12 : lg ? 5 : 4}
            >
              <NavLink to="/" className={classes.link}>
                Home
              </NavLink>
              <NavLink to="/details" className={classes.link}>
                Details
              </NavLink>
              <NavLink to="/booking" className={classes.link}>
                Booking
              </NavLink>
              <NavLink to="/auth" className={classes.link}>
                Login
              </NavLink>
            </Grid>

            <Grid
              container
              item
              justify="center"
              alignItems="center"
              xs={xs ? 4 : sm ? 6 : lg ? 3 : 4}
            >
              <div className={classes.logoWrapper}>
                <NavLink to="/">
                  <Grid container>
                    <Grid item>
                      <img className={classes.logo} src={logo} />
                    </Grid>
                  </Grid>
                </NavLink>
              </div>
            </Grid>

            <Grid item xs={xs ? 8 : sm ? 6 : lg ? 4 : 4}>
              <List className={classes.devRoot}>
                {/* <h1 style={{textAlign:'center'}}> DEVELOPERS! </h1> */}
                <a href="https://www.facebook.com/WahidHoquee">
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                        alt="Wahid"
                        src={Wahid}
                        className={classes.avatar}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <h2 className={classes.primary}>Wahid Hoque</h2>
                      }
                      secondary={
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          171 Batch
                        </Typography>
                      }
                    />
                  </ListItem>
                </a>


                <Divider
                  variant="inset"
                  component="li"
                  style={{ backgroundColor: "#269bd5" }}
                />
                <a href="https://www.facebook.com/rakib.nazrulislam">
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                        alt="Rakib"
                        src={Rakib}
                        className={classes.avatar}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <h2 className={classes.primary}>Nazrul Islam Rakib</h2>
                      }
                      secondary={
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          171 Batch
                        </Typography>
                      }
                    />
                  </ListItem>
                </a>

              </List>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
