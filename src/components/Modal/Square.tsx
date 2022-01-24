import { checkLetterForModal } from "../../helpers/checkLetter";
import styles from "./modal.module.scss";

interface SquareProps {
  word: string;
  solution: string;
}

export const Square = ({ word, solution }: SquareProps) => {
  return (
    <div className={styles.puzzleWord}>
      {word.split("").map((letter, index) => (
        <div key={index}>{checkLetterForModal(letter, index, solution)}</div>
      ))}
    </div>
  );
};
