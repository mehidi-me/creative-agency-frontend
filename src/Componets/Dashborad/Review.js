import { Button, CircularProgress, makeStyles } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import ServerUrl from "../../ServerUrl";

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
    padding: "20px",
    fontSize: "18px",
    color: "#000",
    width: "100%",
    borderRadius: "6px",
  },
}));

const Review = () => {
  const classes = useStyles();
  const image = useState(JSON.parse(localStorage.getItem("userInfo")))[0]
    .photoURL;
  const [review, setReview] = useState({
    uname: "",
    cname: "",
    description: "",
    image,
  });

  const [loading, setLoading] = useState(false);

  const inputOnBlur = (e) => {
    let name = e.target.name;

    if (name === "uname") {
      let uname = e.target.value;
      setReview({ ...review, uname });
    }
    if (name === "cname") {
      let cname = e.target.value;
      setReview({ ...review, cname });
    }
    if (name === "description") {
      let description = e.target.value;
      setReview({ ...review, description });
    }
  };

  const formHendaler = (e) => {
    e.preventDefault();
    if (review.uname && review.cname && review.description) {
      e.target.reset();
      setLoading(true);
      fetch(`${ServerUrl}/addreview`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
      })
        .then((res) => res.json())
        .then((v) => {
          alert(v.msg);
          setReview({ uname: "", cname: "", description: "", image });
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
          placeholder="Your name"
          onBlur={(e) => inputOnBlur(e)}
          name="uname"
        />
        <input
          className={classes.inputBox}
          type="text"
          placeholder="Company’s name, Designation"
          onBlur={(e) => inputOnBlur(e)}
          name="cname"
        />
        <textarea
          className={classes.inputBox}
          name="description"
          placeholder="Description"
          rows="5"
          onBlur={(e) => inputOnBlur(e)}
        ></textarea>

        {loading ? (
          <Button
            type="submit"
            className={classes.custombtn}
            disabled
            variant="contained"
            color="secondary"
          >
            Submit
            <CircularProgress style={{ position: "absolute" }} />
          </Button>
        ) : (
          <Button
            type="submit"
            className={classes.custombtn}
            variant="contained"
            color="secondary"
          >
            Submit
          </Button>
        )}
      </form>
    </div>
  );
};

export default Review;
