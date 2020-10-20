import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography, Box, useMediaQuery } from '@material-ui/core';
import { TiTicket } from "react-icons/ti";
import { MdEmail } from 'react-icons/md'
import { IoMdInfinite } from 'react-icons/io'
import { GoBook } from 'react-icons/go'
import PropTypes from 'prop-types';

import TabMenu from "../Components/TabMenu/TabMenu"
import PrimaryText from '../Components/Typography/Primary/PrimaryText';
import FAQ from '../Components/Booking/FAQ/faqSection'
import Terms from '../Components/Booking/Terms/Terms'
import Registration from '../Components/Booking/Registration/Registration';
import RegisteredStudents from '../Components/Booking/RegisteredStudents/RegisteredStudents';
import Footer from '../Components/Layout/footer';
import Header from '../Components/Layout/header';

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
  
const Booking = () => {
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
          iconEl: <TiTicket className={classes.iconStyle}/>,
          label: 'REGISTRATION'
        },
        {
          iconEl: <GoBook className={classes.iconStyle}/>,
          label: "FAQ'S"
        },
        {
          iconEl: <IoMdInfinite className={classes.iconStyle}/>,
          label: 'T & C'
        },
        {
          iconEl: <MdEmail className={classes.iconStyle}/>,
          label: 'Registered Students'
        }
      ] 
  
    return (
      <>
        <Header/>
        <Container fluid style={{padding: xs ? '0px 10px' : sm ? '10px 20px' : lg ? '25px 50px' : '50px 100px'}}>
            <PrimaryText primary="Register" secondary="Register in our Annual Picnic"/>
            <TabMenu tabs={tabs} value={value} handleChange={handleChange} handleChangeIndex={handleChangeIndex}>
                <TabPanel value={value} className={classes.tabPanel} index={0} dir={theme.direction}>
                    <Registration/>
                </TabPanel>
                <TabPanel value={value} className={classes.tabPanel} index={1} dir={theme.direction}>
                    <FAQ/>
                </TabPanel>
                <TabPanel value={value} className={classes.tabPanel} index={2} dir={theme.direction}>
                    <Terms/>
                </TabPanel>
                <TabPanel value={value} className={classes.tabPanel} index={3} dir={theme.direction}>
                   <RegisteredStudents/>
                </TabPanel>
            </TabMenu>         
        </Container>
        <Footer/>
      </>
    )
}

export default Booking;
