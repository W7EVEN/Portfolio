import { motion } from "framer-motion";
import { styled } from "styled-components";

export const Footer = styled.footer`
  min-height: 15vh;
  background-color: ${({ theme }) => theme.colors.secondBackground};
  box-shadow: 0rem 0rem 0.5rem rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 3vw;

  @media screen and (max-width: 576px) {
    flex-direction: column;
    text-align: center;
    min-height: 25vh;
  }
`;

export const TextWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 1rem;
`;

export const ReturnButton = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  box-shadow: 0rem 0rem 0.5rem -4px ${({ theme }) => theme.colors.text};

  a {
    svg {
      color: ${({ theme }) => theme.colors.background};
      font-size: 1.75rem;
    }
  }
`;

export const FooterText = styled.p`
  font-size: 1.25rem;
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  a {
    font-size: 1.2rem;
  }
`;
