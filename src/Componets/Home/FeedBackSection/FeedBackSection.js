import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ServerUrl from '../../../ServerUrl';
import FeedBackCard from './FeedBackCard/FeedBackCard';


const useStyles = makeStyles((theme) => ({
    feedBackMain: {
      padding: "100px 0",
      textAlign: "center"
    },
    greenColor: {
      color: "#7AB259",
    },
  }));
const WorkSection = () => {
    const classes = useStyles();
    const [cardData, setCardData] = useState(null)

useEffect(() => {

  fetch(`${ServerUrl}/getreview`)
  .then(res => res.json())
  .then(data => setCardData(data))
  .catch(err => console.log(err))

},[])
    return (
        <div className={classes.feedBackMain}>
      <Container>
        <Typography
          variant="h3"
          style={{ marginBottom: "80px" }}
          component="h3"
        >
         Clients <span className={classes.greenColor}>Feedback</span>
        </Typography>

        <Grid container spacing={3}>

          {
              cardData ? cardData.map(v => (
                <Grid item xs={12} md={6} lg={4} key={v._id}>
                  <FeedBackCard path={v.image} name={v.uname}  cname={v.cname} description={v.description}></FeedBackCard>
                  </Grid>
              )) : <h2>Loading...</h2>
            }
        </Grid>
      </Container>
    </div>
    );
};

export default WorkSection;