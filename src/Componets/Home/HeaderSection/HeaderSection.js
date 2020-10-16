import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import Navbar from "./Navbar/Navbar";
import HeaderFrame from "../../../images/Frame.png";

const useStyles = makeStyles((theme) => ({
  custombtn: {
    padding: "10px 36px",
    margin: "0",
  },
  h2: {
    width: "80%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      fontSize: "2.75rem",
    },
  },
  subtitle1: {
    margin: "24px 0",
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      width: "60%",
    },
  },
  headerFrame: {
    width: "90%",
    animationName: `$myEffect`,
    animationDuration: "5s",
    animationTimingFunction: "ease-out",
    animationIterationCount: "infinite",
    [theme.breakpoints.down("md")]: {
      width: "0%",
    },
  },
  "@keyframes myEffect": {
    "0%": {
      transform: "translateX(-50px)",
    },
    "25%": {
      transform: "translateX(-30px)",
    },
    "75%": {
      transform: "translateX(-0px)",
    },
    "100%": {
      transform: "translateX(-50px)",
    },
  },
  headerMain: {
    minHeight: "75vh",
    [theme.breakpoints.down("md")]: {
      minHeight: "90vh",
      textAlign: "center",
    },
    backgroundColor: theme.palette.primary.main,
    padding: "10px 0",
    clipPath: "polygon(0 0, 100% 0, 100% 77%, 0 100%)",
  },
}));
const HeaderSection = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar></Navbar>
      <Box className={classes.headerMain} display="flex" alignItems="center">
        <Container>
          <Grid container spacing={2}>
            <Grid item lg={6} md={12}>
              <Typography
                className={classes.h2}
                variant="h2"
                component="h2"
                color="secondary"
              >
                Let’s Grow Your Brand To The Next Level
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                className={classes.subtitle1}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                commodo ipsum duis laoreet maecenas. Feugiat
              </Typography>
              <Button
                color="secondary"
                variant="contained"
                className={classes.custombtn}
              >
                Hire Us
              </Button>
            </Grid>
            <Grid item lg={6} md={12}>
              <div className={classes.headerFrame}>
                <img src={HeaderFrame} alt="header frame" />
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default HeaderSection;
