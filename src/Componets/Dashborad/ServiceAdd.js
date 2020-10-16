import React, { useState } from "react";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { Button, Grid, makeStyles } from "@material-ui/core";
import { CircularProgress } from "@material-ui/core";
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
    margin: "12px 0px",
    padding: "18px",
    fontSize: "18px",
    color: "#000",
    width: "85%",
    borderRadius: "6px",
  },
  custombtn: {
    padding: "10px 36px",
    margin: "0",
    position: "absolute",
    bottom: "-70px",
    right: "18px",
  },
}));
const ServiceAdd = () => {
  const classes = useStyles();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    imageUrl: "",
  });

  const handleInputChange = (e) => {
    if (e.target.name === "image") {
      let image = e.target.files[0];
      let imageUrl = image && URL.createObjectURL(image);
      setFormData({ ...formData, image, imageUrl });
    }
    if (e.target.name === "title") {
      let title = e.target.value;
      setFormData({ ...formData, title });
    }
    if (e.target.name === "description") {
      let description = e.target.value;
      setFormData({ ...formData, description });
    }
  };

  const formHendelar = (e) => {
    e.preventDefault();

    if (formData.image.name && formData.title && formData.description) {
      const data = new FormData();

      data.append("file", formData.image);
      data.append("title", formData.title);
      data.append("description", formData.description);

      e.target.reset();
      setLoading(true);

      fetch(`${ServerUrl}/addservice`, {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((value) => {
          setFormData({
            title: "",
            description: "",
            image: "",
            imageUrl: "",
          });
          setLoading(false);
          alert(value.msg);
        })
        .catch((err) => console.log(err));
    } else {
      alert("input is required");
    }
  };

  return (
    <div style={{ background: "#F4F7FC", height: "100vh" }}>
      <form className={classes.rootForm} onSubmit={(e) => formHendelar(e)}>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <label htmlFor="title">Title</label>
            <input
              className={classes.inputBox}
              onBlur={handleInputChange}
              type="text"
              name="title"
              id="title"
              placeholder="Enter title"
            />
          </Grid>

          <Grid item md={6} xs={12}>
            <label htmlFor="icon">Icon</label>
            <Button
              variant="contained"
              color="default"
              startIcon={<CloudUploadIcon />}
              style={{
                color: "#0084FF",
                border: "1px solid #0084FF",
                background: "#E5F3FF",
                margin: "20px 0",
              }}
            >
              Upload image
              <input
                accept="image/*"
                id="icon"
                name="image"
                onChange={handleInputChange}
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

          <Grid item md={6} xs={12}>
            <label htmlFor="description">Description</label>
            <textarea
              className={classes.inputBox}
              onBlur={handleInputChange}
              name="description"
              id="description"
              rows="5"
              placeholder="Enter description"
            ></textarea>
          </Grid>
          <Grid item md={6} xs={12}>
            {formData.imageUrl && (
              <img
                style={{ width: "60%" }}
                src={formData.imageUrl}
                alt="upload"
              />
            )}
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

export default ServiceAdd;
