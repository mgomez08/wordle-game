import { Box } from "../Box/Box";
import styles from "./row.module.scss";

interface RowCurrentProps {
  word: string;
}

export const RowCurrent = ({ word }: RowCurrentProps) => {
  const wordArray = word.split("");
  return (
    <div className={styles.row}>
      {wordArray.map((letter, index) => (
        <Box key={index} value={letter} status="edit" />
      ))}
      {Array.from(Array(5 - wordArray.length)).map((letter, index) => (
        <Box key={index} value={""} status="edit" />
      ))}
    </div>
  );
};
