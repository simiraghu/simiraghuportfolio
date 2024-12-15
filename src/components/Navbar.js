import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Navbar Container
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  background: #1f4068;
  color: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;

// Brand/Logo Section
const Logo = styled(motion.div)`
  font-size: 2rem; /* Larger font for prominence */
  font-weight: bold;
  font-family: 'Poppins', sans-serif; /* Modern font style */
  letter-spacing: 3px; /* Spread letters for a sleek look */
  color: #ffdd57; /* Bright standout color */
  background: linear-gradient(45deg, #29cbd8, #d88409); /* Gradient text */
  -webkit-background-clip: text; /* Clip background to text */
  -webkit-text-fill-color: transparent; /* Make text transparent */
  cursor: pointer;

  &:hover {
    scale: 1.1; /* Slight zoom on hover */
    transition: all 0.3s ease-in-out;
  }
`;


// Navbar Links Section
const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: none; /* Hide links on small screens */
  }
`;


// Mobile Menu Icon (Hamburger)
const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  flex-direction: column;
  gap: 5px;
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Line = styled.div`
  width: 25px;
  height: 3px;
  background: #fff;
  border-radius: 5px;
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
  right: 0;
  background: #1f4068;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 40px;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const navigate = useNavigate()

  return (
    <NavbarContainer>
     <Logo
  initial={{ x: -100 }}
  animate={{ x: 0 }}
  transition={{ type: "spring", stiffness: 100 }}
  onClick={() => navigate("/")}
>
  MyPortfolio
</Logo>


      {/* Navbar Links */}
      <NavLinks>
        <div whileHover={{ scale: 1.1 }} onClick={() => navigate('/')} >
          Home
        </div>
        <div whileHover={{ scale: 1.1 }} onClick={() => navigate('/education')} >
          Education
        </div>
        <div whileHover={{ scale: 1.1 }} onClick={() => navigate('/skills')} >
          Skills
        </div>
        <div whileHover={{ scale: 1.1 }} onClick={() => navigate('/project')} >
          Projects
        </div>
        <div whileHover={{ scale: 1.1 }} onClick={() => navigate('/contact')}>
          Contact
        </div>
      </NavLinks>

      {/* Mobile Menu Icon */}
      <MenuIcon onClick={toggleMenu}>
        <Line />
        <Line />
        <Line />
      </MenuIcon>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen}>
        <div whileHover={{ scale: 1.1 }} onClick={() => { toggleMenu(); navigate('/') }} >
          Home
        </div>
        <div whileHover={{ scale: 1.1 }} onClick={() => { toggleMenu(); navigate('/education') }} >
          Education
        </div>
        <div whileHover={{ scale: 1.1 }} onClick={() => { toggleMenu(); navigate('/skills') }} >
          Skills
        </div>
        <div whileHover={{ scale: 1.1 }} onClick={() => { toggleMenu(); navigate('/project') }} >
          Projects
        </div>
        <div whileHover={{ scale: 1.1 }} onClick={() => { toggleMenu(); navigate('/contact') }}>
          Contact
        </div>
      </MobileMenu>
    </NavbarContainer>
  );
};

export default Navbar;
