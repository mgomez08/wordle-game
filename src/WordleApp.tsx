import { useContext } from "react";
import { RowCompleted } from "./components/Rows/RowCompleted";
import { RowCurrent } from "./components/Rows/RowCurrent";
import { RowEmpty } from "./components/Rows/RowEmpty";
import { useWindow } from "./hooks/useWindow";
import { GameStatus } from "./types/types";
import { keys } from "./constants";

import style from "./wordleapp.module.scss";
import { KeyBoard } from "./components/KeyBoard/KeyBoard";
import { Modal } from "./components/Modal/Modal";
import { Header } from "./components/Header/Header";
import { GameContext } from "./context/GameContext";

export default function WordleApp() {
  const {
    wordOfTheDay,
    turn,
    currentWord,
    completedWords,
    gameStatus,
    openModal,
    setOpenModal,
    onKeyPressed,
  } = useContext(GameContext);

  const handleKeyDown = (event: KeyboardEvent) => {
    const key = event.key.toUpperCase();
    onKeyPressed(key);
  };

  useWindow("keydown", handleKeyDown);

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
