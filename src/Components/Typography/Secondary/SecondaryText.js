import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    primary:{
        color: '#FF4E00',
        font: '100 7rem/7rem "Raleway", Helvetica, Arial, sans-serif',
        fontWeight: 100,
        letterSpacing: 2,
        padding: '4rem 0',
        [theme.breakpoints.down(850)]:{
            font: '100 5rem/5rem "Raleway", Helvetica, Arial, sans-serif',
            padding: '2rem 0',
            textAlign: 'center'
        }    
    },
    sec:{
        font: '400 1.6rem/4.8rem "Architects Daughter", Helvetica, sans-serif',
        color: '#666',
        display:'block',
        letterSpacing: 1,
        [theme.breakpoints.down(850)]:{
            font: '400 1.6rem/1rem "Architects Daughter", Helvetica, sans-serif',
            padding: '2rem 0',
            textAlign: 'center'
        }    
    }
}))

const SecondaryText = ({primary,secondary}) => {
    const classes = useStyles();

    return (
        <h4 className={classes.primary}>
            {primary}
            <span className={classes.sec}>{secondary}</span>
        </h4>
    )
}

export default SecondaryText
