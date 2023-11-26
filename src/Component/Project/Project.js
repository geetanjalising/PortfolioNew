import React, { useState, useEffect } from 'react';
import "./Project.css";
import Todo from "./todo.png";
import Puzzle from "./Puzzle.png";
import Android from "./android.jpeg";
import Ecommerce from "./e-commerce.png";

const Project = () => {
  const [animatedElements, setAnimatedElements] = useState([]);

  useEffect(() => {
    // Initialize the list of animated elements
    const elements = document.querySelectorAll('.project1');
    setAnimatedElements(Array.from(elements));
  }, []);

  const handleScroll = () => {
    animatedElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        element.classList.add('animate');
      } else {
        element.classList.remove('animate');
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animatedElements]);

  return (
    <div className='bd'>
      <div className='heading'><h1>Work/{">"}</h1></div>
        <div className='project'>

        <div className='x'>
            <div style={{ backgroundImage: `url(${Ecommerce})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className='project1'>
              <div className='info'>
                <h1>It Suits You </h1>
                <hr></hr>
                <button><a href="https://64ce344cf1f1823342e8aa46--whimsical-wisp-331d33.netlify.app/">Preview</a></button>
              </div>
            </div>
            <p>An e-commerce platform offers an extensive selection of products, empowering users to effortlessly explore, add, delete, and customize their shopping carts. Access to the cart is exclusive to registered users, ensuring a seamless shopping experience.Moreover, the admin panel empowers administrators to manage user details and items efficiently. The project seamlessly integrates MERN technologies, including HTML, CSS, JavaScript, ReactJs, Express, MongoDB, NodeJs, Redux, Postman, Material UI, and Context APIs. </p>
          </div>

          <div className='x'>
            <div style={{ backgroundImage: `url(${Todo})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className='project1'>
              <div className='info'>
                <h1>Todo-App</h1>
                <hr></hr>
                <button><a href='https://geetanjalising.github.io/To-Do-App/'>Preview</a></button>
              </div>
            </div>
            <p>Todo-app is used to maintain our day-to-day tasks by Adding, Deleting, Editing, and Storing tasks that we have to do.Meticulously crafted using HTML, CSS, JavaScript and ReactJs.</p>
          </div>

          <div className='x'>
            <div style={{ backgroundImage: `url(${Puzzle})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className='project1'>
              <div className='info'>
                <h1>PuzzleGame</h1>
                <hr></hr>
                <button><a href='https://64ef94ab6e94e86db746ec29--timely-marigold-234ac2.netlify.app/'>Preview</a></button>
              </div>
            </div>
            <p>A Treasure Hunt game where users can register, log in, and resume their adventures from the exact point they left off. Admin privileges come with the ability to delete users.Admin login could be possible only with a Secret Key. The project leverages HTML, CSS, JavaScript, ReactJs for the frontend, and NodeJs and MongoDB for the backend, ensuring a seamless and thrilling gaming experience.</p>
          </div>

          <div className='x'>
            <div style={{ backgroundImage: `url(${Android})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className='project1'>
              <div className='info'>
                <h1>Music App</h1>
                <hr></hr>
                <button><a href="https://drive.google.com/file/d/1SPfZkUww_oLKBH7JudrXErNWbvZn55gb/view?usp=drivesdk">Preview</a></button>
              </div>
            </div>
            <p>Oragnise your all music of your device at one place with attractive and easy to use interface.</p>
          </div>

          

        </div>
    </div>
  );
};

export default Project;
