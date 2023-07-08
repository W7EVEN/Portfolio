import { useRef } from "react";
import "./styles.css";
import * as S from "./styles";
import { useEffect } from "react";
import { SiReact } from "react-icons/si";
import { useAnimation, useInView } from "framer-motion";
import { items } from "../../molecules/Card/data";

interface CardProps {
  selected?: any;
  setSelected?: any;
  item?: any;
}

const Card: React.FC<CardProps> = ({ selected, setSelected, item }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("show");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView]);

  const container = {
    hidden: { opacity: 0, scale: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 5,
        staggerDirection: -1,
        duration: 0.5,
      },
      ease: "easeInOut",
    },
  };

  return (
    <S.Card
      whileTap={{
        scale: 0.97,
        transition: {
          type: "spring",
          duration: 0.5,
          stiffness: 100,
          damping: 3,
        },
      }}
      whileHover={{
        scale: 1.05,
        transition: {
          type: "spring",
          duration: 0.5,
          stiffness: 100,
          damping: 3,
        },
      }}
      onClick={() => setSelected(item)}
      variants={container}
      ref={ref}
      animate={mainControls}
    >
      <div className={`card__container ${selected && "open"}`}>
        <div className="card__content">
          <S.InitialDiv>
            <SiReact></SiReact>
            <span>{item.title}</span>
          </S.InitialDiv>
        </div>
      </div>
    </S.Card>
  );
};

export const CardsContainer: React.FC<CardProps> = ({
  selected,
  setSelected,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("show");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 5,
        staggerDirection: -1,
      },
    },
  };

  return (
    <S.CardsContainer
      variants={container}
      ref={ref}
      initial={"hidden"}
      animate={mainControls}
    >
      {items.map((item) => (
        <Card
          key={item.id}
          selected={selected}
          setSelected={setSelected}
          item={item}
        ></Card>
      ))}
    </S.CardsContainer>
  );
};
