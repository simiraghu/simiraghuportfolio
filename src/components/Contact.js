import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  height: 100vh;
  background: linear-gradient(252deg, #cedae5 0%, #84bdd8 100%);
  overflow: hidden;
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

const ContactCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  margin: 1rem;
  width: 300px;
  text-align: center;
  z-index: 2;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 22px rgba(0, 0, 0, 1.3);
  }

  h4 {
    font-size: 1.5rem;
    color: #1f4068;
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #555;
  }

  a {
    text-decoration: none;
    color: #1f4068;
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const ContactPage = () => {
  const contacts = [
    {
      title: "Email",
      value: "simiraghu2004@gmail.com",
      link: "mailto:simiraghu2004@gmail.com",
      icon: <FaEnvelope />,
    },
    {
      title: "GitHub",
      value: "go to GitHub",
      link: "https://github.com/simiraghu",
      icon: <FaGithub />,
    },
    {
      title: "LinkedIn",
      value: "go to LinkedIn",
      link: "https://www.linkedin.com/in/simi-raghu-861561246/",
      icon: <FaLinkedin />,
    },
  ];

  return (
    <ContactContainer>
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

      {contacts.map((contact, index) => (
        <ContactCard
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <h4>
            {contact.icon} {contact.title}
          </h4>
          {contact.link ? (
            <a href={contact.link} target="_blank" rel="noopener noreferrer">
              {contact.value}
            </a>
          ) : (
            <p>{contact.value}</p>
          )}
        </ContactCard>
      ))}
    </ContactContainer>
  );
};

export default ContactPage;
