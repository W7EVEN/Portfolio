import * as S from "./styles";
import { Variants, motion } from "framer-motion";
import { SiReact } from "react-icons/si";
import { useState } from "react";
import "./styles.css";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export const Card = ({ text, title, setSelected, selected }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Card
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.05 }}
      onClick={() => setSelected(selected)}
      animate={isOpen ? "open" : "closed"}
    >
      <div className={`card__container ${isOpen && "open"}`}>
        <div className="card__content">
          <S.InitialDiv layoutTransition={isOpen ? openSpring : closeSpring}>
            <SiReact></SiReact>
            <span>{title}</span>
          </S.InitialDiv>

          <motion.div
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            style={{
              pointerEvents: isOpen ? "auto" : "none",
            }}
            animate={{
              position: "absolute",
            }}
          >
            <p>{text}</p>
          </motion.div>
        </div>
      </div>
    </S.Card>
  );
};
