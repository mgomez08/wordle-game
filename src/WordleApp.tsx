import { useEffect, useState } from "react";
import { RowCompleted } from "./components/Rows/RowCompleted";
import { RowCurrent } from "./components/Rows/RowCurrent";
import { RowEmpty } from "./components/Rows/RowEmpty";
import { GameStatus } from "./types/types";

export default function WordleApp() {
  const [wordOfTheDay, setWordOfTheDay] = useState<string>("");
  const [turn, setTurn] = useState<number>(1);
  const [currentWord, setCurrentWord] = useState<string>("");
  const [completedWords, setCompletedWords] = useState<string[]>([]);
  const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.Playing);

  useEffect(() => {
    setWordOfTheDay("break");
  });
  return (
    <div>
      <RowCompleted word="sabio" solution={wordOfTheDay} />
      <RowCompleted word="sabio" solution={wordOfTheDay} />
      <RowCurrent word="sabo" />
      <RowEmpty />
      <RowEmpty />
      <RowEmpty />
    </div>
  );
}
