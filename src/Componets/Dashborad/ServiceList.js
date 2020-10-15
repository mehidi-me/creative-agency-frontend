import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ServerUrl from "../../ServerUrl";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "82%",
    float: "left",
    minHeight: "80vh",
    padding: "2%",
  },
  icon: {
    width: "60px",
  },
  Card: {
    position: "relative",
    height: "200px",
    padding: "20px",
    "&:hover": {
      boxShadow: "0px -1px 17px 1px rgba(0,0,0,0.54)",
      transform: "translateY(10px)",
      transition: ".5s ease",
    },
  },
}));

const ServiceList = () => {
  const classes = useStyles();
  const [cardData, setCardData] = useState(null);

  const email = useState(JSON.parse(localStorage.getItem("userInfo")))[0].email;
  useEffect(() => {
    fetch(`${ServerUrl}/order/${email}`)
      .then((res) => res.json())
      .then((data) => setCardData(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div style={{ background: "#F4F7FC", height: "100vh" }}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {cardData ? (
            cardData.map((v) => (
              <Grid key={v._id} item md={4} xs={12}>
                <Paper className={classes.Card} elevation={1}>
                  <div className={classes.icon}>
                    <img src={`${ServerUrl}/${v.service[0].path}`} alt="icon" />
                  </div>
                  <Typography
                    variant="h6"
                    style={{ marginTop: "5px" }}
                    component="h6"
                    color="secondary"
                  >
                    {v.service[0].title}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    style={{ width: "80%", margin: "5px 0 0 0" }}
                    component="p"
                  >
                    {v.service[0].description}
                  </Typography>
                  {v.action === '2' && (
                    <span
                      style={{
                        position: "absolute",
                        top: "5%",
                        right: "5%",
                        background: "#C6FFE0",
                        color: "#009444",
                        padding: "11px 22px",
                        borderRadius: "5px",
                      }}
                    >
                      Done
                    </span>
                  )}

                  {v.action === '1' && (
                    <span
                      style={{
                        position: "absolute",
                        top: "5%",
                        right: "5%",
                        background: "#ffecc6",
                        color: "#FFBD3E",
                        padding: "11px 22px",
                        borderRadius: "5px",
                      }}
                    >
                      On Going
                    </span>
                  )}
                  {v.action === '0' && (
                    <span
                      style={{
                        position: "absolute",
                        top: "5%",
                        right: "5%",
                        background: "#FFE3E3",
                        color: "#FF4545",
                        padding: "11px 22px",
                        borderRadius: "5px",
                      }}
                    >
                      Panding
                    </span>
                  )}
                </Paper>
              </Grid>
            ))
          ) : (
            <h2>Loading...</h2>
          )}
        </Grid>
      </div>
    </div>
  );
};

export default ServiceList;
