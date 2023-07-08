import { styled } from "styled-components";
import ReactSwitch from "react-switch";
import { motion } from "framer-motion";

export const ReactSwitchCustom = styled(ReactSwitch)`
  background-color: ${({ theme }) => theme.colors.background};

  div {
    display: flex;
    padding: 0 4px;
    justify-content: space-around;

    div {
      position: relative !important;
      svg {
        @media screen and (min-width: 768px) {
          display: block;
          overflow: hidden;
        }
      }
    }
  }
`;

export const ReturnButton = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 2rem;
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

  @media screen and (max-width: 576px) {
    width: 45px;
    height: 45px;
    margin: 1.5rem;
  }
`;
