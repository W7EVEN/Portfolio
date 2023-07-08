import { motion } from "framer-motion";
import { styled } from "styled-components";

export const MainContainer = styled.section`
  min-height: 90vh;
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  padding: 5rem 3vw;
  align-items: center;
`;

export const FlexAdjuster = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  gap: 1rem;
`;

export const Title = styled.span`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const ProjectsContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 3rem;
`;

export const Project = styled(motion.div)`
  padding: 1.5rem 1rem;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondBackground};
  border-radius: 0.5rem;
  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);
  max-width: 1100px;

  p {
    line-height: 1.25;
    font-size: 1.1rem;
    width: 90%;
  }

  @media screen and (max-width: 576px) {
    width: fit-content;
  }
`;

export const ProjectImage = styled(motion.img)`
  width: 550px;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.25);
  height: 400px;
  object-fit: cover;
  object-position: 0% 0%;
  transition: 5s ease-in-out;

  &:hover {
    object-position: 0% 100%;
  }

  @media screen and (max-width: 576px) {
    height: 280px;
    width: 100%;
    object-fit: cover;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  text-align: center;
  width: 30rem;
  gap: 1rem;
  padding: 0 0 0 1.5rem;

  @media screen and (max-width: 576px) {
    width: 100%;
    padding: 0;
  }
`;

export const ProjectTitle = styled.div`
  font-size: 1.5rem;
  text-transform: uppercase;
`;

export const TechWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
`;

export const Tech = styled.span`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
`;

export const LinksContainer = styled.div`
  gap: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;

  a {
    font-size: 1.2rem;
    align-items: center;
    display: flex;
    gap: 4px;
  }
  svg {
    font-size: 2rem;
  }
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  border-radius: 0.5rem;

  @media screen and (max-width: 576px) {
    width: 100%;
    height: auto;
  }
`;

export const Centralizer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CirclesContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;
  margin-left: 0.5rem;
  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    box-shadow: 0px 0px 5px -1px rgba(0, 0, 0, 0.75);
  }
`;

export const LightSpan = styled.span`
  background-color: ${({ theme }) => theme.colors.secondary};
`;
export const NormalSpan = styled.span`
  background-color: ${({ theme }) => theme.colors.oppositeColor};
`;
export const DarkSpan = styled.span`
  background-color: ${({ theme }) => theme.colors.primary};
`;
export const ProjectNormalizer = styled.div`
  @media screen and (max-width: 576px) {
    overflow: hidden;
    padding: 0.5rem;
  }
`;
