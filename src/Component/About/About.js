import React from "react";
import pic from "./me.jpeg";

import "./About.css";
const About = () => {
  return (
    <>
      <div className="main">
        <div className="about">
          <div className="head">
            <h1>About/{">"}</h1>{" "}
          </div>
          <img src={pic} alt="portrait" />
          <br />
          <br />
          {/* <p style={{color:'red'}}>class Jan Baszczok {"{"}</p> */}
          <span style={{ color: "blue" }}>class </span>
          <span style={{ color: "yellow" }}>
            Geetanjali Singh <span style={{ color: "white" }}>{"{"}</span>
          </span>
          <p style={{ color: "grey", fontSize: "16px" }}>
            &nbsp; &nbsp; &nbsp; &nbsp; // I'm ambitious and I love new
            challenges :)
          </p>
          <p style={{ color: "grey", fontSize: "16px" }}>
            &nbsp; &nbsp; &nbsp; &nbsp; // My vast variety of skills is
            continuously expanding.
          </p>
          <span style={{ color: "blue" }}>
            &nbsp; &nbsp; &nbsp; &nbsp; constructor
            <span style={{ color: "white" }}>{"( ) {"}</span>
          </span>
          <br />
          <span style={{ color: "red", fontSize: "16px" }}>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;this
          </span>
          <span style={{ color: "white", fontSize: "16px" }}>.</span>
          <span style={{ color: "rgb(134, 177, 71)", fontSize: "16px" }}>
            name
          </span>
          <span style={{ color: "red", fontSize: "16px" }}> = </span>
          <span style={{ color: "rgb(150, 246, 6)", fontSize: "15px" }}>
            'Geetanjali Singh'
          </span>
          <br />
          <span style={{ color: "red", fontSize: "16px" }}>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;this
          </span>
          <span style={{ color: "white", fontSize: "16px" }}>.</span>
          <span style={{ color: "rgb(134, 177, 71)", fontSize: "16px" }}>
            email
          </span>
          <span style={{ color: "red", fontSize: "16px" }}> = </span>
          <span style={{ color: "rgb(150, 246, 6)", fontSize: "15px" }}>
            'geetanjalisingh1815@gmail.com'
          </span>
          <br />
          <span style={{ color: "red", fontSize: "16px" }}>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;this
          </span>
          <span style={{ color: "white", fontSize: "16px" }}>.</span>
          <span style={{ color: "rgb(134, 177, 71)", fontSize: "16px" }}>
            dateOfBirth
          </span>
          <span style={{ color: "red", fontSize: "16px" }}> = </span>
          <span style={{ color: "rgb(150, 246, 6)", fontSize: "15px" }}>
            '15-08-2002'
          </span>
          <br />
          <span style={{ color: "white" }}>
            &nbsp; &nbsp; &nbsp; &nbsp;{"}"}
          </span>
          <br />
          <br />
          <span style={{ color: "yellow" }}>
            &nbsp; &nbsp; &nbsp; &nbsp;workExperience
            <span style={{ color: "white" }}>{"() {"}</span>
          </span>
          <br />
          <span style={{ color: "blue" }}>
            &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; return
            <span style={{ color: "white" }}>{" ["}</span>
          </span>
          <br />
          <span style={{ color: "white" }}>
            &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;{"{"}
          </span>
          <span style={{ color: "rgb(150, 246, 6)", fontSize: "15px" }}>
            {" "}
            '2022-now'{" "}
          </span>
          <span style={{ color: "white" }}> : </span>
          <span style={{ color: "rgb(150, 246, 6)", fontSize: "15px" }}>
            {" "}
            'Problem-Setter Intern (Imotcha)'{" "}
          </span>
          <span style={{ color: "white" }}>{"}"}</span>
          <br />
       
          <span style={{ color: "white" }}>
            &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;{"{"}
          </span>
          <span style={{ color: "rgb(150, 246, 6)", fontSize: "15px" }}>
            {" "}
            'July 2022-Sept 2022'{" "}
          </span>
          <span style={{ color: "white" }}> : </span>
          <span style={{ color: "rgb(150, 246, 6)", fontSize: "15px" }}>
            {" "}
            'Web Development Intern (Flicker Infotech)'{" "}
          </span>
          <span style={{ color: "white" }}>{"}"}</span>
          <br />
          <span style={{ color: "white" }}>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {"]"}
          </span>
          <br />
          <span style={{ color: "white" }}>
            &nbsp; &nbsp; &nbsp; &nbsp; {"}"}
          </span>
          <br />
          <br />
          <span style={{ color: "yellow" }}>
            &nbsp; &nbsp; &nbsp; &nbsp;education
            <span style={{ color: "white" }}>{"() {"}</span>
          </span>
          <br />
          <span style={{ color: "blue" }}>
            &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; return
            <span style={{ color: "white" }}>{" ["}</span>
          </span>
          <br />
          <div className="education">
            <span style={{ color: "rgb(150, 246, 6)", fontSize: "15px" }}>
              {" "}
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;'2020-now'{" "}
            </span>
            <span style={{ color: "white" }}> : </span>
            <span style={{ color: "rgb(150, 246, 6)", fontSize: "15px" }}>
              {" "}
              'Madan Mohan Malviya University of Technology, Gorakhpur'{" "}
            </span>
            <br />
            <span style={{ color: "rgb(150, 246, 6)", fontSize: "15px" }}>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; '2017-2019'{" "}
            </span>
            <span style={{ color: "white" }}> : </span>
            <span style={{ color: "rgb(150, 246, 6)", fontSize: "15px" }}>
              {" "}
              'Academic Global School, Gorakhpur'{" "}
            </span>
            <br />
          </div>

          <span style={{ color: "white" }}>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {"]"}
          </span>
          <br />
          <span style={{ color: "white" }}>
            &nbsp; &nbsp; &nbsp; &nbsp; {"}"}
          </span>
          <br />
          <br />

          <span style={{ color: "yellow" }}>
            &nbsp; &nbsp; &nbsp; &nbsp;certificates
            <span style={{ color: "white" }}>{"() {"}</span>
          </span>
          <br />
          <span style={{ color: "blue" }}>
            &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; return
            <span style={{ color: "white" }}>{" ["}</span>
          </span>
          <br />
          <div className="education">
          <span style={{ color: "white" }}>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;   {"{"}
          </span>
          <a href="https://drive.google.com/file/d/1lyrZX-4znjNscohcjzarjYH8CQqpwSmA/view?usp=sharing" style={{textDecorationnone:"none",fontStyle:"none"}}>
            <span style={{ color: "rgb(150, 246, 6)", fontSize: "15px" , textDecoration:"none"}}>
              {" "}
            'Future ready talent virtual internship (Microsoft, FutureSkills, AICTE)'{" "}
            </span>
            </a>
            <span style={{ color: "white" }}>
             {"}"}
          </span>
            <br />
            <span style={{ color: "white" }}>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;   {"{"}
          </span>
            <a href="https://drive.google.com/file/d/1c57PEAFGIZgiJA8NqmHt6CSCakyr2IiQ/view?usp=sharing">
            <span style={{ color: "rgb(150, 246, 6)", fontSize: "15px", fontStyle:"none" }}>
              {" "}
              'Software Engineering Virtual Experience (Forage)'{" "}
            </span>
            </a>
            <span style={{ color: "white" }}>
             {"}"}
          </span>
            <br />
            
            <br />
          </div>

          <span style={{ color: "white" }}>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {"]"}
          </span>
          <br />
          <span style={{ color: "white" }}>
            &nbsp; &nbsp; &nbsp; &nbsp; {"}"}
          </span>
          <br />
          <br />

          <span style={{ color: "yellow" }}>
            &nbsp; &nbsp; &nbsp; &nbsp;skills
            <span style={{ color: "white" }}>{"() {"}</span>
          </span>
          <br />
          <div className="skills">
            <span style={{ color: "blue" }}>
              &nbsp; &nbsp; return<span style={{ color: "white" }}>{" ["}</span>
            </span>
            <span style={{ color: "rgb(150, 246, 6)", fontSize: "15px" }}>
              {" "}
              ' HTML/CSS/JS '{" "}
            </span>
            <span style={{ color: "white" }}>{" ,"}</span>
            <span style={{ color: "rgb(150, 246, 6)", fontSize: "15px" }}>
              {" "}
              ' C++ '{" "}
            </span>
            <span style={{ color: "white" }}>{" ,"}</span>
            <span style={{ color: "rgb(150, 246, 6)", fontSize: "15px" }}>
              {" "}
              ' C '{" "}
            </span>
            <span style={{ color: "white" }}>{" ,"}</span>
            <span style={{ color: "rgb(150, 246, 6)", fontSize: "15px" }}>
              {" "}
              ' Data Structures '{" "}
            </span>
            <span style={{ color: "white" }}>{" ,"}</span>
            <span style={{ color: "rgb(150, 246, 6)", fontSize: "15px" }}>
              {" "}
              ' ReactJs '{" "}
            </span>
            <span style={{ color: "white" }}>{" ,"}</span>
            <span style={{ color: "rgb(150, 246, 6)", fontSize: "15px" }}>
              {" "}
              ' NodeJs '{" "}
            </span>
            <span style={{ color: "white" }}>{" ,"}</span>
            <span style={{ color: "rgb(150, 246, 6)", fontSize: "15px" }}>
              {" "}
              ' Angular '{" "}
            </span>
            <span style={{ color: "white" }}>{" ,"}</span>
            <span style={{ color: "rgb(150, 246, 6)", fontSize: "15px" }}>
              {" "}
              ' SQL'{" "}
            </span>
            <span style={{ color: "white" }}>{" ,"}</span>
            <span style={{ color: "rgb(150, 246, 6)", fontSize: "15px" }}>
              {" "}
              ' Git '{" "}
            </span>
            <span style={{ color: "white" }}>{" ,"}</span>
            <span style={{ color: "rgb(150, 246, 6)", fontSize: "15px" }}>
              {" "}
              ' Github '{" "}
            </span>
            <span style={{ color: "white" }}>&nbsp; {"]"}</span>
          </div>
          <br />
          <span style={{ color: "white" }}>
            &nbsp; &nbsp; &nbsp; &nbsp; {"}"}
          </span>
          <br />
          <br/>
          <span style={{ color: "yellow" }}>
            &nbsp; &nbsp; &nbsp; &nbsp;codingWebsites
            <span style={{ color: "white" }}>{"() {"}</span>
          </span>
          <br />
          <span style={{ color: "blue" }}>
            &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; return
            <span style={{ color: "white" }}>{" ["}</span>
          </span>
          <br />
          <div className="education">
          <span style={{ color: "white" }}>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;   {"{"}
          </span>
          <a href="https://auth.geeksforgeeks.org/user/geetanjalisingh1815/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user" style={{textDecorationnone:"none",fontStyle:"none"}}>
            <span style={{ color: "rgb(150, 246, 6)", fontSize: "15px" , textDecoration:"none"}}>
              {" "}
            'GeeksForGeeks'{" "}
            </span>
            </a>
            <span style={{ color: "white" }}>
             {"}"}
          </span>
            <br />
            <span style={{ color: "white" }}>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;   {"{"}
          </span>
            <a href="https://leetcode.com/geetanjalisingh1815/">
            <span style={{ color: "rgb(150, 246, 6)", fontSize: "15px", fontStyle:"none" }}>
              {" "}
              'Leetcode'{" "}
            </span>
            </a>
            <span style={{ color: "white" }}>
             {"}"}
          </span>
            <br />
          </div>
      
            <span style={{ color: "white" }}>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;    {"{"}
          </span>
            <a href="https://www.hackerrank.com/geetanjalisingh?hr_r=1">
            <span style={{ color: "rgb(150, 246, 6)", fontSize: "15px", fontStyle:"none" }}>
              {" "}
              'Hackerrank'{" "}
            </span>
            </a>
            <span style={{ color: "white" }}>
             {"}"}
          </span>
            <br />
          <span style={{ color: "white" }}>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {"]"}
          </span>
          <br />
          <span style={{ color: "white" }}>
            &nbsp; &nbsp; &nbsp; &nbsp; {"}"}
          </span>
          <br />
          <br />
          <span style={{ color: "white" }}>{"}"}</span>
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default About;
