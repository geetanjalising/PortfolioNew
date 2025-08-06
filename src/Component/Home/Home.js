import React, { useEffect, useRef } from "react";
import "./Home.css";
import Typical from "react-typical";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import ParticlesComponent from "./particles";
import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";

const Home = () => {
  const refItem = useRef();
  const isInview = useInView(refItem, { once: true });
  useEffect(() => {
    console.log(isInview);
  }, [isInview]);
  return (
    <>
      <div className="body">
        <ParticlesComponent id="particles" />
        <div ref={refItem}>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.5, delay: 0.25 }}
          >
            <div className="intro">
              <div className="icons">
                <a href="https://drive.google.com/file/d/1N2wCyT4xoXaJEhv2YJOhiway7xpaV2hm/view?usp=sharing">
                  <button className="resume">Resume</button>
                </a>
              </div>

              <h1>Hi, my name is Geetanjali Singh</h1>
              <div className="d">
                <div className="d1">i am &nbsp; </div>
                <div className="d2">
                  <Typical
                    className="typical-wrapper"
                    loop={Infinity}
                    steps={[
                      "Coding Enthusiast",
                      10000,
                      "MERN Developer",
                      10000,
                      "Problem Solver",
                      10000,
                    ]}
                  />
                </div>
              </div>
              <p>
                I'm a Software Developer with 1+ year of experience building
                clean, responsive, and user-focused web applications. I have a
                strong command of frontend technologies like HTML, CSS,
                JavaScript and React.js. I’m also familiar with backend
                development using Node.js, Express.js, MongoDB, and RESTful
                APIs, with a growing interest in microservices and scalable
                system design. Backed by a solid academic foundation in Data
                Structures, DBMS, OS, and OOP, and proficient in C++ and Java,
                I’m continuously evolving as a full-stack developer, focused on
                creating impactful, high-performance solutions.
              </p>
             <a href="mailto:geetanjalisingh1815@gmail.com">
  <button className="offset">Contact Me</button>
</a>
 
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
