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
      <div className={styles.rowKeysContainer}>
        {Array.from(Array(10)).map((_, index) => (
          <button key={index} className={styles.key} onClick={handleInput}>
            {keys[index]}
          </button>
        ))}
      </div>
      <div className={styles.rowKeysContainer}>
        {Array.from(Array(10)).map((_, index) => (
          <button key={index + 10} className={styles.key} onClick={handleInput}>
            {keys[index + 10]}
          </button>
        ))}
      </div>
      <div className={styles.rowKeysContainer}>
        <button className={styles.enterKey} onClick={handleEnter}>
          ENTER
        </button>
        {Array.from(Array(7)).map((_, index) => (
          <button key={index + 20} className={styles.key} onClick={handleInput}>
            {keys[index + 20]}
          </button>
        ))}
        <button className={styles.enterKey} onClick={handleDelete}>
          DELETE
        </button>
      </div>
    </div>
  );
};
