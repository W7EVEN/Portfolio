import * as S from "./styles";
import { stagger } from "framer-motion";

export const Modal = ({ selected, setSelected }) => {
  const staggerModalItems = stagger(0.1, { startDelay: 0.15 });

  if (!selected) {
    return <></>;
  }
  return (
    <S.ModalShadow
      onClick={() => {
        setSelected(null);
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <S.ModalStopPropagation
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <S.ModalAdjuster
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span>{selected.title}</span>
          <p>{selected.text}</p>
          {selected.Icon}
        </S.ModalAdjuster>
      </S.ModalStopPropagation>
    </S.ModalShadow>
  );
};
