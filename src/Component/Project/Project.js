import React, { useState, useEffect } from "react";
import "./Project.css";
import Todo from "./todo.png";
import Puzzle from "./Puzzle.png";
import Android from "./android.jpeg";
import Ecommerce from "./e-commerce.png";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaExternalLinkAlt,
  FaCode,
} from "react-icons/fa";
import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiRedux,
} from "react-icons/si";

import AOS from "aos";
import "aos/dist/aos.css";

const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // animation duration in ms
      once: false, // animate only once when in view
      mirror: true,
    });
  }, []);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(".preview"));

    const handleScroll = () => {
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          element.classList.add("animate");
        } else {
          element.classList.remove("animate");
        }
      });
    };

    // Trigger once on load and on scroll
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", handleScroll);

    // Call immediately in case "load" already happened before mounting
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", handleScroll);
    };
  }, []);

  // for tilt and opacity effect on description hover START
  useEffect(() => {
    const elements = document.querySelectorAll(".tilt-effect");

    const handleMouseMove = (el) => (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const width = el.clientWidth;
      const height = el.clientHeight;

      const rotateX = -10 + (20 * y) / height;
      const rotateY = 10 - (20 * x) / width;

      el.style.transform = `perspective(60000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1)`;
      el.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(58, 63, 163, 0.4), rgba(0, 0, 0, 0.4))`;
    };

    const reset = (el) => () => {
      el.style.transform = `perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)`;
      el.style.background = `radial-gradient(circle at center,   rgba(0, 0, 0, 0.4)), rgba(0, 0, 0, 0.4))`;
    };

    elements.forEach((el) => {
      const move = handleMouseMove(el);
      const leave = reset(el);

      el.addEventListener("mousemove", move);
      el.addEventListener("mouseleave", leave);

      // Clean up on unmount
      el._move = move;
      el._leave = leave;
    });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener("mousemove", el._move);
        el.removeEventListener("mouseleave", el._leave);
      });
    };
  }, []);
  // for tilt and opacity effect on description hover END
  return (
    <>
      <div className="project-heading" data-aos="fade-up">
        <h3>Things I've Worked on</h3>
        <hr />
      </div>
      <div className="project-body">
        <div className="project">
          <div className="project1">
            <div
              style={{
                backgroundImage: `url(${Ecommerce})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="preview"
            >
              <div className="info">
                <h1>It SuitsUhh </h1>
                <hr></hr>

                <a
                  href="https://64ce344cf1f1823342e8aa46--whimsical-wisp-331d33.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt />
                </a>

                <a
                  href="https://github.com/geetanjalising/IT_SUITS_UHH_Full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaCode />
                </a>
              </div>
            </div>
            <div className="tilt-effect description" data-aos="zoom-in-left">
              <h3>Ecommerce-Website</h3>
              <p>
                A responsive e-commerce platform with secure role-based access
                (admin/user), session-persistent cart, and dynamic product
                filtering by category, price, and attributes. Integrated Redux
                for global state management, protected routing for secure
                access, and RESTful APIs with Mongoose models for full CRUD on
                users and products. Built admin dashboards for managing users
                and inventory, enhancing user experience with personalized
                sessions and intuitive UI across devices.
                <div className="tech-used">
                  <span className="items">
                    <span style={{ color: "red", marginRight: "5px" }}>
                      <FaHtml5 />
                    </span>
                    HTML
                  </span>

                  <span className="items">
                    <span style={{ color: "orange", marginRight: "5px" }}>
                      <FaCss3Alt />
                    </span>
                    CSS
                  </span>

                  <span className="items">
                    <span style={{ color: "blue", marginRight: "5px" }}>
                      <SiJavascript />
                    </span>
                    JavaScript
                  </span>

                  <span className="items">
                    <span style={{ color: "green", marginRight: "5px" }}>
                      <FaReact />
                    </span>
                    React.js
                  </span>

                  <span className="items">
                    <span style={{ color: "purple", marginRight: "5px" }}>
                      <FaNodeJs />
                    </span>
                    Node.js
                  </span>

                  <span className="items">
                    <span style={{ color: "pink", marginRight: "5px" }}>
                      <SiExpress />
                    </span>
                    Express
                  </span>

                  <span className="items">
                    <span style={{ color: "cyan", marginRight: "5px" }}>
                      <SiMongodb />
                    </span>
                    MongoDB
                  </span>

                  <span className="items">
                    <span style={{ color: "gold", marginRight: "5px" }}>
                      <SiPostman />
                    </span>
                    Postman
                  </span>
                  <span className="items">
                    <span style={{ color: "gold", marginRight: "5px" }}>
                      <SiRedux />
                    </span>
                    Redux
                  </span>
                </div>
              </p>
            </div>
          </div>

          <div className="project2">
            <div
              style={{
                backgroundImage: `url(${Puzzle})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="preview"
            >
              <div className="info">
                <h1>PuzzleGame</h1>
                <hr></hr>
                <a
                  href="https://64ef94ab6e94e86db746ec29--timely-marigold-234ac2.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt />
                </a>
                <a
                  href="https://github.com/geetanjalising/Treasure-Hunter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaCode />
                </a>
              </div>
            </div>
            <div className=" tilt-effect description" data-aos="zoom-in-right">
              <h3>Treasure-Hunt Game</h3>
              <p>
                A full-stack gamified platform with JWT-based authentication,
                MongoDB session tracking, and auto-progress saving for seamless
                user experiences and persistent gameplay. Implemented secure
                admin access using secret key validation and protected routes
                for monitoring user data and managing platform integrity.
                Developed real-time leaderboard and RESTful APIs with structured
                MongoDB schema, enhancing player engagement and supporting
                scalable onboarding.
              </p>
              <div className="tech-used">
                <span className="items">
                  <span style={{ color: "red", marginRight: "5px" }}>
                    <FaHtml5 />
                  </span>
                  HTML
                </span>

                <span className="items">
                  <span style={{ color: "orange", marginRight: "5px" }}>
                    <FaCss3Alt />
                  </span>
                  CSS
                </span>

                <span className="items">
                  <span style={{ color: "blue", marginRight: "5px" }}>
                    <SiJavascript />
                  </span>
                  JavaScript
                </span>

                <span className="items">
                  <span style={{ color: "green", marginRight: "5px" }}>
                    <FaReact />
                  </span>
                  React.js
                </span>

                <span className="items">
                  <span style={{ color: "purple", marginRight: "5px" }}>
                    <FaNodeJs />
                  </span>
                  Node.js
                </span>

                <span className="items">
                  <span style={{ color: "pink", marginRight: "5px" }}>
                    <SiExpress />
                  </span>
                  Express.js
                </span>

                <span className="items">
                  <span style={{ color: "cyan", marginRight: "5px" }}>
                    <SiMongodb />
                  </span>
                  MongoDB
                </span>
              </div>
            </div>
          </div>

          <div className="project3">
            <div
              style={{
                backgroundImage: `url(${Todo})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="preview"
            >
              <div className="info">
                <h1>Todo-App</h1>
                <hr></hr>
                <a
                  href="https://geetanjalising.github.io/To-Do-App/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt />
                </a>
                <a
                  href="https://github.com/geetanjalising/To-Do-App"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaCode />
                </a>
              </div>
            </div>
            <div className=" tilt-effect description" data-aos="zoom-in-left">
              <h3>To-Do List</h3>
              <p>
                A responsive and intuitive To-Do App using HTML, CSS,
                JavaScript, and React.js to manage daily tasks with add, edit,
                and delete functionality. Implemented real-time task updates and
                local storage for data persistence across sessions, ensuring a
                seamless user experience on all devices. Leveraged React's
                component-based structure to maintain clean code, effective
                state management, and a smooth, user-friendly interface.
              </p>
              <div className="tech-used">
                <span className="items">
                  <span style={{ color: "red", marginRight: "5px" }}>
                    <FaHtml5 />
                  </span>
                  HTML
                </span>

                <span className="items">
                  <span style={{ color: "orange", marginRight: "5px" }}>
                    <FaCss3Alt />
                  </span>
                  CSS
                </span>

                <span className="items">
                  <span style={{ color: "blue", marginRight: "5px" }}>
                    <SiJavascript />
                  </span>
                  JavaScript
                </span>

                <span className="items">
                  <span style={{ color: "green", marginRight: "5px" }}>
                    <FaReact />
                  </span>
                  React.js
                </span>
              </div>
            </div>
          </div>

          {/* <div className="x4">
          <div
            style={{
              backgroundImage: `url(${Android})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="preview"
          >
            <div className="info">
              <h1>Music App</h1>
              <hr></hr>
              <button>
                <a href="https://drive.google.com/file/d/1SPfZkUww_oLKBH7JudrXErNWbvZn55gb/view?usp=drivesdk">
                  Preview
                </a>
              </button>
            </div>
          </div>
          <p className=" tilt-effect description">
            Oragnise your all music of your device at one place with attractive
            and easy to use interface.
          </p>
        </div> */}
        </div>
      </div>
    </>
  );
};

export default Project;
