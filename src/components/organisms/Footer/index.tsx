import React from "react";
import * as S from "./styles";
import { SlArrowUp } from "react-icons/sl";
import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <S.Footer id="contact">
      <S.TextWrapper>
        <div>
          <S.FooterText>
            Copyright©2023. Todos os direitos reservados.
          </S.FooterText>
        </div>
        <S.LinksContainer>
          <a href="https://br.linkedin.com/in/wallace-batista" target="_blank">
            LinkedIn
          </a>
          <a href="https://github.com/W7EVEN" target="_blank">
            GitHub
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5577999920562&text=Ol%C3%A1!%20Vi%20seu%20portf%C3%B3lio%20e%20fiquei%20interessado(a),%20gostaria%20de%20fazer%20um%20or%C3%A7amento"
            target="_blank"
          >
            WhatsApp
          </a>
        </S.LinksContainer>
      </S.TextWrapper>
    </S.Footer>
  );
};
