import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiStyledcomponents,
  SiSass,
  SiAntdesign,
} from "react-icons/si";
import { useEffect, useRef } from "react";
import Avatar from "../../../assets/images/Avatar.webp";
import * as S from "./styles";
import { motion, useInView, useAnimation } from "framer-motion";

export const Introduction = () => {
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

  const imageContainer = {
    hidden: { x: 150, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
        duration: 1,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, x: -170 },
    show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  const techContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.15,
        staggerDirection: 1,
        duration: 1,
      },
    },
  };

  const tech = {
    hidden: { opacity: 0, y: -50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 100,
        damping: 5,
      },
    },
  };

  return (
    <section id="main">
      <S.InformationContainer>
        <S.TextContainer
          variants={container}
          ref={ref}
          initial={"hidden"}
          animate={mainControls}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{ once: false, amount: 0.7 }}
        >
          <motion.span variants={card}>Eu me chamo</motion.span>
          <S.Title variants={card}>
            WALLACE
            <S.TitleAccent> BATISTA</S.TitleAccent>
          </S.Title>
          <S.Qualities variants={card}>
            Sou
            <S.TypeAnimationCustom
              sequence={[
                " Desenvolvedor Front-end",
                1500,
                " UI/UX Designer",
                1500,
                " Web Designer",
                1500,
              ]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />
          </S.Qualities>

          <S.Description variants={card}>
            Criando interfaces desde 2022! Apaixonado pela inovação e
            acessibilidade e com um amplo conhecimento de boas práticas de
            programação.
          </S.Description>

          <S.TechContainer variants={techContainer}>
            <span>Tecnologias</span>

            <S.Tech variants={tech}>
              <SiHtml5 aria-label="Ícone HTML" />
            </S.Tech>
            <S.Tech variants={tech}>
              <SiCss3 aria-label="Ícone CSS" />
            </S.Tech>
            <S.Tech variants={tech}>
              <SiJavascript aria-label="Ícone JavaScript" />
            </S.Tech>
            <S.Tech variants={tech}>
              <SiReact aria-label="Ícone React" />
            </S.Tech>
            <S.Tech variants={tech}>
              <SiStyledcomponents aria-label="Ícone Styled Components" />
            </S.Tech>
            <S.Tech variants={tech}>
              <SiSass aria-label="Ícone SASS" />
            </S.Tech>
            <S.Tech variants={tech}>
              <SiAntdesign aria-label="Ícone Ant Design" />
            </S.Tech>
          </S.TechContainer>
        </S.TextContainer>
        <S.AvatarContainer>
          <S.AvatarAnimator
            variants={imageContainer}
            initial="hidden"
            animate={mainControls}
          >
            <S.Avatar src={Avatar} alt="Foto de Wallace Batista" />
            {/*Verificar a possibilidade de moldar em círculo*/}
          </S.AvatarAnimator>
        </S.AvatarContainer>
      </S.InformationContainer>
    </section>
  );
};
