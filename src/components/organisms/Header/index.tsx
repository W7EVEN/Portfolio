import { useState } from "react";
import * as S from "./styles";
import { FiMenu, FiX } from "react-icons/fi";

type HeaderProps = {
  switchElement: JSX.Element;
};

export const Header = ({ switchElement }: HeaderProps) => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <S.Header>
      <S.Logo to="/">
        W<S.SpecialText>7</S.SpecialText>
        EVEN
      </S.Logo>

      <S.ComputerNavbar>
        <S.Navbar>
          <S.NavbarItem>
            <S.NavbarLink smooth={true} spy={true} to="main">
              Home
            </S.NavbarLink>
          </S.NavbarItem>
          <S.NavbarItem>
            <S.NavbarLink smooth={true} spy={true} to="qualities">
              Habilidades
            </S.NavbarLink>
          </S.NavbarItem>
          <S.NavbarItem>
            <S.NavbarLink smooth={true} spy={true} to="projects">
              Projetos
            </S.NavbarLink>
          </S.NavbarItem>
          <S.NavbarItem>
            <S.NavbarLink smooth={true} spy={true} to="contact">
              Contatos
            </S.NavbarLink>
          </S.NavbarItem>
          <S.NavbarItem>{switchElement}</S.NavbarItem>
          <S.NavbarItem
            onClick={() => setShowNavbar(true)}
            whileTap={{
              scale: 0.9,
            }}
          >
            <FiMenu></FiMenu>
          </S.NavbarItem>
        </S.Navbar>
      </S.ComputerNavbar>

      {showNavbar && (
        <S.MobileNav
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ ease: "easeIn", delay: -1 }}
        >
          <S.MobileNavClose
            onClick={() => setShowNavbar(false)}
            whileTap={{
              scale: 0.9,
            }}
          >
            <FiX></FiX>
          </S.MobileNavClose>
          <S.Navbar>
            <S.NavbarItem>
              <S.NavbarLink smooth={true} spy={true} to="main">
                Home
              </S.NavbarLink>
            </S.NavbarItem>
            <S.NavbarItem>
              <S.NavbarLink smooth={true} spy={true} to="qualities">
                Habilidades
              </S.NavbarLink>
            </S.NavbarItem>
            <S.NavbarItem>
              <S.NavbarLink smooth={true} spy={true} to="projects">
                Projetos
              </S.NavbarLink>
            </S.NavbarItem>
            <S.NavbarItem>
              <S.NavbarLink smooth={true} spy={true} to="contact">
                Contatos
              </S.NavbarLink>
            </S.NavbarItem>
            <S.NavbarItem>{switchElement}</S.NavbarItem>
          </S.Navbar>
        </S.MobileNav>
      )}
    </S.Header>
  );
};
