import { BoxStatus } from "../types/types";

export default function checkLetter(
  letter: string,
  pos: number,
  solution: string
): BoxStatus {
  if (solution.includes(letter)) {
    if (solution[pos] === letter) {
      return "correct";
    } else {
      return "present";
    }
  } else {
    return "absent";
  }
}
