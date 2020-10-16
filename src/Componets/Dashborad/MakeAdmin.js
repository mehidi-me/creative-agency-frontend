import { Button, CircularProgress, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import ServerUrl from "../../ServerUrl";

const useStyles = makeStyles((theme) => ({
  rootForm: {
    width: "50%",
    margin: "5%",
    background: "#fff",
    padding: "38px",
    float: "left",
    borderRadius: "12px",
    position: "relative",
  },
  inputBox: {
    borderColor: "#ababab",
    outline: "0",
    margin: "12px 18px 0 0",
    padding: "18px",
    fontSize: "18px",
    color: "#000",
    width: "50%",
    borderRadius: "6px",
  },
  custombtn: {
    padding: "10px 36px",
    margin: "0",
  },
}));
const MakeAdmin = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleInputChange = (e) => {
    if (e.target.name === "email") {
      let email = e.target.value;
      setFormData({ email, role: 1 });
    }
  };

  const formHendelar = (e) => {
    e.preventDefault();

    if (formData.email) {
      e.target.reset();
      setLoading(true);
      fetch(`${ServerUrl}/userlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then(() => {
          alert("Email is added");
          setLoading(false);
          setFormData({ email: "" });
        })
        .catch((err) => console.log(err));
    } else {
      alert("input is required");
    }
  };
  return (
    <div style={{ background: "#F4F7FC", height: "100vh" }}>
      <form className={classes.rootForm} onSubmit={(e) => formHendelar(e)}>
        <label htmlFor="email">Email</label>
        <input
          className={classes.inputBox}
          onBlur={handleInputChange}
          type="email"
          name="email"
          id="email"
          placeholder="jon@gamil.com"
        />

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

export default MakeAdmin;
