import { Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Logo1 from "../../../images/airbnb.png";
import Logo2 from "../../../images/google.png";
import Logo4 from "../../../images/netflix.png";
import Logo5 from "../../../images/slack.png";
import Logo3 from "../../../images/uber.png";

const useStyles = makeStyles((theme) => ({
  logo: {
    width: "120px",
  },
  brandMain: {
    padding: "70px 0",
  },
}));

const BrandLogo = () => {
  const classes = useStyles();
  return (
    <div className={classes.brandMain}>
      <Container>
        <Grid
          container
          spacing={1}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item lg={2} md={4} xs={6}>
            <div className={classes.logo}>
              <img src={Logo1} alt="brand logo" />
            </div>
          </Grid>
          <Grid item lg={2} md={4} xs={6}>
            <div className={classes.logo}>
              <img src={Logo2} alt="brand logo" />
            </div>
          </Grid>
          <Grid item lg={2} md={4} xs={6}>
            <div className={classes.logo}>
              <img src={Logo3} alt="brand logo" />
            </div>
          </Grid>
          <Grid item lg={2} md={4} xs={6}>
            <div className={classes.logo}>
              <img src={Logo4} alt="brand logo" />
            </div>
          </Grid>
          <Grid item lg={2} md={4} xs={6}>
            <div className={classes.logo}>
              <img src={Logo5} alt="brand logo" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default BrandLogo;
