import { Button, CircularProgress, Grid, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";
import ServerUrl from "../../ServerUrl";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const useStyles = makeStyles((theme) => ({
  rootForm: {
    width: "400px",
    float: "left",
    margin: "38px 0 0 38px",
  },
  custombtn: {
    padding: "10px 36px",
    margin: "0",
  },
  inputBox: {
    border: "0",
    outline: "0",
    margin: "12px 0px",
    padding: "16px 20px",
    fontSize: "18px",
    color: "#000",
    width: "100%",
    borderRadius: "6px",
  },
}));
const OrderForm = () => {
  const classes = useStyles();
  const userEmail = useState(JSON.parse(localStorage.getItem("userInfo")))[0]
    .email;
  const [order, setOrder] = useState({
    id: "",
    uname: "",
    email: "",
    description: "",
    userEmail,
    action:'0'
  });

  const [loading, setLoading] = useState(false);
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    fetch(`${ServerUrl}/getservice`)
      .then((res) => res.json())
      .then((data) => setCardData(data))
      .catch((err) => console.log(err));
  }, []);

  const inputOnBlur = (e) => {
    let name = e.target.name;

    if (name === "uname") {
      let uname = e.target.value;
      setOrder({ ...order, uname });
    }

    if (name === "email") {
      let email = e.target.value;
      setOrder({ ...order, email });
    }
    if (name === "description") {
      let description = e.target.value;
      setOrder({ ...order, description });
    }

    if (name === "id") {
      let id = e.target.value;
      setOrder({ ...order, id });
    }
  };

  const formHendaler = (e) => {
    e.preventDefault();
    if (order.id && order.uname && order.description && order.email) {
      e.target.reset();
      setLoading(true);
      fetch(`${ServerUrl}/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((v) => {
          alert(v.msg);
          setOrder({
            id: "",
            uname: "",
            email: "",
            description: "",
            userEmail,
            action:'0'
          });
          setLoading(false);
        })
        .catch((err) => console.log(err));
    } else {
      alert("Data is required");
    }
  };

  return (
    <div style={{ background: "#F4F7FC", height: "100vh" }}>
      <form className={classes.rootForm} onSubmit={(e) => formHendaler(e)}>
        <input
          className={classes.inputBox}
          type="text"
          placeholder="Your name / company’s name"
          onBlur={(e) => inputOnBlur(e)}
          name="uname"
        />
        <input
          className={classes.inputBox}
          type="email"
          placeholder="Your email address"
          onBlur={(e) => inputOnBlur(e)}
          name="email"
        />
        <select
          onChange={(e) => inputOnBlur(e)}
          className={classes.inputBox}
          style={{ width: "110%" }}
          name="id"
        >
            <option value="" selected disabled>Select Service</option>
          {cardData &&
            cardData.map((v) => (
              <option key={v._id} value={v._id}>
                {v.title}
              </option>
            ))}
        </select>
        <textarea
          className={classes.inputBox}
          name="description"
          placeholder="Description"
          rows="4"
          onBlur={(e) => inputOnBlur(e)}
        ></textarea>

        <Grid container spacing={5} style={{ width: "126%" }}>
          <Grid item md={6} xm={12}>
            <input
              className={classes.inputBox}
              type="number"
              placeholder="Price"
              onBlur={(e) => inputOnBlur(e)}
              name="price"
            />
          </Grid>
          <Grid item md={6} xm={12}>
            <Button
              variant="contained"
              color="default"
              startIcon={<CloudUploadIcon />}
              style={{
                color: "#0084FF",
                border: "1px solid #0084FF",
                background: "#E5F3FF",
                padding: "14px 6px",
                margin: "5% 0 0 5%",
              }}
            >
              <span style={{ fontSize: "12px" }}>Upload Project File</span>
              <input
                accept="image/*"
                id="icon"
                name="image"
                onChange={(e) => inputOnBlur(e)}
                style={{
                  opacity: "0",
                  position: "absolute",
                  height: "100%",
                  cursor: "pointer",
                }}
                type="file"
              />
            </Button>
          </Grid>
        </Grid>

        {loading ? (
          <Button
            type="submit"
            className={classes.custombtn}
            disabled
            variant="contained"
            color="secondary"
          >
            Send
            <CircularProgress style={{ position: "absolute" }} />
          </Button>
        ) : (
          <Button
            type="submit"
            className={classes.custombtn}
            variant="contained"
            color="secondary"
          >
            Send
          </Button>
        )}
      </form>
    </div>
  );
};

export default OrderForm;
