import React from "react";
import {
  Grid,
  Box,
  Typography,
  GridList,
  GridListTile,
  GridListTileBar,
  ListSubheader,
  useMediaQuery
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import SecondaryText from "../../Typography/Secondary/SecondaryText";
import LineBreak from "../../Util/LineBreak/LineBreak";

import { MdEmail } from "react-icons/md";
import { FaMapMarked } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { MdPublic } from "react-icons/md";
import { AiFillFacebook } from "react-icons/ai";

import Spot from "../../../Assets/path.JPG";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 380,
    backgroundColor: theme.palette.background.paper
  },
  icon: {
    fontSize: 32,
    fill: "#FFAA6C"
  },
  primary: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: 25,
    color: "black"
  },
  secondary: {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: 18
  },
  header: {
    textAlign: "center",
    fontSize: '6rem',
    fontWeight: 100,
    fontFamily: "'Raleway', sans-serif",
    marginBottom: '2.5rem',
    marginTop: '1.5rem',
    color: "#FF4E00"
  },
}));

const Venue = () => {
  const classes = useStyles();
  const md = useMediaQuery(theme => theme.breakpoints.down(900));
  const sm = useMediaQuery(theme => theme.breakpoints.down(600));
  const xs = useMediaQuery(theme => theme.breakpoints.down(400));
  return (
    <Box pb={3} pt={3}>
      <Box pb={5} pt={3}>
        <Grid container justify="center">
          <Grid item md={md ? 12 : 7}>
            <SecondaryText
              primary="Venue"
              secondary="Details Information About Picnic venue"
            />
          </Grid>
          <Grid item container alignItems="center" md={5}>
            <List className={classes.root}>
              <ListItem>
                <ListItemAvatar>
                  <FaMapMarked className={classes.icon} />
                </ListItemAvatar>
                <ListItemText
                  primary={<p className={classes.primary}>Address</p>}
                  secondary={
                    <p className={classes.Secondary}>
                      Ratanpur, Gazipur, Dhaka, Bangladesh
                    </p>
                  }
                />
              </ListItem>

              <ListItem>
                <ListItemAvatar>
                  <IoMdPerson className={classes.icon} />
                </ListItemAvatar>
                <ListItemText
                  primary={<p className={classes.primary}>Phone</p>}
                  secondary={<p className={classes.Secondary}>01715-102191</p>}
                />
              </ListItem>

              <ListItem>
                <ListItemAvatar>
                  <AiFillFacebook className={classes.icon} />
                </ListItemAvatar>
                <ListItemText
                  primary={<p className={classes.primary}>Social Media</p>}
                  secondary={
                    <p className={classes.Secondary}>
                      www.facebook.com/neelkomolresort
                    </p>
                  }
                />
              </ListItem>

              <ListItem>
                <ListItemAvatar>
                  <MdEmail className={classes.icon} />
                </ListItemAvatar>
                <ListItemText
                  primary={<p className={classes.primary}>Email</p>}
                  secondary={
                    <p className={classes.Secondary}>
                      resort.neelkomol@gmail.com
                    </p>
                  }
                />
              </ListItem>

              <ListItem>
                <ListItemAvatar>
                  <MdPublic className={classes.icon} />
                </ListItemAvatar>
                <ListItemText
                  primary={<p className={classes.primary}>Website</p>}
                  secondary={
                    <p className={classes.Secondary}>www.nilkomolresort.com</p>
                  }
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
      <LineBreak />

      <h2 className={classes.header}> Map </h2>

      <img src={Spot} alt="" style={{ width: "100%" }} />
    </Box>
  );
};

export default Venue;
