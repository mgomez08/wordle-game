import { words, wordsES } from "../constants";

function getWords() {
  return wordsES;
}

export function getWordOfTheDay() {
  const words = getWords();
  const wordOfTheDay = words[getDayOfTheYear()];
  return wordOfTheDay;
}

export async function isValidWord(word: string) {
  return wordsES.includes(word);
}

function getDayOfTheYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff =
    (now as any) -
    (start as any) +
    (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}
