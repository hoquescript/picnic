// responsive done
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab} from '@material-ui/core';

const a11yProps = (index) => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
  tabs: {
    backgroundColor: '#fff'
  },
  tab: {
    fontFamily: "'Open Sans', sans-serif" , 
    fontWeight: 600,
    letterSpacing: 1,
    fontSize: '1.3rem',
    padding : '1.6rem',
  },
}));

const FullWidthTabs = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  let tabMenu = null;
  
  tabMenu = props.tabs.map(({iconEl,label},index) => (
    <Tab icon={iconEl} className={classes.tab} label={label}{...a11yProps(index)} />
  ))

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={props.value}
          onChange={props.handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          className={classes.tabs}
        >
          {tabMenu}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={props.value}
        onChangeIndex={props.handleChangeIndex}
      >
        {props.children}
      </SwipeableViews>
    </div>
  );
}

export default FullWidthTabs;