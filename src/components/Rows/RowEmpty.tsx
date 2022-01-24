import { Box } from "../Box/Box";
import styles from "./row.module.scss";

export const RowEmpty = () => {
  const ROWS: number = 5;
  const arrayRows = Array.from(Array(ROWS));
  return (
    <div className={styles.row}>
      {arrayRows.map((_, index) => (
        <Box key={index} value="" status="empty" />
      ))}
    </div>
  );
};
