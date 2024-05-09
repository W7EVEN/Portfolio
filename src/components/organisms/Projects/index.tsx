import { useEffect, useRef } from "react";
import { SiGithub } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";
import { useAnimation, useInView } from "framer-motion";
import * as S from "./styles";
import NexversoDashboard from "../../../assets/images/NexversoDashboard.webp";
import Agency from "../../../assets/images/Agency.webp";
import Nexverso from "../../../assets/images/Nexverso.webp";

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("show");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,

      transition: {
        staggerChildren: 20,
        staggerDirection: 1,
        duration: 0.8,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, x: "-10%" },
    show: {
      opacity: 1,
      x: 0,

      transition: { duration: 1 },
    },
  };

  const reverseCard = {
    hidden: { opacity: 0, x: "10%" },
    show: {
      opacity: 1,
      x: 0,

      transition: { duration: 1 },
    },
  };

  return (
    <S.MainContainer id="projects">
      <S.FlexAdjuster>
        <S.Title>Projetos recentes</S.Title>

        <S.ProjectsContainer
          variants={container}
          ref={ref}
          animate={mainControls}
        >
          <S.ProjectNormalizer>
            <S.Project
              variants={card}
              initial={"hidden"}
              animate={mainControls}
            >
              <S.CirclesContainer>
                <S.DarkSpan></S.DarkSpan>
                <S.NormalSpan></S.NormalSpan>
                <S.LightSpan></S.LightSpan>
              </S.CirclesContainer>
              <S.Centralizer>
                <S.ImageContainer>
                  <S.ProjectImage
                    transition={{ type: "spring", damping: 6, stiffness: 30 }}
                    src={Nexverso}
                    alt="Projeto"
                  />
                </S.ImageContainer>
                <S.TextWrapper>
                  <S.ProjectTitle>Nexverso</S.ProjectTitle>
                  <p>
                    Gamifique o seu ensino! O Nexverso é um plataforma de
                    gamificação escolar, e essa é a página de apresentação do
                    projeto, que foi feita com as mais modernas tecnologias web
                    para Interfaces de Usuário.
                  </p>
                  <S.TechWrapper>
                    <S.Tech>NextJS</S.Tech>
                    <S.Tech>DaisyUI</S.Tech>
                  </S.TechWrapper>
                  <S.LinksContainer>
                    <a href="https://nexverso.com" target="_blank">
                      Site{" "}
                      <BiLinkExternal aria-label="Ir para o site do projeto"></BiLinkExternal>
                    </a>
                    {/* <a
                      href="https://github.com/W7EVEN/Brainful"
                      target="_blank"
                    >
                      Código <SiGithub aria-label="Ícone GitHub"></SiGithub>
                    </a> */}
                  </S.LinksContainer>
                </S.TextWrapper>
              </S.Centralizer>
            </S.Project>
          </S.ProjectNormalizer>
          <S.ProjectNormalizer>
            <S.Project
              variants={card}
              initial={"hidden"}
              animate={mainControls}
            >
              <S.CirclesContainer>
                <S.DarkSpan></S.DarkSpan>
                <S.NormalSpan></S.NormalSpan>
                <S.LightSpan></S.LightSpan>
              </S.CirclesContainer>
              <S.Centralizer>
                <S.ImageContainer>
                  <S.ProjectImage
                    transition={{ type: "spring", damping: 6, stiffness: 30 }}
                    src={NexversoDashboard}
                    alt="Projeto"
                  />
                </S.ImageContainer>
                <S.TextWrapper>
                  <S.ProjectTitle>Nexverso - Professor</S.ProjectTitle>
                  <p>
                    Transforme a sua escola em um jogo! O Nexverso é um projeto
                    de gamificação para escolas. É um sistema Full Stack para
                    professores e diretores coordenarem a escola gamificada.
                  </p>
                  <S.TechWrapper>
                    <S.Tech>React</S.Tech>
                    <S.Tech>NestJS</S.Tech>
                    <S.Tech>Styled Components</S.Tech>
                  </S.TechWrapper>
                  <S.LinksContainer>
                    <a href="https://dashboard.nexverso.com" target="_blank">
                      Site{" "}
                      <BiLinkExternal aria-label="Ir para o site do projeto"></BiLinkExternal>
                    </a>
                    {/* <a
                      href="https://github.com/W7EVEN/Brainful"
                      target="_blank"
                    >
                      Código <SiGithub aria-label="Ícone GitHub"></SiGithub>
                    </a> */}
                  </S.LinksContainer>
                </S.TextWrapper>
              </S.Centralizer>
            </S.Project>
          </S.ProjectNormalizer>
          <S.ProjectNormalizer>
            <S.Project
              variants={reverseCard}
              initial={"hidden"}
              animate={mainControls}
            >
              <S.CirclesContainer>
                <S.DarkSpan></S.DarkSpan>
                <S.NormalSpan></S.NormalSpan>
                <S.LightSpan></S.LightSpan>
              </S.CirclesContainer>
              <S.Centralizer>
                <S.ImageContainer>
                  <S.ProjectImage
                    transition={{ type: "spring", damping: 6, stiffness: 30 }}
                    src={Agency}
                    alt="Projeto"
                  />
                </S.ImageContainer>
                <S.TextWrapper>
                  <S.ProjectTitle>Agency</S.ProjectTitle>
                  <p>
                    Desenvolvendo poderosas experiências. Landing page de uma
                    empresa de desenvolvimento de softwares, website feito com
                    as principais tecnologias do mercado. Interface funcional
                    para qualquer dispositivo.
                  </p>
                  <S.TechWrapper>
                    <S.Tech>HTML</S.Tech>
                    <S.Tech>SASS</S.Tech>
                    <S.Tech>JavaScript</S.Tech>
                  </S.TechWrapper>
                  <S.LinksContainer>
                    <a
                      href="https://agency-project-w7even.vercel.app/"
                      target="_blank"
                    >
                      Site{" "}
                      <BiLinkExternal aria-label="Ir para o site do projeto"></BiLinkExternal>
                    </a>
                    <a
                      href="https://github.com/W7EVEN/Agency-Project"
                      target="_blank"
                    >
                      Código <SiGithub aria-label="Ícone GitHub"></SiGithub>
                    </a>
                  </S.LinksContainer>
                </S.TextWrapper>
              </S.Centralizer>
            </S.Project>
          </S.ProjectNormalizer>
        </S.ProjectsContainer>
      </S.FlexAdjuster>
    </S.MainContainer>
  );
};
