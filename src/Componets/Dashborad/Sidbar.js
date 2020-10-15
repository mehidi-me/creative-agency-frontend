import React, { useState } from "react";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import './Sidbar.css';
import { Avatar } from "@material-ui/core";

const Sidbar = (props) => {
    const user= useState(JSON.parse(localStorage.getItem('userInfo')))[0]
  return (
    <>
      <div className="sidbar">
        <div className="admin-logo">
        <Link to="/"><img src={Logo} alt="logo" /></Link>
        </div>
        <ul>
            {
                props.sidbar.map(v => (<li key={v.id}>
                    <Link to={v.path}>
                      <div className="icon">
                        {v.icon}
                      </div>
                      {v.item}
                    </Link>
                  </li>))
            }
          
        </ul>
      </div>
      <div className="formtitle">
        <h3>{props.title}</h3>
        <div style={{display: 'flex',margin: '0 86px 8px 0'}}><Avatar className="avater" alt="Remy Sharp" src={user.photoURL} />
        <h5>{user.displayName}</h5></div>
      </div>
    </>
  );
};

export default Sidbar;