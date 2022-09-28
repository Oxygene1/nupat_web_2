import React from "react";
import "./notfound.css";

const NotFound = () => {
  return (
    <>
      <div className="errormaincontainer">
        <h1 style={{color: '#131E47'}}>Error 404</h1>
        <h2 style={{color:'#131E47'}}>Page not Found</h2>
      </div>
      <div id="constdiv">
        <img className="constimg" src={require('../../Images/constructionbgblue.jpg')} alt="" />
      </div>
      <div className="errormaincontainer">
        <h3 style={{color: '#131E47'}}></h3>
        <p style={{color: '#131E47'}}>
          The Page you are trying to access does does not exist.
          <a href="nupat.com.ng">Click here to go home</a>
        </p>
      </div>
    </>
  );
};

export default NotFound;
