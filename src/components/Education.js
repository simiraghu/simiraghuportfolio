import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const EducationContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  height: 100vh;
  background: linear-gradient(252deg, #cedae5 0%, #84bdd8 100%);
  overflow: auto;
  position: relative;
`;

const AnimatedCircle = styled(motion.div)`
  position: absolute;
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  z-index: 1;

  @keyframes move {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(50px, 50px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;

const EducationCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  margin-top: 5rem;
  width: 300px;
  text-align: center;
  z-index: 2;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 22px rgba(0, 0, 0, 1.3);
  }

  h3 {
    font-size: 1.5rem;
    color: #1f4068;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #555;
    margin: 5px 0;
  }

  span {
    font-weight: bold;
    color: #1f4068;
  }
`;

const EducationPage = () => {
    const educationDetails = [
        {
            title: "Bachelor of Science",
            description: "Computer Science",
            institution: "Barkatullah University",
            duration: "2020 - 2023",
            grade: "72.79%"
        },
        {
            title: "Higher Secondary School (12th)",
            description: "Mathematics",
            institution: "R. V. M. School",
            duration: "2019 - 2020",
            grade: "86.6%"
        },
        {
            title: "Secondary School (10th)",
            description: "",
            institution: "R. V. M. School",
            duration: "2017 - 2018",
            grade: "86.8%"
        },
    ];

    return (
        <EducationContainer>
            {/* Animated Circles */}
            <AnimatedCircle
                animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
                style={{ top: "10%", left: "20%" }}
            />
            <AnimatedCircle
                animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
                style={{ bottom: "10%", right: "20%" }}
            />

            {/* Education Cards */}
            {educationDetails.map((edu, index) => (
                <EducationCard
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                    <h3>{edu?.title}</h3>
                    <p>{edu?.description}</p>
                    <p>
                        <span>{edu?.institution}</span>
                    </p>
                    <p>{edu?.duration}</p>
                    <p>{edu?.grade}</p>
                </EducationCard>
            ))}
        </EducationContainer>
    );
};

export default EducationPage;
