import { styled } from "styled-components";
import { motion } from "framer-motion";

export const OverviewContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.secondBackground};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexAdjuster = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  gap: 1rem;
  max-width: 80rem;

  @media screen and (max-width: 576px) {
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
  }
`;

export const ProgrammerInfo = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: justify;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 0.5rem;

  @media screen and (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-top: -1rem;

  & span {
    color: ${({ theme }) => theme.colors.lighter};
  }
`;

export const LinksContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 1rem;

  svg {
    font-size: 2.5rem;
  }
`;

export const AnimatedLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.3s ease-in;

  &:hover {
    color: ${({ theme }) => theme.colors.lighter};
  }
`;
