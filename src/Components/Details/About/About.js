import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Box, useMediaQuery } from "@material-ui/core";
import { MdPool } from "react-icons/md";
import { FaBusAlt } from "react-icons/fa";
import { GiHouse } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";

import PriceCard from "./pricecard/priceCard"
import SecondaryText from "../../Typography/Secondary/SecondaryText";
import LineBreak from "../../Util/LineBreak/LineBreak";

import banner from "../../../Assets/banner.jpg";


const Summary = ({ style, ammount, type, icon }) => {
  const classes = useStyles();
  return (
    <Box style={style} className={classes.box}>
      {icon}
      <Box className={classes.content}>
        <Typography align="center" className={classes.ammount}>
          {ammount}
        </Typography>
        <Typography className={classes.type}>{type}</Typography>
      </Box>
    </Box>
  );
};

const About = () => {
  const classes = useStyles();
  const tabletPort = useMediaQuery(theme => theme.breakpoints.down(850))
  const phone = useMediaQuery(theme => theme.breakpoints.down(450))
  return (
    <div>
      <Box pb={tabletPort ? 2: 5} pt={tabletPort ? 2: 5}>
        <Grid container>
          <Grid item xs={tabletPort ? 12 : 4}>
            <SecondaryText
              primary="About"
              secondary="Know more about the event"
            />
            <LineBreak/>
            <Typography style={tabletPort ? {display: 'none'} : { padding: "20px 0" }} variant="h6">
              Making your trip more fun and safe is our mission. Paris Picnic is
              not just traveling in Paris but we also help travelers explore the
              world in an effortless way.
            </Typography>
          </Grid>
          <Grid item xs={tabletPort ? 12 : 8} className={classes.bannerWrapper}>
            <img
              src={banner}
              className={classes.banner}
              alt="Banner of Picnic"
            />
          </Grid>
        </Grid>
      </Box>
      <LineBreak />
      <PriceCard phone={phone} tabletPort={tabletPort}/>
      <LineBreak />
      <Box pb={3} pt={phone ? 3 : 8}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={phone ? 6 : 3}>
            <Summary
              ammount="4"
              type="Students"
              style={{ borderRight: '1px solid #ddd' }}
              icon={<IoIosPeople className={classes.icon} />}
            />
          </Grid>
          <Grid item xs={phone ? 6 : 3}>
            <Summary
              ammount="2"
              type="Room"
              style={{ borderRight: phone ? 'none': '1px solid #ddd' }}
              icon={<GiHouse className={classes.icon} />}
            />
          </Grid>
          <Grid item xs={phone ? 6 : 3}>
            <Summary
              ammount="5"
              type="Bus"
              style={{ borderRight: '1px solid #ddd' }}
              icon={<FaBusAlt className={classes.icon} />}
            />
          </Grid>
          <Grid item xs={phone ? 6 : 3}>
            <Summary
              ammount="2"
              type="Pool"
              icon={<MdPool className={classes.icon} />}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  bannerWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: '4rem'
  },
  banner: {
    height: '40rem',
    width: '70rem',
    padding: "2rem 0",
    [theme.breakpoints.down(1060)]:{
      height: '35rem',
      width: '60rem',
      padding: "0",
    },
    [theme.breakpoints.down(850)]:{
      height: '100%',
      width: '100%',
      padding: "0",
      margin: "10rem 0 5rem 0"
    }

  },
  box: {
    padding: '1.5rem 2rem',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  },
  ammount: {
    color: "#FF682C",
    font: '400 5rem/5rem "Open sans", Arial, sans-serif',
    margin: '-5px 0 15px 0'
  },
  type: {
    color: "#444",
    font: '600 1.8rem/1.8rem "Open sans", Arial, sans-serif',
    textTransform: "uppercase",
    letterSpacing: 2
  },
  icon: {
    fontSize: '12rem',
    color: "rgba(0, 0, 0, 0.07)",
    [theme.breakpoints.down(850)]:{
      fontSize: '10rem',
    }

  }
}));

export default About;
