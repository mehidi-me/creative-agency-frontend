import { Avatar, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  clientDetils: {
    display: 'flex'
  },
  Card: {
    height: "160px",
    padding: "28px",
    border: '1px solid #707070'
  },
  avater: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    margin: '5px 16px 0 0'
  },
}));
const FeedBackCard = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.Card} elevation={2}>
        <div className={classes.clientDetils}>
          <Avatar className={classes.avater} alt="Remy Sharp" src={props.path} />
          <div>
          <Typography variant="h6" component="h6">
           {props.name}
          </Typography>
          <Typography variant="body1" component="b">
            {props.cname}
          </Typography>
          </div>
        </div>
        <Typography
          variant="subtitle1"
          style={{ textAlign: 'initial', marginTop: '16px' }}
          component="p"
        >
          {props.description}
        </Typography>
      </Paper>
    </div>
  );
};

export default FeedBackCard;
