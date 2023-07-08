import { motion } from "framer-motion";
import { styled } from "styled-components";

export const Card = styled(motion.li)`
  width: 200px;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.primary};
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
`;

export const InitialDiv = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  flex-flow: column wrap;
  span {
    font-size: 1.25rem;
  }
`;
