import React from "react";
import pic from "./me.jpeg";
import gfg from "./gfg.png";
import codechef from "./codechef.jpg";
import hackerrank from "./hhackerrank.png";
import leetcode from "./leetcode.png";

import "./About.css";
const About = () => {
  return (
    <>
      <div className="main">
        <div className="about">
          <div className="head">
            <h1>About/{">"}</h1>{" "}
          </div>
          <div className="imge">          <img src={pic} alt="portrait" />
</div>
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
            'Sept 2022-Apr 2023'{" "}
          </span>
          <span style={{ color: "white" }}> : </span>
          <span style={{ color: "rgb(150, 246, 6)", fontSize: "15px" }}>
            {" "}
            'Problem-Setter Intern (Imocha)'{" "}
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
              &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;'2020-2024'{" "}
            </span>
            <span style={{ color: "white" }}> : </span>
            <span style={{ color: "rgb(150, 246, 6)", fontSize: "15px" }}>
              {" "}
              'Madan Mohan Malviya University of Technology, Gorakhpur'{" "}
            </span>
            <br />
            <span style={{ color: "rgb(150, 246, 6)", fontSize: "15px" }}>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; '2018-2019'{" "}
            </span>
            <span style={{ color: "white" }}> : </span>
            <span style={{ color: "rgb(150, 246, 6)", fontSize: "15px" }}>
              {" "}
              'Academic Global School, Gorakhpur'{" "}
            </span>
            <br />
            <span style={{ color: "rgb(150, 246, 6)", fontSize: "15px" }}>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; '2016-2017'{" "}
            </span>
            <span style={{ color: "white" }}> : </span>
            <span style={{ color: "rgb(150, 246, 6)", fontSize: "15px" }}>
              {" "}
              'Sanskriti Public School, Gorakhpur'{" "}
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
            <a href="https://drive.google.com/file/d/1XmnEUf1qUUS3ZJnrtqbJCvxbSrmBv-Kf/view?usp=sharing" style={{ textDecorationnone: "none", fontStyle: "none" }}>
              <span style={{ color: "rgb(150, 246, 6)", fontSize: "15px", textDecoration: "none" }}>
                {" "}
                'Social Network Analysis (NPTEL)'{" "}
              </span>
            </a>
            <span style={{ color: "white" }}>
              {"}"}
            </span>
            <br />

            <span style={{ color: "white" }}>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;   {"{"}
            </span>
            <a href="https://drive.google.com/file/d/1lyrZX-4znjNscohcjzarjYH8CQqpwSmA/view?usp=sharing" style={{ textDecorationnone: "none", fontStyle: "none" }}>
              <span style={{ color: "rgb(150, 246, 6)", fontSize: "15px", textDecoration: "none" }}>
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
              <span style={{ color: "rgb(150, 246, 6)", fontSize: "15px", fontStyle: "none" }}>
                {" "}
                'Software Engineering Virtual Experience (Forage)'{" "}
              </span>
            </a>
            <span style={{ color: "white" }}>
              {"}"}
            </span>
            <br />
            <span style={{ color: "white" }}>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;   {"{"}
            </span>
            <a href="https://drive.google.com/file/d/1k6bCyOJJT0gtukDA1mow7bYSlL444_ax/view?usp=sharing" style={{ textDecorationnone: "none", fontStyle: "none" }}>
              <span style={{ color: "rgb(150, 246, 6)", fontSize: "15px", textDecoration: "none" }}>
                {" "}
                'Signal and Telecom Summer Training'{" "}
              </span>
            </a>
            <span style={{ color: "white" }}>
              {"}"}
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
            &nbsp; &nbsp; &nbsp; &nbsp;skills
            <span style={{ color: "white" }}>{"() {"}</span>
          </span>
          <br />
          <div className="skills">
            <span style={{ color: "blue" }}>
              &nbsp; &nbsp; return<span style={{ color: "white" }}>{" ["}</span>
            </span>
            <br />
            <div className="skill">
              <div className="skill1">
                <h3>HTML</h3>
                  <div className="bar"><span className="html"></span></div>
               
                <h3>CSS</h3>
                  <div className="bar"><span className="css"></span></div>
                
                <h3>JavaScript</h3>
                  <div className="bar"><span className="js"></span></div>
                
                <h3>C++</h3>
                  <div className="bar"><span className="cpp"></span></div>
                
                <h3>Data Structures</h3>
                  <div className="bar"><span className="datstr"></span></div>
                
              </div>
              <div className="skill2">
                <h3>ReactJs</h3>
                  <div className="bar"><span className="react"></span></div>
                
                <h3>NodeJs</h3>
                  <div className="bar"><span className="node"></span></div>
                
                <h3>ExpressJs</h3>
                  <div className="bar"><span className="express"></span></div>
                <h3>MongoDB</h3>
                  <div className="bar"><span className="mongodb"></span></div>
                
                <h3>SQL</h3>
                  <div className="bar"><span className="sql"></span></div>
                
              </div>
            </div>
            <span style={{ color: "white" }}>&nbsp; {"]"}</span>
          </div>
          <br />
          <span style={{ color: "white" }}>
            &nbsp; &nbsp; &nbsp; &nbsp; {"}"}
          </span>
          <br />
          <br />
          <span style={{ color: "yellow" }}>
            &nbsp; &nbsp; &nbsp; &nbsp;codingPlatforms
            <span style={{ color: "white" }}>{"() {"}</span>
          </span>
          <br />

          <span style={{ color: "blue" }}>
            &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; return
            <span style={{ color: "white" }}>{" ["}</span>
          </span>
          <br /><br />
          <div className="code">
            <a href="https://auth.geeksforgeeks.org/user/geetanjalisingh1815/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user" style={{ textDecorationnone: "none", fontStyle: "none" }}>
              <img src={gfg} ></img>
            </a>
            <a href="https://leetcode.com/Geetanjali_singh1815/">
              <img src={leetcode} ></img>
            </a>

            <a href="https://www.hackerrank.com/geetanjalisingh?hr_r=1">
              <img src={hackerrank} ></img>
            </a>
            <a href="https://www.codechef.com/users/geetanjalising">
              <img src={codechef} ></img>
            </a>
          </div>
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
