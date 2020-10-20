import React from 'react';
import { Container, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import { GoBook } from 'react-icons/go'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { FiMap } from 'react-icons/fi'
import { IoMdImages } from 'react-icons/io'
import PropTypes from 'prop-types';

import TabMenu from "../Components/TabMenu/TabMenu"
import PrimaryText from '../Components/Typography/Primary/PrimaryText';
import About from '../Components/Details/About/About';
import Schedule from '../Components/Details/Schedule/Schedule';
import Footer from '../Components/Layout/footer';
import Gallery from '../Components/Details/Gallery/Gallery';
import Header from '../Components/Layout/header';
import Venue from '../Components/Details/Venue/Venue';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && 
            <Box>
                {children}
            </Box>
        }
      </Typography>
    );
  }
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: '100%',
    },
    iconStyle : {
      color: '#e58e26',
      fontSize : '5rem',
      padding: 5,
      [theme.breakpoints.down(400)]:{
        fontSize : '4rem',
        padding: 3,
      }  
    }  
}));
  
const Details = () => {
    const classes = useStyles();
    const theme = useTheme();
    const lg = useMediaQuery(theme => theme.breakpoints.down(1200))
    const sm = useMediaQuery(theme => theme.breakpoints.down(750))
    const xs = useMediaQuery(theme => theme.breakpoints.down(400))
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const handleChangeIndex = index => {
        setValue(index);
    };
    
    const tabs = [
      {
        iconEl: <GoBook className={classes.iconStyle}/>,
        label: 'ABOUT'
      },
      {
        iconEl: <AiOutlineClockCircle className={classes.iconStyle}/>,
        label: 'SCHEDULE'
      },
      {
        iconEl: <FiMap className={classes.iconStyle}/>,
        label: 'VENUE'
      },
      {
        iconEl: <IoMdImages className={classes.iconStyle}/>,
        label: 'GALLERY'
      }
    ] 

    return (
      <>
        <Header/>
        <Container fluid style={{padding: xs ? '0px 10px' : sm ? '10px 20px' : lg ? '25px 50px' : '50px 100px'}}>
          <PrimaryText primary="Picnic" secondary="To know more about the Picnic"/>
            <TabMenu value={value} tabs={tabs} handleChange={handleChange} handleChangeIndex={handleChangeIndex}>
                <TabPanel value={value} className={classes.tabPanel} index={0} dir={theme.direction}>
                    <About/>
                </TabPanel>
                <TabPanel value={value} className={classes.tabPanel} index={1} dir={theme.direction}>
                    <Schedule/>
                </TabPanel>
                <TabPanel value={value} className={classes.tabPanel} index={2} dir={theme.direction}>
                    <Venue/>
                </TabPanel>
                <TabPanel value={value} className={classes.tabPanel} index={3} dir={theme.direction}>
                    <Gallery/>
                </TabPanel>
            </TabMenu>         
        </Container>
        <Footer/>
      </>
    )
}

export default Details
