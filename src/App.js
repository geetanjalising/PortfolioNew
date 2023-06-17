import "./App.css"
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Project from "./Component/Project/Project";
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useEffect, useState, useRef } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import AnimatedCursor from "react-animated-cursor"


function App() {
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  const toTop = useRef();

  const [showHamb, setHamb] = useState(false);

  const scrollHandler = (eleRef) => {
    console.log(eleRef);
    window.scrollTo({ top: eleRef.current.offsetTop, behavior: "smooth" });
  };

  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY > 500) {
        // alert("yo");
        setShow(true);
      }
      else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = (eleRef) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };



  return (
    <>
     <header>
          <div className={showHamb?"mobileview":"nav"}>
          <ul>
            <li onClick={() => scrollHandler(section1)}>Start</li>
            <li onClick={() => scrollHandler(section2)}>About</li>
            <li onClick={() => scrollHandler(section3)}>Work</li>
            <li onClick={() => scrollHandler(section4)}>Contact</li>
          </ul>

    </div>
      </header>

      <div ref={section1} className="sec1"><Home /></div>

      <div ref={section2} className="sec2"><About /></div>

      <div ref={section3} className="sec3" ><Project /></div>

      <div ref={section4} className="sec4"><Contact /></div>
      <div style={{
          position: "fixed",
          right: 10,
          bottom: 20,
          color: "green",
          marginRight: 15,
          cursor: "pointer"
        }}
        onClick={() => scrollToTop(toTop)}>
        {show && <h1><FaArrowAltCircleUp /></h1>}
      </div>
      <div className="Hamburger">
          <a href="#" onClick={() => setHamb(!showHamb)}>
            <GiHamburgerMenu />
          </a>
        </div>
        <AnimatedCursor 
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "white"
        }}
        outerStyle={{
          border: "3px solid white"
        }}
        />
    </>
  );
}

export default App;
