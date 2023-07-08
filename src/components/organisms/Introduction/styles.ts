import { styled } from "styled-components";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export const InformationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  gap: 0rem;
  flex-wrap: wrap;
  flex-direction: row;

  @media screen and (max-width: 576px) {
    flex-direction: column-reverse;
    gap: 2rem;
  }
`;

export const TextContainer = styled(motion.div)`
  display: flex;
  flex-flow: column wrap;
  max-width: 950px;

  @media screen and (max-width: 576px) {
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    h1 {
      font-size: 2rem;

      span {
        font-size: 2rem;
      }
    }

    span {
      font-size: 1.5rem;
      text-align: center;
    }

    p {
      text-align: center;
    }
  }
`;

export const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-top: -1rem;
  cursor: pointer;
  transition: color 300ms ease;

  &:hover span {
    color: ${({ theme }) => theme.colors.secondary};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const TitleAccent = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  transition: color 300ms ease;
`;

export const Qualities = styled(motion.span)`
  font-size: 2em;
  margin-bottom: 0.25rem;

  @media screen and (max-width: 576px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    gap: 0.25rem;
    max-width: 100%;
  }
`;

export const TypeAnimationCustom = styled(TypeAnimation)`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Description = styled(motion.p)`
  max-width: 75%;
`;

export const TechContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row wrap;
  max-width: 80%;
  gap: 2rem;
  margin-top: 2rem;

  @media screen and (max-width: 576px) {
    justify-content: center;
    flex-flow: row wrap;
    max-width: 100%;

    span {
      opacity: 0;
      visibility: hidden;
      display: none;
    }
  }
`;

export const Tech = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.secondBackground};
  box-shadow: 1px -1px 8px 1px rgba(0, 0, 0, 0.25);
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;

  & svg {
    font-size: 2rem;
    transition: color 300ms ease;
  }
  &:hover svg {
    color: ${({ theme }) => theme.colors.lighter};
  }
`;

export const Avatar = styled.img`
  max-height: 380px;
  border-radius: 1rem;
  animation: morph 3.5s ease-in-out infinite;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @keyframes morph {
    0% {
      box-shadow: 0px 0px 0 18px ${({ theme }) => theme.colors.lighter},
        -20px -30px 0 18px ${({ theme }) => theme.colors.secondary};
      /* border: 2px solid ${({ theme }) => theme.colors.lighter}; */
    }
    50% {
      box-shadow: 0px 0px 0 18px ${({ theme }) => theme.colors.secondary},
        35px 40px 0 30px ${({ theme }) => theme.colors.lighter};
      /* border: 2px solid ${({ theme }) => theme.colors.secondary}; */
    }
    100% {
      box-shadow: 0px 0cm 0 18px ${({ theme }) => theme.colors.lighter},
        -20px -30px 0 18px ${({ theme }) => theme.colors.secondary};
      /* border: 2px solid ${({ theme }) => theme.colors.lighter}; */
    }
  }

  @media screen and (max-width: 576px) {
    max-height: 270px;

    @keyframes morph {
      0% {
        box-shadow: 0px 0px 0 4px ${({ theme }) => theme.colors.lighter},
          0px 0px 0 4px ${({ theme }) => theme.colors.secondary};
        /* border: 2px solid ${({ theme }) => theme.colors.lighter}; */
      }
      50% {
        box-shadow: 0px 0px 0 8px ${({ theme }) => theme.colors.secondary},
          0px 0px 0 18px ${({ theme }) => theme.colors.lighter};
        /* border: 2px solid ${({ theme }) => theme.colors.secondary}; */
      }
      100% {
        box-shadow: 0px 0cm 0 4px ${({ theme }) => theme.colors.lighter},
          0px 0px 0 4px ${({ theme }) => theme.colors.secondary};
        /* border: 2px solid ${({ theme }) => theme.colors.lighter}; */
      }
    }
  }
`;

export const AvatarAnimator = styled(motion.div)``;
export const AvatarContainer = styled.div`
  padding: 1rem;

  @media screen and (max-width: 576px) {
    overflow: hidden;
    padding: 1rem 5rem;
  }
`;
