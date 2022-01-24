import styles from "./modal.module.scss";
import { Square } from "./Square";

interface ModalProps {
  type: "won" | "lost";
  completedWords: string[];
  solution: string;
}

export const Modal = ({ type, completedWords, solution }: ModalProps) => {
  return (
    <div className={styles.modalViewContainer}>
      <div className={styles.modalContainer}>
        <h2>You {type === "won" ? "Won!" : "Lost :("}</h2>
        <div className={styles.puzzle}>
          {completedWords.map((word, index) => (
            <Square key={index} word={word} solution={solution} />
          ))}
        </div>
      </div>
    </div>
  );
};
