// responsive done
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Typography, useMediaQuery } from "@material-ui/core";
import SecondaryText from "../../Typography/Secondary/SecondaryText";
import LineBreak from "../../Util/LineBreak/LineBreak";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { IoMdCheckbox } from "react-icons/io";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 620,
    backgroundColor: theme.palette.background.paper
  }
}));

const conditions = [
  "পুরোপুরি রেজিস্টার্ড শিক্ষার্থী ছাড়া কেউ পিকনিকে এলাও হবে না । আপনার রেজিস্টেশন কমপ্লিট হয়েছে কিনা চেক করতে Registered Students সেক্শনে  যান  ",
  "এলাউড গেস্ট ছাড়া কাউকে সাথে নিয়ে আসা যাবে না ",
  "ইউনিভার্সিটির  সম্মানের কথা মাথায় রেখে অমার্জিত পোশাকধারী এবং বিশৃঙ্খলা কারীকে পিকনিকে যাওয়ার অনুমতি দেয়া হবে না ",
  "কোনো মাদকদ্রব্য এবং ধারালো বস্তু সাথে আনা যাবে না ",
  "বাস , স্পটের কোনো ক্ষতি করা যাবে না । স্পটের পুলে নামা যাবে কিন্তু পুকুরে নামা যাবে না  "
];



const Terms = () => {
  const classes = useStyles();
  const sm = useMediaQuery(theme => theme.breakpoints.down(600));
  return (
    <Box p={sm ? 1 : 3}>
      <Box pb={sm ? 1 : 5} pt={sm ? 0 : 3}>
        <Grid container justify="center">
          <Grid item sm={4}>
            <SecondaryText
              primary="T & C"
              secondary="Terms & conditions for the event"
            />
          </Grid>
          <Grid item container alignItems="center" sm={8}>
            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "'Open Sans', sans-serif",
                display: sm ? "none" : "block"
              }}
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
      <Box pb={0} pt={sm ? 2 : 8}>
        <div className={classes.root}>
          {conditions.map(tc => (
            <List component="nav" aria-label="main mailbox folders">
              <ListItem button>
                <ListItemIcon>
                  <IoMdCheckbox />
                </ListItemIcon>
                <ListItemText>{tc}</ListItemText>
              </ListItem>
            </List>
          ))}
        </div>
      </Box>
    </Box>
  );
};
export default Terms;
