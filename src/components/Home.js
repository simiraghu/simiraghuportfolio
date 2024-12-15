import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Typed from 'typed.js';
import airplaneVideo from '../assets/airplane.mp4';
import resume from '../assets/simiraghu.pdf';

// Styled components for full-screen, responsive, and unique layout
const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  background-color: #f0f8ff;
  background: linear-gradient(252deg, #cedae5 0%, #84bdd8 100%); /* Darker gradient */
  height: 100vh; /* Subtract navbar height */
  margin: 0; /* Remove default margin */
  overflow: auto; /* Prevent scroll bar */
  scroll: smooth;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    text-align: left;
  }
`;

const LeftSection = styled(motion.div)`
  flex: 1;
  margin-bottom: 40px;
  color: #333;
  max-width: 800px;
  text-align: center;
  
  h2 {
    font-size: 2.5rem;
    color: #1f4068;
    margin-bottom: 10px;
    font-family: 'Roboto', sans-serif;
  }

  p {
    font-size: 1.2rem;
    color: #555;
    line-height: 1.8;
    font-family: 'Open Sans', sans-serif;
    max-width: 500px;
  }

  @media (min-width: 768px) {
    margin-right: 40px;
    text-align: left;
  }
`;

const RightSection = styled(motion.div)`
  flex: 1;
  text-align: center;
  position: relative;
  margin-top: 25vh;
  
  img {
    width: 250px; /* Adjusted size */
    height: 250px; /* Adjusted size */
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  img:hover {
    transform: scale(1.1); /* Scale effect */
    box-shadow: 0 8px 22px rgba(0, 0, 0, 1.3);
  }

  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const MotionCircle = styled(motion.div)`
  position: absolute;
  top: 10%;
  left: 10%;
  width: 150px; /* Adjust the size of the circle */
  height: 150px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%; /* Ensures the circular shape */
  overflow: hidden; /* Clips the video to fit inside the circle */
  animation: move 10s infinite linear;

  @keyframes move {
    0% {
      top: 10%;
      left: 10%;
    }
    50% {
      top: 60%;
      left: 60%;
    }
    100% {
      top: 10%;
      left: 10%;
    }
  }

  video {
    width: 100%; /* Ensures the video fills the circle */
    height: 100%; /* Ensures proper scaling */
    object-fit: cover; /* Keeps the aspect ratio intact */
  }
`;

const ResumeButton = styled.a`
  display: inline-block;
  padding: 12px 24px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  text-decoration: none;
  background: linear-gradient(45deg, #6a11cb, #2575fc); /* Gradient colors */
  border-radius: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  margin-top: 4vh;
  margin-bottom: 10px

  &:hover {
    background: linear-gradient(45deg, #2575fc, #6a11cb); /* Reverse gradient */
    transform: translateY(-3px); /* Subtle lift effect */
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
  }

  &:active {
    transform: translateY(1px); /* Press effect */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
    `
  ;

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Hello, I'm Simi Raghu", "MERN STACK developer", "Frontend Developer", "Node.js Developer",],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy(); // Cleanup
    };
  }, []);


  return (
    <AboutContainer>

      <RightSection
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <MotionCircle />
        {/* Replace image with the video */}
        <video
          src={airplaneVideo}
          autoPlay
          loop
          muted
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            rotate: "-12deg"
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.1)";
            e.target.style.boxShadow = "0 8px 22px rgba(0, 0, 0, 1.3)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
          }}
        ></video>

      </RightSection>

      <LeftSection
        initial={{ opacity: 0, x: -100, marginLeft: '5vw' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 ref={typedRef}> </h2>
        <p>
          Hi, I'm Simi Raghu, a passionate MERN Stack Developer. I enjoy
          building dynamic and responsive web applications that provide seamless
          user experiences. With a deep interest in technology and design, I aim
          to create applications that are not only functional but visually
          stunning as well. Let's build something amazing together!
        </p>
        <ResumeButton href={resume} download>
          Download Resume
        </ResumeButton>
      </LeftSection>


    </AboutContainer>
  );
};

export default Home;
