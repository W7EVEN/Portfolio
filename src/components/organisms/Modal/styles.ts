import { motion } from "framer-motion";
import { styled } from "styled-components";

export const ModalShadow = styled(motion.div)`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  cursor: pointer;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalStopPropagation = styled(motion.div)`
  width: 100%;
  max-width: 650px;
  margin: 2rem 0;
  border-radius: 0.5rem;
  padding: 1rem 2rem 2rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;
  cursor: default;
  background-color: ${({ theme }) => theme.colors.background};
  position: relative;

  @media screen and (max-width: 576px) {
    width: 90%;
    padding: 1rem;
  }
`;

export const ModalAdjuster = styled(motion.div)`
  span {
    font-size: 1.75rem;
    font-weight: 600;
    letter-spacing: 0.5px;
  }
  p {
    margin-top: 0.5rem;
  }
`;
