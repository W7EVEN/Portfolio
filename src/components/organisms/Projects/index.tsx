import { useEffect, useRef } from "react";
import { SiGithub } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";
import { useAnimation, useInView } from "framer-motion";
import * as S from "./styles";
import Visao from "../../../assets/images/Visao.webp";
import Agency from "../../../assets/images/Agency.webp";
import Electrum from "../../../assets/images/Electrum.webp";

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
                    src={Visao}
                    alt="Projeto"
                  />
                </S.ImageContainer>
                <S.TextWrapper>
                  <S.ProjectTitle>Visão</S.ProjectTitle>
                  <p>
                    Explore seu potencial cognitivo ao máximo!. Projeto em
                    andamento de uma plataforma de estudos. Foram aplicadas
                    tecnologias extremamente modernas e performáticas para o
                    desenvolvimento do site. Sua interface foi pensada para
                    utilização em computadores.
                  </p>
                  <S.TechWrapper>
                    <S.Tech>React</S.Tech>
                    <S.Tech>SASS</S.Tech>
                    <S.Tech>JavaScript</S.Tech>
                  </S.TechWrapper>
                  <S.LinksContainer>
                    <a
                      href="https://pesquisas-visao.vercel.app/"
                      target="_blank"
                    >
                      Site{" "}
                      <BiLinkExternal aria-label="Ir para o site do projeto"></BiLinkExternal>
                    </a>
                    <a
                      href="https://github.com/W7EVEN/Brainful"
                      target="_blank"
                    >
                      Código <SiGithub aria-label="Ícone GitHub"></SiGithub>
                    </a>
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
                    transition={{
                      type: "spring",
                      damping: 6,
                      stiffness: 30,
                    }}
                    src={Electrum}
                    alt="Projeto"
                  />
                </S.ImageContainer>
                <S.TextWrapper>
                  <S.ProjectTitle>Electrum</S.ProjectTitle>
                  <p>
                    Um marketplace para todas as suas necessidades! Electrum é
                    um website intuitivo e amigável ao usuário feito com base
                    nas tecnologias primordiais do desenvolvimento web.
                    Atualmente sua interface está finalizada para visualização
                    em computadores e notebooks.
                  </p>
                  <S.TechWrapper>
                    <S.Tech>HTML</S.Tech>
                    <S.Tech>SASS</S.Tech>
                    <S.Tech>JavaScript</S.Tech>
                  </S.TechWrapper>
                  <S.LinksContainer>
                    <a
                      href="https://electrum-flame.vercel.app/"
                      target="_blank"
                    >
                      Site{" "}
                      <BiLinkExternal aria-label="Ir para o site do projeto"></BiLinkExternal>
                    </a>
                    <a
                      href="https://github.com/W7EVEN/Electrum"
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
