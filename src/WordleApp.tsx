import { useEffect, useState } from "react";
import { RowCompleted } from "./components/Rows/RowCompleted";
import { RowCurrent } from "./components/Rows/RowCurrent";
import { RowEmpty } from "./components/Rows/RowEmpty";
import { useWindow } from "./hooks/useWindow";
import { GameStatus } from "./types/types";
import { keys } from "./constants";
import { getWordOfTheDay, isValidWord } from "./services/words";

import style from "./wordleapp.module.scss";
import { KeyBoard } from "./components/KeyBoard/KeyBoard";
import { Modal } from "./components/Modal/Modal";
import { Header } from "./components/Header/Header";

export default function WordleApp() {
  const [wordOfTheDay, setWordOfTheDay] = useState<string>("");
  const [turn, setTurn] = useState<number>(1);
  const [currentWord, setCurrentWord] = useState<string>("");
  const [completedWords, setCompletedWords] = useState<string[]>([]);
  const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.Playing);
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    setWordOfTheDay(getWordOfTheDay());
  }, []);

  const handleKeyDown = (event: KeyboardEvent) => {
    const key = event.key.toUpperCase();
    onKeyPressed(key);
  };

  useWindow("keydown", handleKeyDown);

  const onInput = (letter: string) => {
    const newWord = currentWord + letter;
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

  const onDelete = () => {
    const newWord = currentWord.slice(0, -1);
    setCurrentWord(newWord);
  };

  return (
    <>
      <Header />
      {openModal && gameStatus === GameStatus.Won ? (
        <Modal
          setOpenModal={setOpenModal}
          type="won"
          completedWords={completedWords}
          solution={wordOfTheDay}
        />
      ) : openModal && gameStatus === GameStatus.Lost ? (
        <Modal
          setOpenModal={setOpenModal}
          type="lost"
          completedWords={completedWords}
          solution={wordOfTheDay}
        />
      ) : null}
      <div className={style.mainContainer}>
        {completedWords.map((word, index) => (
          <RowCompleted key={index} word={word} solution={wordOfTheDay} />
        ))}
        {gameStatus === GameStatus.Playing ? (
          <RowCurrent word={currentWord} />
        ) : null}
        {Array.from(Array(6 - turn)).map((_, index) => (
          <RowEmpty key={index} />
        ))}
      </div>
      <KeyBoard keys={keys} onKeyPressed={onKeyPressed} />
    </>
  );
}
