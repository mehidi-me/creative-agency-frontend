import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import GoogleButton from "react-google-button";
import { useHistory} from "react-router-dom";
import Logo from "../../images/logo.png";
import * as firebase from "firebase/app";
import "firebase/auth";
import FirebaseConfig from '../../Config/FirebaseConfig';

firebase.initializeApp(FirebaseConfig);

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    minHeight: "80vh",
  },
  logo: {
    width: "200px",
    margin: "50px auto",
  },
  link: {
    cursor: "pointer",
    color: "#3F90FC",
  },
  loginBox: {
    width: "430px",
    border: "1px solid #ababab",
    margin: "0 auto",
    padding: "150px 0",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  },
  googleBtn: {
    margin: "18px auto",
  },
  h1: {
      marginBottom: '38px'
  }
}));

const Login = () => {
  const classes = useStyles();
  let history = useHistory();
  
   
  
  const googleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(result => {
            
      const {displayName, email, photoURL} = result.user;
      
      fetch('http://localhost:5000/userlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email,role:0})
      })
      .then(res => res.json())
      .then(data => {

        if(data.role){
          window.localStorage.setItem('userInfo', JSON.stringify({displayName, email, photoURL, role:1}));
      history.push('/serviceall');
        }else{
          window.localStorage.setItem('userInfo', JSON.stringify({displayName, email, photoURL, role:0}));
          history.push('/order');
        }



      })
      .catch(err => console.log('error:',err))
    }).catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage)
    });
  }
  

  return (
    <div className={classes.root}>
      <div className={classes.logo}>
        <img src={Logo} alt="logo" />
      </div>
      <div className={classes.loginBox}>
        <Typography component="h5" variant="h5" className={classes.h1}>
          Login With
        </Typography>
        <GoogleButton
        label="Continue with Google"
          className={classes.googleBtn}
          onClick={googleLogin}
        />
        <Typography component="p" variant="subtitle1">
          Don’t have an account?{" "}
          <span className={classes.link}>Create an account</span>
        </Typography>
      </div>
    </div>
  );
};

export default Login;
