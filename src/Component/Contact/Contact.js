import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import Footer from "../Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RiShareForwardFill } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false, // animate only once when in view
      mirror: true,
    });
  }, []);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const notify = () => {
    if (email === "" || name === "") toast.warn("Please Fill all Details!");
    else toast.success("Message Sent Successfully!");
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ei4ae0p",
        "template_2bxt63i",
        form.current,
        "sqRPyLodGgrxSMZxA"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="contact-page">
        <p
          style={{
            fontSize: "40px",
            color: "white",
            fontFamily: " 'Dancing Script', cursive",
          }}
          data-aos="fade-up"
        >
          Contact Me....
        </p>
        <p
          style={{
            fontSize: "25px",
            color: "white",
            fontFamily: " 'Dancing Script', cursive",
          }}
          data-aos="fade-up"
        >
          I'm always eager to explore new opportunities and take on exciting
          projects. If you have a project in mind, or just want to say hi, feel
          free to send me a message.
        </p>
        <div className="contact-body" data-aos="zoom-out">
          <form ref={form} onSubmit={sendEmail}>
            <div className="name-email">
              <div className="name">
                <label>Name:</label>
                <br />
                <input
                  name="user_name"
                  onChange={(e) => setname(e.target.value)}
                  required
                />
              </div>

              <div className="email">
                <label>Email: </label>
                <br />
                <input
                  name="user_email"
                  onChange={(e) => setemail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="message">
              <label>Message:</label>
              <textarea
                name="message"
                rows="6"
                placeholder="Type your message here"
                required
              />
            </div>
            <button className="submit-btn" onClick={notify}>
              <RiShareForwardFill
                style={{ marginRight: "7px", scale: "1.4", marginTop: "5px" }}
              />
              Share
            </button>
            <ToastContainer />
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
