import styles from "./keyboard.module.scss";

interface KeyBoardProps {
  keys: string[];
  onKeyPressed: (key: string) => void;
}

export const KeyBoard = ({ keys, onKeyPressed }: KeyBoardProps) => {
  const handleInput = (e: any) => {
    onKeyPressed(e.target.textContent);
  };
  const handleEnter = (e: any) => {
    onKeyPressed("ENTER");
  };
  const handleDelete = (e: any) => {
    onKeyPressed("BACKSPACE");
  };

  return (
    <div className={styles.keyboardContainer}>
      {Array.from(Array(10)).map((_, index) => (
        <button key={index} className={styles.key} onClick={handleInput}>
          {keys[index]}
        </button>
      ))}
      <div className={styles.emptyKey}></div>
      {Array.from(Array(9)).map((_, index) => (
        <button key={index + 10} className={styles.key} onClick={handleInput}>
          {keys[index + 10]}
        </button>
      ))}
      <button className={styles.enterKey} onClick={handleEnter}>
        ENTER
      </button>
      {Array.from(Array(7)).map((_, index) => (
        <button key={index + 19} className={styles.key} onClick={handleInput}>
          {keys[index + 19]}
        </button>
      ))}
      <button className={styles.deleteKey} onClick={handleDelete}>
        DELETE
      </button>
    </div>
  );
};
