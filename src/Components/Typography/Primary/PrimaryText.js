import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    primary:{
        color: '#333',
        fontWeight: 600,
        fontFamily: '"Open sans", Helvetica, sans-serif',
        letterSpacing: -2,
        fontSize: '9rem',
        marginBottom: '2.5rem',
        [theme.breakpoints.down(600)]:{
            margin: '2rem 0 5rem 0',
            fontSize: '6rem',
        }
    },
    sec:{
        font: '400 1.6rem/1.6rem "Architects Daughter", Helvetica, sans-serif',
        color: '#aaa',
        letterSpacing: 1,
        [theme.breakpoints.down(600)]:{
            display: 'block',
            marginTop: '1rem'
        }
    }
}))


const PrimaryText = (props) => {
    const classes = useStyles();

    return (
        <h1 className={classes.primary}>
            {props.primary}. <span className={classes.sec}>{props.secondary}</span>
        </h1>
    )
}

export default PrimaryText
