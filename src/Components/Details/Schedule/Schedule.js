// responsive done
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Typography, GridList, GridListTile, GridListTileBar, ListSubheader, useMediaQuery } from "@material-ui/core";

import SecondaryText from "../../Typography/Secondary/SecondaryText";
import LineBreak from "../../Util/LineBreak/LineBreak";

import Bus from "../../../Assets/bus.jpg"
import Spot from "../../../Assets/spot.jpg"
import Lunch from "../../../Assets/lunch.jpeg"
import Poolparty from "../../../Assets/poolParty.jpg"
import SightSeeing from "../../../Assets/sightSeeing.jpg"

import Breakfast from "../../../Assets/breakfast.jpg"
import Cprogram from "../../../Assets/cProgram.jpg"
import Depature from "../../../Assets/depature.jpg"
import Draw from "../../../Assets/draw.jpg"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width:"90%" ,
  },
  header: {
    display: "flex",
    justifyContent: "center",
    padding : '2rem' ,   
    textAlign: "center",
    fontSize: '4rem',
    fontWeight: 100,
    fontFamily: "'Raleway', sans-serif",
    color: "#FF4E00"
  },
  title: {
    color: '#f1c40f',
    fontFamily: '"Architects Daughter", Helvetica, sans-serif',
    fontSize: '3rem',
    marginBottom: 2
  } ,
  subtitle : {
    fontFamily: '"Open sans", Helvetica, Arial, sans-serif',
    fontSize : '1.4rem'
    
  },
  img:{
    width: '90%',

  }
}));
const tileData = [
  {
    no: 1,
    event: "Bus Depart",
    time: "7.00 AM",
    img: Bus
  },
  {
    no: 2,
    event: "BreakFast",
    time: "9.00 AM",
    img: Breakfast
  },
  {
    no: 3,
    event: "Reach Out",
    time: "11.00 AM",
    img: Spot
  },
  {
    no: 4,
    event: "Sight Seeing",
    time: "12.00 PM",
    img: SightSeeing
  },
  {
    no: 5,
    event: "Pool Party ",
    time: "1.20 PM",
    img: Poolparty
  },
  {
    no: 6,
    event: "Lunch",
    time: "2.30 PM",
    img: Lunch
  },
  {
    no: 7,
    event: "Culture Program",
    time: "3.30 PM",
    img: Cprogram
  },
  {
    no: 8,
    event: "Raffle Draw",
    time: "4.30 PM",
    img: Draw
  },
  {
    no: 9,
    event: "Spot Depature",
    time: "5.30 PM",
    img: Depature
  }
];


const Schedule = () => {
  const classes = useStyles();
  // const lg = useMediaQuery(theme => theme.breakpoints.down(1200))
  const md = useMediaQuery(theme => theme.breakpoints.down(900))
  const sm = useMediaQuery(theme => theme.breakpoints.down(600))
  const xs = useMediaQuery(theme => theme.breakpoints.down(400))
  return (
    <Box pb={3} pt={3}>
      <Box pb={sm ? 1 : 5} pt={sm ? 0 : 3}>
        <Grid container justify="center">
          <Grid item md={4}>
            <SecondaryText
              primary="Schedule"
              secondary="Official Schedule for the event"
            />
          </Grid>
          <Grid item container alignItems="center" md={8}>
            <Typography
              variant="subtitle1"
              style={{ fontFamily: "'Open Sans', sans-serif", display: sm ? "none" : "block"}}
            >
              Terms of service are the legal agreements between a service
              provider and a person who wants to use that service. The person
              must agree to abide by the terms of service in order to use the
              offered service. Terms of service can also be merely a disclaimer,
              especially regarding the use of websites.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <LineBreak />
      <Box>
        <div className={classes.root}>
          <GridList cellHeight={xs ? 100 : md ? 150 : 250} cols={xs ? 1 : sm ? 2 : 3} className={classes.gridList}>
            <GridListTile key="Subheader" cols={xs ? 1 : sm ? 2 : 3} rows={xs ? 1 : sm ? 2 : 3} style={{height:'auto'}}>
              <ListSubheader component="div" className={classes.header}>
                PICNIC DAY
              </ListSubheader>
            </GridListTile>
            {tileData.map(tile => (
              <GridListTile key={tile.no} rows={2} style={{color:'black'}} spacing={5}>
                <img src={tile.img} alt={tile.title}/>
                <GridListTileBar
                  style={{ background: "rgba(53, 48, 36, 0.7) none repeat scroll 0% 0%" , textAlign:'center' }}
                  title={<span className={classes.title}>{tile.event}</span>}
                  subtitle={<span className={classes.subtitle}>Time: {tile.time}</span>}
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </Box>
    </Box>
  );
};

export default Schedule;






// const Schudle = () => {
//   const classes = useStyles();

//   return (
//   );
// };
// export default Schudle;