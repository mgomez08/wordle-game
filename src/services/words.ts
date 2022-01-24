import { words } from "../constants";

function getWords() {
  return words;
}

export function getWordOfTheDay() {
  const words = getWords();
  const wordOfTheDay = words[getDayOfTheYear()];
  return wordOfTheDay;
}

export async function isValidWord(word: string) {
  try {
    const URL = process.env.REACT_APP_API_DICTIONARY + word;
    const response = await fetch(URL);
    const data = await response.json();
    if (data[0].word) {
      return data.length;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
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
