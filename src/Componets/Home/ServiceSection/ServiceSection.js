import React from "react";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import ServiceCard from "./ServiceCard/ServiceCard";
import { useState } from "react";
import { useEffect } from "react";
import ServerUrl from "../../../ServerUrl";

const useStyles = makeStyles((theme) => ({
  serviceMain: {
    padding: "100px 0",
    textAlign: "center",
  },
  greenColor: {
    color: "#7AB259",
  },
}));

const ServiceSection = () => {
  const classes = useStyles();
  const [cardData, setCardData] = useState(null)

useEffect(() => {

  fetch(`${ServerUrl}/getservice`)
  .then(res => res.json())
  .then(data => setCardData(data))
  .catch(err => console.log(err))

},[])

  return (
    <div className={classes.serviceMain}>
      <Container>
        <Typography
          variant="h3"
          style={{ marginBottom: "80px" }}
          component="h3"
        >
          Provide awesome <span className={classes.greenColor}>services</span>
        </Typography>

        <Grid container spacing={3}>
          
            {
              cardData ? cardData.map(v => (
                <Grid item xs={12} md={6} lg={4} key={v._id}>
                  <ServiceCard path={`${ServerUrl}/${v.path}`}  title={v.title} description={v.description}></ServiceCard>
                  </Grid>
              )) : <h2>Loading...</h2>
            }
          
        </Grid>
      </Container>
    </div>
  );
};

export default ServiceSection;
