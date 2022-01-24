import { BoxStatus } from "../types/types";

export function checkLetterForWord(
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

export function checkLetterForModal(
  letter: string,
  pos: number,
  solution: string
) {
  if (solution.includes(letter)) {
    if (solution[pos] === letter) {
      return "🟩";
    } else {
      return "🟨";
    }
  } else {
    return "⬛";
  }
}
