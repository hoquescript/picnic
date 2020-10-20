// responsive done
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";

import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: "36rem",
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4),
    border: "1px dotted #aaa",
    borderTop: "none"
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "2rem",
    backgroundColor: "#f9f9f9"
  },
  listDetails: {}
}));

const Test = props => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List>
      <ListItem button onClick={handleClick} className={classes.listItem}>
        {props.num}.{props.ques}
        {open ? (
          <MdKeyboardArrowUp style={{ fontSize: "4.5rem" }} />
        ) : (
          <MdKeyboardArrowDown style={{ fontSize: "4.5rem" }} />
        )}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <p className={classes.listDetails}>
        {props.ans.map( mp => <div style={{marginBottom:10}}>{mp}</div>)}
            </p>
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
};

export default Test;

// responsive done
