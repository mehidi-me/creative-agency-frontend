import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  custombtn: {
    padding: "10px 36px",
    margin: "0",
  },
  subtitle1: {
    margin: "24px 0",
    width: "85%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  headerFrame: {
    width: "90%",
  },
  headerMain: {
    backgroundColor: theme.palette.primary.main,
    padding: "100px 0",
  },
  inputBox: {
    border: "0",
    outline: "0",
    margin: "12px 0px",
    padding: "24px",
    fontSize: "18px",
    color: "#000",
    width: "100%",
    borderRadius: "6px",
  },
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    textAlign: "center",
    fontSize: "16px",
    padding: "40px 0",
  },
}));
const HeaderSection = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.headerMain} id="contact">
        <Container>
          <Grid container spacing={2}>
            <Grid item lg={6} md={12}>
              <Typography variant="h3" component="h3" color="secondary">
                Let us handle your project, professionally.
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                className={classes.subtitle1}
              >
                With well written codes, we build amazing apps for all
                platforms, mobile and web apps in general.
              </Typography>
            </Grid>
            <Grid item lg={6} md={12}>
              <form>
                <input
                  className={classes.inputBox}
                  type="email"
                  placeholder="Your email address"
                />
                <input
                  className={classes.inputBox}
                  type="text"
                  placeholder="Your name / company’s name"
                />
                <textarea
                  className={classes.inputBox}
                  name="description"
                  placeholder="Your message"
                  rows="10"
                ></textarea>
                <Button
                  color="secondary"
                  variant="contained"
                  className={classes.custombtn}
                  type="submit"
                >
                  Send
                </Button>
              </form>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <div className={classes.footer}>copyright Orange labs 2020</div>
    </>
  );
};

export default HeaderSection;
