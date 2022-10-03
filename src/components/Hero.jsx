import React, { useEffect, useState, useRef } from "react";

// for images
import title from "../images/hero/cryptoisland.webp";
import vineone from "../images/hero/Vines1.webp";
import vinetwo from "../images/hero/Vines2.webp";
import cloudtwo from "../images/hero/cloud2.webp";


// gsap imports
import gsap from "gsap";

import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { motion } from "framer-motion";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);

  const fadeIn = (element) => {
    gsap.from(element, {
      scale: 0.2,
    });
    gsap.to(element, {
      scale: 1,
      duration: 2,
      ease: "elastic",
      stagger: {
        amount: 0.3,
      },
    });
  };

  const fadeInVines = (element) => {
    gsap.from(element, {
      y: -500,
    });
    gsap.to(element, {
      y: 0,
      duration: 2,
      delay: 0.2,
      ease: "bounce",
    });
  };

  function parallax() {
    gsap.set(".grass-anim", {
      scale: 0.5,
    });
    gsap.to(".grass-anim", {
      scrollTrigger: {
        trigger: ".grass-anim",
        start: "-20% 20%",
        scrub: 1,
      },
      scale: 1.5,
    });
  }

  function parallaxCloud() {
    gsap.set("#cloud-anim", {
      x: -250,
    });
    gsap.to("#cloud-anim", {
      scrollTrigger: {
        trigger: "#cloud-anim",
        start: "top top",
        markers: false,
        scrub: 5,
      },
      x: 300,
    });
  }

  function parallaxCloud2() {
    gsap.set("#cloud-anim-two", {
      x: 250,
    });
    gsap.to("#cloud-anim-two", {
      scrollTrigger: {
        trigger: "#cloud-anim-two",
        start: "top top",
        markers: false,
        scrub: 5,
      },
      x: -100,
    });
  }

  useEffect(() => {
    const id = "section-hero";
    const element = document.getElementById(id);

    if (element) {
      parallax();
      parallaxCloud();
      parallaxCloud2();
    }

    fadeIn(".fadeIn");
    fadeInVines(".fadeInVines");
  }, []);

  return (
    <>
      <motion.div
        className="flex justify-center items-center 
        py-12 h-[120vh] w-[100%] z-40
        bg-[url('images/backgrounds/bg-hero.webp')] bg-cover bg-center bg-no-repeat"
        // ref={sectionRef}
      >
        <div className="hero-content h-[120vh] w-[100%]" id="section-hero">
    
          <div className="fadeIn select-none z-[5]">
            <img
              className="w-[800px] floating select-none"
              id="crypto-island"
              src={title}
              alt="/"
            />
          </div>
          {/* vines */}

          <div className="absolute top-0 left-0 z-[3] grass-anim">
            <img
              className="h-[250px] sm:h-[350px] fadeInVines"
              src={vineone}
              alt="/"
            />
          </div>

          <div className="absolute top-0 right-0 z-[3] grass-anim">
            <img
              className="fadeInVines w-[150px] sm:w-[250px]"
              src={vinetwo}
              alt="/"
            />
          </div>

          {/* clouds */}

          <div className="absolute top-20 left-[-10%] z-[1] floating">
            <img className="w-auto" id="cloud-anim" src={cloudtwo} alt="/" />
          </div>

          <div className="absolute top-20 right-[-10%] z-[2] floating">
            <img
              className="w-auto"
              id="cloud-anim-two"
              src={cloudtwo}
              alt="/"
            />
          </div>
        </div>

        {/* guma nucleos */}
      </motion.div>
    </>
  );
};

export default Hero;
