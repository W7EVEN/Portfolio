import { motion } from "framer-motion";
import { styled } from "styled-components";

export const CardsContainer = styled(motion.ul)`
  /* background-color: ${({ theme }) => theme.colors.background}; */
  display: grid;
  grid-template-columns: auto auto;
  gap: 2rem;
  padding: 0px 5%;

  @media screen and (max-width: 576px) {
    grid-template-columns: auto;
  }
`;

export const Card = styled(motion.li)`
  width: 200px;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.75);
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.25rem;
  position: relative;

  & svg {
    font-size: 5.5rem;
  }

  @media screen and (max-width: 576px) {
    width: 80vw;
    height: 250px;
  }
`;

export const InitialDiv = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.25rem;
  flex-flow: column wrap;
  span {
    font-size: 1.25rem;
    width: 95%;
  }
`;
