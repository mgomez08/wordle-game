import { Box } from "../Box/Box";
import styles from "./row.module.scss";

interface RowCurrentProps {
  word: string;
}

export const RowCurrent = ({ word }: RowCurrentProps) => {
  return (
    <div className={styles.row}>
      {word.split("").map((letter, index) => (
        <Box key={index} value={letter} status="edit" />
      ))}
      {Array.from(Array(5 - word.length)).map((letter, index) => (
        <Box key={index} value={letter} status="edit" />
      ))}
    </div>
  );
};
