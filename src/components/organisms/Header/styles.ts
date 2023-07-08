import { Link } from "react-scroll";
import { Link as Redirect } from "react-router-dom";
import { styled } from "styled-components";
import { motion } from "framer-motion";

export const Header = styled.header`
  display: flex;
  box-shadow: 0rem 0.5rem 0.5rem rgba(0, 0, 0, 0.25);
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3vw;
  background-color: ${({ theme }) => theme.colors.background};

  @media screen and (max-width: 768px) {
    padding: 1.5rem 1.5rem;
  }
`;

export const Logo = styled(Redirect)`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SpecialText = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
`;

export const ComputerNavbar = styled.nav`
  ul {
    a,
    div {
      @media screen and (max-width: 768px) {
        display: none;
        overflow: hidden;
      }
    }
  }
`;

export const Navbar = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  list-style-type: none;
  gap: 1rem;
`;

export const NavbarItem = styled(motion.li)`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 2rem;
    @media screen and (min-width: 768px) {
      display: none;
      overflow: hidden;
    }
  }
`;

export const NavbarLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  cursor: pointer;
  font-size: 1.2rem;
`;

export const MobileNav = styled(motion.div)`
  align-items: center;
  box-shadow: -5px 0px 50px 0px rgba(0, 0, 0, 0.75);
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  text-align: center;
  top: 0;
  transition: all 0.3s ease-in-out;
  width: 85%;
  z-index: 1;

  ul {
    flex-direction: column;
  }

  li {
    a {
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 768px) {
    display: none;
    overflow: hidden;
  }
`;

export const MobileNavClose = styled(motion.div)`
  cursor: pointer;
  font-size: 2.5rem;
  position: absolute;
  right: 2rem;
  top: 2rem;
`;
