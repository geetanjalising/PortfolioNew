import React, { useEffect, useRef, useState } from "react";
import pic from "./me.jpeg";
import gfg from "./gfg.png";
import codechef from "./codechef.png";
import hackerrank from "./hhackerrank.png";
import leetcode from "./leetcode.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";
import { RxTriangleRight } from "react-icons/rx";

const skills1 = [
  "HTML/CSS",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "C/C++",
  "Java",
  "MongoDB",
];

const skills2 = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Database Management Systems",
  "Software Engineering",
  "MongoDB Atlas",
  "Git/GitHub",
  "Postman",
  "SQL",
];
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
              <div data-aos="zoom-in-left">
                <a
                  href="https://auth.geeksforgeeks.org/user/geetanjalisingh1815/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={gfg} alt="gfg"></img>
                </a>
                <a
                  href="https://leetcode.com/Geetanjali_singh1815/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={leetcode} alt="leetcode"></img>
                </a>

                <a
                  href="https://www.hackerrank.com/geetanjalisingh?hr_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={codechef} alt="hackerrank"></img>
                </a>
                <a
                  href="https://www.codechef.com/users/geetanjalising"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={hackerrank} alt="codechef"></img>
                </a>
              </div>
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
            <p data-aos="zoom-in-left">
              Over the time I've specialized in many technologies some of them
              are...
            </p>
            <div className="skillBody">
              <div className="subpart">
                <ul>
                  {skills1.map((skill, index) => (
                    <li data-aos="fade-left" key={index}>
                      <RxTriangleRight className="bullet-icon" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="subpart">
                <ul>
                  {skills2.map((skill, index) => (
                    <li data-aos="fade-left" key={index}>
                      <RxTriangleRight className="bullet-icon" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="image-container">
            <img data-aos="zoom-in" src={pic} alt="portrait" />
          </div>
        </div>
      </section>
   
    </>
  );
};

export default About;
