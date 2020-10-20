// responsive done
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    border: '1px solid #ccc',
    width: "100%",
    position: 'relative',
    // overflow: 'hidden',
    '&::after': {
      position: "absolute",
      content: '""',
      width: '5rem',
      top: 0,
      borderTop: "4px #444 solid"
    }
  },
}));

const LineBreak = () => {
  const classes = useStyles();
  return <div className={classes.root}></div>;
};

export default LineBreak;
