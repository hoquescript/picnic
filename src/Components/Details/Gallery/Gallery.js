import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Box, useMediaQuery } from "@material-ui/core";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";

import SecondaryText from "../../Typography/Secondary/SecondaryText";
import LineBreak from "../../Util/LineBreak/LineBreak";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import Bus from "../../../Assets/g1.jpg";
import Spot from "../../../Assets/g2.jpg";
import Lunch from "../../../Assets/g4.jpg";
import Poolparty from "../../../Assets/g5.jpg";
import SightSeeing from "../../../Assets/g3.jpg";

import Breakfast from "../../../Assets/g6.jpg";
import Cprogram from "../../../Assets/g7.jpg";
import Depature from "../../../Assets/g8.jpg";
import Draw from "../../../Assets/g9.jpg";
import G10 from "../../../Assets/g10.jpg";
import G11 from "../../../Assets/g11.jpg";
import G12 from "../../../Assets/g12.jpg";

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
    time: "12 AM",
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
    time: "3.30 AM",
    img: Cprogram
  },
  {
    no: 8,
    event: "Raffle Draw",
    time: "4.30 AM",
    img: Draw
  },
  {
    no: 9,
    event: "Spot Depature",
    time: "5.30 AM",
    img: Depature
  },
  {
    no: 15,
    event: "Pool Party ",
    time: "1.20 PM",
    img: G12
  },
  {
    no: 16,
    event: "Lunch",
    time: "2.30 PM",
    img: G11
  },
  {
    no: 17,
    event: "Culture Program",
    time: "3.30 AM",
    img: G10
  }
];
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: "90%"
  },
  bannerWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  banner: {
    height: "40rem",
    width: "70rem",
    padding: "2rem 0px"
  },
  box: {
    padding: "1.5rem 2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "relative"
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  },
  ammount: {
    color: "#FF7335",
    font: '40rem 5rem/5rem "Open sans", Arial, sans-serif',
    margin: "-5px 0 5px 0"
  },
  type: {
    color: "#444",
    font: '60rem 1.8rem/1.8rem "Open sans", Arial, sans-serif',
    textTransform: "uppercase",
    letterSpacing: 2
  },
  icon: {
    fontSize: "14rem",
    color: "rgba(0, 0, 0, 0.07)"
  },
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    // height: '30rem',
    // width: '80%'
    // display: 'flex',
    // alignItems:'center',
  },
  paper: {
    // position: "absolute",
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%,-50%)',
    // width: 400,
    // backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
  }
}));

const Gallery = () => {
  const classes = useStyles();
  const md = useMediaQuery(theme => theme.breakpoints.down(850));
  const sm = useMediaQuery(theme => theme.breakpoints.down(600));
  const xs = useMediaQuery(theme => theme.breakpoints.down(450));

  const [open, setOpen] = React.useState(false);
  const [modalImage, setModalImage] = React.useState("");

  const handleOpen = imgSrc => {
    setOpen(true);
    setModalImage(imgSrc);
  };

  const handleClose = () => {
    console.log(1);
    setOpen(false);
    setModalImage("");
  };
  console.log(open);

  return (
    <div>
      <Box pb={5} pt={md ? 1 : 5}>
        <Grid container justifyContent="space-between">
          <Grid item xs={md ? 12 : 4}>
            <SecondaryText
              primary="Gallery"
              secondary="Know more about the event"
            />
            <LineBreak />
            <Typography
              style={{ fontFamily: "'Open Sans', sans-serif", display: sm ? "none" : "block", padding: md ? "20px 0 30px 0" : "20px 0"}}
              variant="h6"
            >
              Making your trip more fun and safe is our mission. Paris Picnic is
              not just traveling in Paris but we also help travelers explore the
              world in an effortless way.
            </Typography>
          </Grid>
          <Grid item xs={md ? 12 : 8} className={classes.bannerWrapper} style={{marginTop: sm ? '7rem' : 0}}>
            <div className={classes.root}>
              <GridList
                cellHeight={md ? 200 : 250}
                className={classes.gridList}
                cols={xs ? 1 : 3}
              >
                {tileData.map(tile => (
                  <GridListTile key={tile.img} cols={tile.cols || 1}>
                    <img
                      src={tile.img}
                      alt={tile.title}
                      onClick={() => handleOpen(tile.img)}
                    />
                  </GridListTile>
                ))}
              </GridList>
            </div>
            {xs ? null : (
              <Modal
                closeAfterTransition
                open={open}
                onClose={handleClose}
                onBackdropClick={handleClose}
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500
                }}
              >
                <Fade in={open}>
                  <div className={classes.modal}>
                    <img src={modalImage} style={{height: md ? '40rem' : '60rem'}}/>
                  </div>
                </Fade>
              </Modal>
            )}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Gallery;
