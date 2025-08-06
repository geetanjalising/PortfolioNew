import React, { useEffect, useRef, useState } from "react";
import pic from "./me.jpeg";
import gfg from "./gfg.png";
import codechef from "./codechef.jpg";
import hackerrank from "./hhackerrank.png";
import leetcode from "./leetcode.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false, // animate only once when in view
      mirror: true,
    });
  }, []);

  return (
    <>
      <section className="about-section">
        <h2 className="about-heading" data-aos="fade-up">
          About Me
          <hr />
        </h2>
        <div className="aboutBody">
          <div className="about-paragraphs">
            <p data-aos="zoom-in-left">
              I’m Geetanjali Singh, a passionate and committed software
              developer who enjoys building meaningful digital products that are
              both functional and user-friendly. My development journey so far
              has been shaped by a strong foundation in full-stack application
              development and real-time interactive gaming, but what truly
              defines my approach is a continuous drive to learn, grow, and
              contribute in impactful ways.
            </p>
            <p data-aos="zoom-in-left">
              One of the areas I take the most pride in is my strength in data
              structures and algorithmic problem-solving. Over the years, I’ve
              dedicated consistent time to sharpening these skills, solving
              1000+ problems on GeeksforGeeks, 500+ problems on LeetCode, and
              earning a 5-star rating in C and C++ and a 4-star rating in
              Problem Solving on HackerRank. This practice has not only improved
              my coding fluency but also enhanced my analytical thinking and the
              ability to write optimized, scalable code under constraints—skills
              that naturally carry over into my work as a developer.
            </p>
            <p data-aos="zoom-in-left">
              I believe that building great software requires more than
              technical skill—it demands thoughtful communication,
              collaboration, and the ability to adapt quickly to changing goals.
              My experience working on diverse projects has taught me how to
              remain focused and organized under tight timelines, while still
              being open to feedback and flexible in my approach. I value team
              environments where knowledge is shared openly and where challenges
              are seen as opportunities to grow.
            </p>
            <p data-aos="zoom-in-left">
              Outside of work, I’m always exploring ways to improve—not just as
              a developer, but as a person. Whether it’s learning new
              technologies, sharing knowledge with others, or engaging with the
              tech community, I approach everything with curiosity and care. I
              strive to bring not just skill, but sincerity and intention to
              everything I work on. I’m excited about collaborating on projects
              that matter and look forward to contributing to teams that value
              growth, innovation, and purpose.
            </p>
            <p>
              Over the time I've specialized in many technologies some of them
              are...
            </p>
            <div className="skillBody">
              <div className="subpart">
                <ul>
                  <li data-aos="fade-left">HTML/CSS</li>
                  <li data-aos="fade-left">JavaScript</li>
                  <li data-aos="fade-left">React.js</li>
                  <li data-aos="fade-left">Node.js</li>
                  <li data-aos="fade-left">Express.js</li>
                  <li data-aos="fade-left">C/C++</li>
                  <li data-aos="fade-left">Java</li>
                  <li data-aos="fade-left">MongoDB</li>
                  <li data-aos="fade-left">SQL</li>
                </ul>
              </div>

              {/* CS Fundamentals */}
              <div className="subpart">
                <ul>
                  <li data-aos="fade-left">Data Structures & Algorithms</li>
                  <li data-aos="fade-left">
                    Object-Oriented Programming (OOP)
                  </li>
                  <li data-aos="fade-left">
                    Database Management Systems (DBMS)
                  </li>
                  <li data-aos="fade-left">Software Engineering</li>
                  <li data-aos="fade-left">MongoDB Atlas</li>
                  <li data-aos="fade-left">Git/GitHub</li>
                  <li data-aos="fade-left">Postman</li>
                  <li data-aos="fade-left">VSCode</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="image-container">
            <img data-aos="zoom-in" src={pic} alt="portrait" />
          </div>
        </div>
      </section>
      {/* <div className="main">
        <div className="about">
          <div className="head">
            <h1>About/{">"}</h1>{" "}
          </div>
          <img src={pic} alt="portrait" />
          <br />
          <br />
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
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; {"{"}
            </span>
            <a
              href="https://drive.google.com/file/d/1XmnEUf1qUUS3ZJnrtqbJCvxbSrmBv-Kf/view?usp=sharing"
              style={{ textDecorationnone: "none", fontStyle: "none" }}
            >
              <span
                style={{
                  color: "rgb(150, 246, 6)",
                  fontSize: "15px",
                  textDecoration: "none",
                }}
              >
                {" "}
                'Social Network Analysis (NPTEL)'{" "}
              </span>
            </a>
            <span style={{ color: "white" }}>{"}"}</span>
            <br />

            <span style={{ color: "white" }}>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; {"{"}
            </span>
            <a
              href="https://drive.google.com/file/d/1lyrZX-4znjNscohcjzarjYH8CQqpwSmA/view?usp=sharing"
              style={{ textDecorationnone: "none", fontStyle: "none" }}
            >
              <span
                style={{
                  color: "rgb(150, 246, 6)",
                  fontSize: "15px",
                  textDecoration: "none",
                }}
              >
                {" "}
                'Future ready talent virtual internship (Microsoft,
                FutureSkills, AICTE)'{" "}
              </span>
            </a>
            <span style={{ color: "white" }}>{"}"}</span>
            <br />
            <span style={{ color: "white" }}>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; {"{"}
            </span>
            <a href="https://drive.google.com/file/d/1c57PEAFGIZgiJA8NqmHt6CSCakyr2IiQ/view?usp=sharing">
              <span
                style={{
                  color: "rgb(150, 246, 6)",
                  fontSize: "15px",
                  fontStyle: "none",
                }}
              >
                {" "}
                'Software Engineering Virtual Experience (Forage)'{" "}
              </span>
            </a>
            <span style={{ color: "white" }}>{"}"}</span>
            <br />
            <span style={{ color: "white" }}>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; {"{"}
            </span>
            <a
              href="https://drive.google.com/file/d/1k6bCyOJJT0gtukDA1mow7bYSlL444_ax/view?usp=sharing"
              style={{ textDecorationnone: "none", fontStyle: "none" }}
            >
              <span
                style={{
                  color: "rgb(150, 246, 6)",
                  fontSize: "15px",
                  textDecoration: "none",
                }}
              >
                {" "}
                'Signal and Telecom Summer Training'{" "}
              </span>
            </a>
            <span style={{ color: "white" }}>{"}"}</span>

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
                <div className="bar">
                  <span className="html"></span>
                </div>

                <h3>CSS</h3>
                <div className="bar">
                  <span className="css"></span>
                </div>

                <h3>JavaScript</h3>
                <div className="bar">
                  <span className="js"></span>
                </div>

                <h3>C++</h3>
                <div className="bar">
                  <span className="cpp"></span>
                </div>

                <h3>Data Structures</h3>
                <div className="bar">
                  <span className="datstr"></span>
                </div>
              </div>
              <div className="skill2">
                <h3>ReactJs</h3>
                <div className="bar">
                  <span className="react"></span>
                </div>

                <h3>NodeJs</h3>
                <div className="bar">
                  <span className="node"></span>
                </div>

                <h3>ExpressJs</h3>
                <div className="bar">
                  <span className="express"></span>
                </div>
                <h3>MongoDB</h3>
                <div className="bar">
                  <span className="mongodb"></span>
                </div>

                <h3>SQL</h3>
                <div className="bar">
                  <span className="sql"></span>
                </div>
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
          <br />
          <br />
          <div className="code">
            <a
              href="https://auth.geeksforgeeks.org/user/geetanjalisingh1815/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user"
              style={{ textDecorationnone: "none", fontStyle: "none" }}
            >
              <img src={gfg}></img>
            </a>
            <a href="https://leetcode.com/Geetanjali_singh1815/">
              <img src={leetcode}></img>
            </a>

            <a href="https://www.hackerrank.com/geetanjalisingh?hr_r=1">
              <img src={hackerrank}></img>
            </a>
            <a href="https://www.codechef.com/users/geetanjalising">
              <img src={codechef}></img>
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
      </div> */}
    </>
  );
};

export default About;
