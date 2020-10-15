import { makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
    icon: {
        width: '60px',
        margin: 'auto'
    },
    Card: {
        height: '280px',
        padding: '48px',
        '&:hover': {
            boxShadow: '0px -1px 17px 1px rgba(0,0,0,0.54)',
            transform: 'translateY(10px)',
            transition: '.5s ease'
         },
    }
}));
const ServiceCard = (props) => {

    const classes = useStyles()
    let history = useHistory();
    const user = useState(JSON.parse(localStorage.getItem('userInfo')))[0]
    const setPath = () => {
        user && user.role ? history.push('/serviceall') : history.push('/order')
    }
    return (
        <div onClick={setPath} style={{cursor:'pointer'}}>
            <Paper className={classes.Card} elevation={0}>
                <div className={classes.icon}>
                    <img src={props.path} alt="icon"/>
                </div>
    <Typography variant='h5' style={{marginTop:'12px'}} component='h5' color='secondary'>{props.title}</Typography>
    <Typography variant='subtitle1' style={{width:'80%',margin:'12px auto 0 auto'}} component='p'>{props.description}</Typography>
            </Paper>
        </div>
    );
};

export default ServiceCard;