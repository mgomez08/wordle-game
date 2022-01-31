export type BoxStatus = "absent" | "present" | "correct" | "empty" | "edit";

export const enum GameStatus {
  Playing,
  Won,
  Lost,
}

export interface ProviderProps {
  children: React.ReactNode;
}

export interface GameContextTypes {
  wordOfTheDay: string;
  turn: number;
  currentWord: string;
  completedWords: string[];
  gameStatus: GameStatus;
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
  onKeyPressed: (key: string) => void;
}
