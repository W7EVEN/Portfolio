import { Header } from "../../components/organisms/Header/";
import { Link } from "react-scroll";
import { SlArrowUp } from "react-icons/sl";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { light, dark } from "../../styles/themes/index";
import GlobalStyle from "../../styles/global";
import * as S from "./styles";
import { LandingPage } from "../../components/template/LandingPage";
import { Introduction } from "../../components/organisms/Introduction";
import { Overview } from "../../components/organisms/Overview";
import { Footer } from "../../components/organisms/Footer";
import { Projects } from "../../components/organisms/Projects";
import { BsMoonFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";

export const Home = () => {
  // set up detection of system dark mode
  const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const [theme, setTheme] = useState(darkModeQuery.matches ? dark : light);
  const [scrollActive, setScrollActive] = useState<Boolean>(false);

  const container = {
    hide: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };

  useEffect(() => {
    darkModeQuery.addListener((e) => {
      setTheme(e.matches ? dark : light);
    });
  });

  const toggleTheme = () => {
    setTheme(theme === light ? dark : light);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 250) {
        setScrollActive(true);
      } else {
        setScrollActive(false);
      }
    });
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <LandingPage
        header={
          <Header
            switchElement={
              <S.ReactSwitchCustom
                onChange={toggleTheme}
                checked={theme === dark}
                onColor={theme.colors.lighter}
                offColor={theme.colors.primary}
                checkedIcon={<BsMoonFill></BsMoonFill>}
                uncheckedIcon={<FaSun></FaSun>}
                height={30}
                handleDiameter={35}
                width={60}
                offHandleColor={theme.colors.text}
                activeBoxShadow={`0px 0px 2px 3px #aaaaaa`}
                aria-label="Trocar tema do website"
              />
            }
          ></Header>
        }
        main={
          <main>
            <Introduction></Introduction>
            <Overview></Overview>
            <Projects></Projects>

            <S.ReturnButton
              whileTap={{ scale: 0.95 }}
              whileHover={{
                scale: 1.1,
                rotate: "360deg",
                transition: { duration: 1, ease: "easeInOut" },
              }}
              transition={{ duration: 0.5 }}
              animate={
                scrollActive === true
                  ? { opacity: 1, visibility: "visible", scale: 1 }
                  : { opacity: 0, scale: 0.15 }
              }
            >
              <Link to="main" smooth={true} spy={true}>
                <SlArrowUp></SlArrowUp>
              </Link>
            </S.ReturnButton>
          </main>
        }
        footer={<Footer></Footer>}
      />
    </ThemeProvider>
  );
};
