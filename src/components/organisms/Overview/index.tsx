import * as S from "./styles";
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { useEffect, useRef, useState } from "react";
import { Modal } from "../Modal";
import { CardsContainer } from "../CardsContainer";
import { useAnimation, useInView, motion } from "framer-motion";

export const Overview = () => {
  const [isSelected, setIsSelected] = useState(null);
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
        staggerChildren: 0.4,
        staggerDirection: 1,
        duration: 0.8,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: -50, scale: 0.01 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1, type: "spring" },
    },
  };

  const textCard = {
    hidden: { opacity: 0, y: -100 },
    show: {
      opacity: 1,
      y: 0,

      transition: { duration: 1, type: "spring" },
    },
  };

  return (
    <S.OverviewContainer id="qualities">
      <S.FlexAdjuster>
        <S.ProgrammerInfo
          variants={container}
          ref={ref}
          initial={"hidden"}
          animate={mainControls}
        >
          <span>Introdução</span>
          <S.Title variants={textCard}>
            Sobre
            <span> minha carreira</span>
          </S.Title>
          <motion.p variants={textCard}>
            Eu sou um entusiasta da programação que descobriu sua paixão pelo
            código aos 12 anos de idade e após isso nunca mais olhou para trás.
            Já o meu trabalho no desenvolvimento Front-end teve início aos meus
            14 anos. Além de especializado em desenvolvimento com React, também
            sou UI/UX. Acredito que é ideal combinar as técnicas sólidas nos
            códigos com a compreensão das necessidades do usuário para criar as
            melhores experiências possíveis.
          </motion.p>
          <motion.p variants={textCard}>
            No meu trabalho, sempre busco aplicar as melhores práticas de
            programação, garantindo a fácil manutenção dos projetos. Tenho um
            conhecimento diverso de tendências do mercado em relação à
            organização de sites. A acessibilidade é uma preocupação constante
            minha, portanto, tento ao máximo garantir que qualquer usuário
            extraia a melhor experiência possível de minhas interfaces.
          </motion.p>
          <S.LinksContainer
            ref={ref}
            initial={"hidden"}
            animate={mainControls}
            variants={container}
          >
            <S.AnimatedLink
              variants={card}
              href="https://github.com/W7EVEN"
              aria-label="Link para o meu GitHub"
              target="_blank"
            >
              <SiGithub></SiGithub>
            </S.AnimatedLink>
            <S.AnimatedLink
              variants={card}
              href="https://br.linkedin.com/in/wallace-batista"
              aria-label="Link para o meu LinkedIn"
              target="_blank"
            >
              <SiLinkedin></SiLinkedin>
            </S.AnimatedLink>
            <S.AnimatedLink
              variants={card}
              href="https://api.whatsapp.com/send?phone=5577999920562&text=Ol%C3%A1!%20Vi%20seu%20portf%C3%B3lio%20e%20fiquei%20interessado(a),%20gostaria%20de%20fazer%20um%20or%C3%A7amento"
              aria-label="Link para o meu WhatsApp"
              target="_blank"
            >
              <SiWhatsapp />
            </S.AnimatedLink>
          </S.LinksContainer>
        </S.ProgrammerInfo>
        <CardsContainer
          selected={isSelected}
          setSelected={setIsSelected}
        ></CardsContainer>
        <Modal selected={isSelected} setSelected={setIsSelected}></Modal>
      </S.FlexAdjuster>
    </S.OverviewContainer>
  );
};
