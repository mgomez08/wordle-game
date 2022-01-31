import { useState, createContext, useEffect } from "react";
import { keys } from "../constants";
import { getWordOfTheDay, isValidWord } from "../services/words";
import { GameContextTypes, GameStatus, ProviderProps } from "../types/types";

export const GameContext = createContext({} as GameContextTypes);

export const GameProvider = ({ children }: ProviderProps) => {
  const [wordOfTheDay, setWordOfTheDay] = useState<string>("");
  const [turn, setTurn] = useState<number>(1);
  const [currentWord, setCurrentWord] = useState<string>("");
  const [completedWords, setCompletedWords] = useState<string[]>([]);
  const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.Playing);
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    setWordOfTheDay(getWordOfTheDay());
  }, []);

  const onEnter = async () => {
    //User has completed a word
    if (currentWord === wordOfTheDay) {
      setCompletedWords([...completedWords, currentWord]);
      setGameStatus(GameStatus.Won);
      setOpenModal(true);
      return;
    }
    //User has lost
    if (turn === 6) {
      setCompletedWords([...completedWords, currentWord]);
      setGameStatus(GameStatus.Lost);
      setOpenModal(true);
      return;
    }
    const validWord = await isValidWord(currentWord);
    if (currentWord.length === 5 && !validWord) {
      alert("Word is no valid");
      return;
    }

    //Valid word, but not the word of the day
    setCompletedWords([...completedWords, currentWord]);
    setTurn(turn + 1);
    setCurrentWord("");
  };

  const onInput = (letter: string) => {
    const newWord = currentWord + letter;
    setCurrentWord(newWord);
  };

  const onDelete = () => {
    const newWord = currentWord.slice(0, -1);
    setCurrentWord(newWord);
  };

  const onKeyPressed = (key: string) => {
    if (gameStatus !== GameStatus.Playing) return;

    if (key === "BACKSPACE" && currentWord.length > 0) {
      onDelete();
      return;
    }

    if (key === "ENTER" && currentWord.length === 5 && turn <= 6) {
      onEnter();
      return;
    }

    if (currentWord.length >= 5) return;

    if (keys.includes(key)) {
      onInput(key);
      return;
    }
  };
  return (
    <GameContext.Provider
      value={{
        wordOfTheDay,
        turn,
        currentWord,
        completedWords,
        gameStatus,
        openModal,
        setOpenModal,
        onKeyPressed,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
