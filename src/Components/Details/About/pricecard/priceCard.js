import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import {Grid, useMediaQuery} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Student from "../../../../Assets/student.jpg";
// import Guest from '../../../../Assets/guest.jpg'
import Guest from "../../../../Assets/Picnic.jpg";

const useStyles = makeStyles(theme => ({
  '@global': {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
    ul: {
      listStyle: 'none'
    }
  },
  header: {
    textAlign: "center",
    fontSize: '6rem',
    fontWeight: 100,
    fontFamily: "'Raleway', sans-serif",
    marginBottom: '2.5rem',
    color: "#FF4E00"
  },
  title: {
    fontWeight: 700,
    fontSize: '2.7rem',
    color: "#ffe",
    fontFamily: "'Open Sans', sans-serif",
    letterSpacing: 1
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline"
  },
  img: {
    height: "350px",
    width: "100%"
  },
  btn: {
    background: "#ddd",
    border: "1px solid black",
    color: "black",
    fontSize: '1.8rem'
  }
}));

const tiers = [
  {
    title: "STUDENTS",
    price: "1200",
    description: [
      "Long Day Tour",
      " Pool Party ",
      "Guardianship by Faculties",
      " Exciting Events "
    ],
    buttonText: "Buy Ticket Now",
    buttonVariant: "outlined",
    img: Student
  },
  {
    title: "GUEST",
    price: "800",
    description: [
      "Long Day Tour ",
      " Friendly Environment",
      "Separeted Space For Relaxation",
      "Exciting Events "
    ],
    buttonText: "BOOk ticket now",
    buttonVariant: "outlined",
    img: Guest
  }
];

const Pricing = () => {
  const classes = useStyles();
  const tabletPort = useMediaQuery(theme => theme.breakpoints.down(700))
  const phone = useMediaQuery(theme => theme.breakpoints.down(600))
  const smallPhone = useMediaQuery(theme => theme.breakpoints.down(450))
  return (
    <React.Fragment>
      <CssBaseline />

      <Container maxWidth="md" component="main" style={{ padding: "30px 0" }}>
        <h2 className={classes.header}> Pricing </h2>
        <Grid container spacing={5} justify="center" alignItems="center">
          {tiers.map(tier => (
            <Grid item key={tier.title} xs={ smallPhone ? 12 : phone ? 10 : tabletPort ? 8 : 6}>
              <Card
                style={{
                  width: "95%",
                  background:
                    "radial-gradient(circle at 11% 62%, rgba(205, 205, 205,0.04) 0%, rgba(205, 205, 205,0.04) 50%,rgba(149, 149, 149,0.04) 50%, rgba(149, 149, 149,0.04) 100%),radial-gradient(circle at 78% 10%, rgba(49, 49, 49,0.04) 0%, rgba(49, 49, 49,0.04) 50%,rgba(254, 254, 254,0.04) 50%, rgba(254, 254, 254,0.04) 100%),radial-gradient(circle at 92% 43%, rgba(34, 34, 34,0.04) 0%, rgba(34, 34, 34,0.04) 50%,rgba(206, 206, 206,0.04) 50%, rgba(206, 206, 206,0.04) 100%),linear-gradient(329deg, rgb(241, 77, 33),rgb(218, 227, 61))"
                }}
              >
                <CardHeader
                  title={<div className={classes.title}>{tier.title} </div>}
                  titleTypographyProps={{ align: "center" }}
                  className={classes.cardHeader}
                />
                <img src={tier.img} className={classes.img} />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <div classname={{ minHeight: 200 }}></div>
                    <Typography
                      component="h2"
                      variant="h3"
                      color="textPrimary"
                      style={{ fontFamily: "'Open Sans', sans-serif" }}
                    >
                      ${tier.price}
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map(line => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                        style={{ fontFamily: "'Open Sans', sans-serif" }}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant}
                    className={classes.btn}
                    color="primary"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Pricing;
