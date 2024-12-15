import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const ProjectsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  height: 100vh;
  background: linear-gradient(252deg, #cedae5 0%, #84bdd8 100%);
  overflow-y: auto; /* Enable vertical scrolling */
  overflow-x: hidden; /* Prevent horizontal scrolling */
  position: relative;
  scroll-behavior: smooth; /* Smooth scrolling effect */
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

const ProjectCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  margin: 1rem;
  width: 350px;
  height: 500px;
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
    margin: 15px 0px;
  }

  span {
    font-weight: bold;
    color: #1f4068;
  }

  @media (max-width: 1592px) {
    margin-top: 10vh;
    width: 350px;
    height: 500px;
  }
  @media (max-width: 370px) {
    margin-top: 10vh;
    width: 600px;
    height: 630px;
  }
`;

const ProjectsPage = () => {
  const projectDetails = [
    {
      title: "Hotel Management System",
      description: "Developed a hotel management system using the MERN stack, enabling users to search for hotels and book rooms easily. The system includes a secure user authentication mechanism using JWT and Bcrypt.js. Admins can manage hotels, rooms, and reservations through a dedicated dashboard. Integrated Cloudinary for image uploads and used MUI for responsive. The application ensures efficient state management with Redux toolkit.",
      technologies: "React.js, Redux, MUI, Axios, Node.js, Express.js, MongoDB, Mongoose, JWT, Bcrypt.js, Cloudinary, Dotenv.",
      project_link: "https://hotel-management-frontend-t5ry.onrender.com"
    },
    {
      title: "BloggingHuB Web",
      description: "Developed using React, with a focus on responsive and dynamic UI. Utilized libraries such as Material-UI, Ant Design, and styled-components for styling and components. Implemented routing withReact Router DOM. Integrated Cloudinary for image uploading and updation, and used Axios for APIinteractions. Built on Node.js with Express.js to handle server-side logic. Utilized MongoDB with Mongoose for data storage, JWT and bcryptjs. Enabled functionality for search, edit, and pagination and environment management with dotenv",
      technologies: "Cloudinary, Material-UI, Ant design, react-toastify, Bcryptjs, jsonwebtoken and reactrouter-dom",
    },
    {
      title: "E-commerce Store",
      description: "Developed a small e-commerce platform using the MERN stack. Implemented product listings with filtering options and dynamic search functionality. Enabled secure user registration/login and cart management. Integrated Stripe for payment processing and order completion. Utilized Redux for state management and MUI for a responsive design.",
      technologies: "Product filtering, cart management, JWT authentication, Redux for state management, and Stripe payment integration.",
    },
    {
      title: "Doctor Appointment System",
      description: "Developed a comprehensive doctor appointment system using the MERN stack. Implemented user functionalities for booking, viewing, and managing appointments. Created doctor profiles displaying specialties, experience, and availability. Integrated JWT for secure authentication and authorization of users and doctors. Designed an admin dashboard for managing appointments, users, and doctor details.",
      technologies: "User registration/login, appointment scheduling, doctor profiles, and admin dashboard for management"
    },
  ];

  return (
    <ProjectsContainer>
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

      {/* Project Cards */}
      {projectDetails.map((project, index) => (
        <ProjectCard
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <h3>{project?.title}</h3>
          <p>
            <span>Key Features: {project?.technologies}</span>
          </p>
          <p>{project?.description}</p>
          <a href={project?.project_link} target="_blank" rel="noreferrer" style={{ padding: "10px 20px" }}>view project</a>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
};

export default ProjectsPage;
