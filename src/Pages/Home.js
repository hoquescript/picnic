// responsive done
import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoPlay from "react-awesome-slider/dist/autoplay";
import AwsSliderStyles from "react-awesome-slider/src/core/styles.scss";

import FlipClock from "../Components/FlipClock/FlipClock";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, useMediaQuery } from "@material-ui/core";
import TextRotator from "../Components/TextRotator/TextRotator";

import logo1 from "../Assets/img1.jpg";
import logo2 from "../Assets/img2.jpg";
import logo3 from "../Assets/img3.jpg";
import logo4 from "../Assets/img4.jpg";
import logo5 from "../Assets/img5.jpg";
import logo6 from "../Assets/img6.jpg";
import logo7 from "../Assets/img7.jpg";
import logo8 from "../Assets/img8.jpg";
import Header from "../Components/Layout/header";

const AutoplaySlider = withAutoPlay(AwesomeSlider);
const useStyles = makeStyles(theme => ({
  respBanner: {
    height: "calc(100vh - 41rem)",
    width: "100%",
    transform: 'scale(1.02)',    
    [theme.breakpoints.down(600)]:{
      height: "calc(100vh - 55rem)",
      width: "100%",
    }
  }
}));
const Home = () => {
  const classes = useStyles();
  const lg = useMediaQuery(theme => theme.breakpoints.down(1080));
  const sm = useMediaQuery(theme => theme.breakpoints.down(600));
  const xs = useMediaQuery(theme => theme.breakpoints.down(450));
  return (
    <>
      <Header />
      <div>
        {!lg ? (
          <div>
            <Grid
              container
              wrap="nowrap"
              style={{ height: xs ? "14rem" : "12rem" }}
            >
              <Grid
                container
                item
                justify="center"
                alignItems="center"
                xs={6}
                style={{ backgroundColor: "#f39c12" }}
              >
                <div>
                  <FlipClock smal={xs} />
                </div>
              </Grid>
              <Grid item xs={6}>
                <TextRotator lg={lg}/>
              </Grid>
            </Grid>
            <div>
              <AutoplaySlider
                play={true}
                cancelOnInteraction={false}
                interval={1000}
                bullets={false}
                cssModule={AwsSliderStyles}
              >
                <div data-src={logo1} />
                <div data-src={logo2} />
                <div data-src={logo3} />
                <div data-src={logo4} />
                <div data-src={logo5} />
                <div data-src={logo6} />
                <div data-src={logo7} />
                <div data-src={logo8} />
              </AutoplaySlider>
            </div>
          </div>
        ) : null}

        {lg ? (
          <div>
            <div className={classes.respBannerWrapper}>
              <img src={logo1} alt="banner" className={classes.respBanner} />
            </div>
            <Grid container wrap="nowrap" direction="column" style={{ height: sm ? "30rem" : "15rem" }}>
              {sm ? (
                <Grid item xs={12}>
                  <TextRotator lg={lg}/>
                </Grid>
              ) : null}
              <Grid
                container
                item
                justify="center"
                alignItems="center"
                xs={12}
                style={{ backgroundColor: "#f39c12" }}
              >
                <div>
                  <FlipClock />
                </div>
              </Grid>
            </Grid>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Home;
