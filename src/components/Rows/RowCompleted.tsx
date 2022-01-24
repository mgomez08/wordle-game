import checkLetter from "../../helpers/checkLetter";
import { Box } from "../Box/Box";

import style from "./row.module.scss";
interface RowCompletedProps {
  word: string;
  solution: string;
}

export const RowCompleted = ({ word, solution }: RowCompletedProps) => {
  const ROWS: number = 5;
  const arrayRows = Array.from(Array(ROWS));
  return (
    <div className={style.row}>
      {arrayRows.map((_, index) => (
        <Box
          key={index}
          value={word[index]}
          status={checkLetter(word[index], index, solution)}
        />
      ))}
    </div>
  );
};
