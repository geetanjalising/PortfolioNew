import React from "react";
import "./Home.css";
import Typical from "react-typical";

import {FaLinkedin,FaGithub,FaTwitter } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="body">
        <div className="intro">
          
          <div className="icons"> 
          <a href="https://docs.google.com/document/d/1zX9xBlxnHKV_ZB2mN15Og5Qv_0qAAPyv/edit?usp=sharing&ouid=110222234004173471565&rtpof=true&sd=true"><button className="resume">Resume</button></a>
          <span ><a style={{ color: "rgb(141, 141, 192)", fontSize: "26px" , cursor: "pointer", marginLeft:"12px"}}href="https://www.linkedin.com/in/geetanjali-singh-564324203/"><FaLinkedin/></a></span>
          <span > <a style={{ color: "red" , fontSize: "26px", cursor: "pointer" ,marginLeft:"10px"}} href="https://github.com/geetanjalising"><FaGithub/></a></span>
          <span ><a style={{ color: "rgb(130, 223, 223)" , fontSize: "26px", cursor: "pointer",marginLeft:"12px"}} href="https://twitter.com/"><FaTwitter/></a> </span>
          </div>
         
          <h1>Hi, my name is Geetanjali Singh</h1>
          <div className="d">
            <div className="d1">i am </div>
            <div className="d2">
              <Typical
                loop={Infinity}
                steps={[
                  "Coding Enthusiast",
                  10000,
                  "MERN Developer",
                  10000,
                  "Software Developer",
                  10000,
                ]}
              />
            </div>
          </div> 
          
        </div>
       
        {/* <div className="box"></div> */}
        {/* <img src={pic} alt="portrait" /> */}
       
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default Home;