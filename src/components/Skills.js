import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const SkillsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  min-height: 100vh; /* Changed from fixed height to min-height */
  background: linear-gradient(252deg, #cedae5 0%, #84bdd8 100%);
  overflow-y: auto; /* Enable vertical scrolling */
  position: relative;

  /* Add padding for smoother scrolling */
  padding-bottom: 4rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const AnimatedCircle = styled(motion.div)`
  position: absolute;
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  z-index: 1;
`;

const SkillCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  margin: 1rem;
  width: 150px;
  height: 200px;
  text-align: center;
  z-index: 2;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 1.3);
  }

  img {
    width: 60px;
    height: 60px;
    margin-bottom: 10px;
  }

  h4 {
    font-size: 1.2rem;
    color: #1f4068;
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 160px;
    margin-top: 7vh;

    img {
      width: 50px;
      height: 50px;
    }

    h4 {
      font-size: 1rem;
    }
  }

  @media (max-width: 570px) {
    width: 120px;
    height: 160px;
    margin-top: 10vh;

  }
`;

const SkillsPage = () => {

  const skills = [
    { name: "HTML", logo: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
    { name: "CSS", logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
    { name: "JavaScript", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
    { name: "React", logo: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
    { name: "Node.js", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png" },
    { name: "MongoDB", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpkIzvHUXWpkgEuBYVJMLiePtd-I0kHDDyJw&s" },
    { name: "Git Hub", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHrIWWBThuYQJM6p2n9JupCkfxKuFD-gDzVA&s" },
    { name: "React-Redux-toolkit", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7xzKSS_GY1r4_rg4zyaU8UuD7v2NsOq7WIw&s" },
  ];

  return (
    <SkillsContainer>
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

      {/* Skill Cards */}
      {skills.map((skill, index) => (
        <SkillCard
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <img src={skill.logo} alt={skill.name} />
          <h4>{skill.name}</h4>
        </SkillCard>
      ))}
    </SkillsContainer>
  );
};

export default SkillsPage;
