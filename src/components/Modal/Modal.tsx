import styles from "./modal.module.scss";
import { Square } from "./Square";

interface ModalProps {
  setOpenModal: (openModal: boolean) => void;
  type: "won" | "lost";
  completedWords: string[];
  solution: string;
}

export const Modal = ({
  setOpenModal,
  type,
  completedWords,
  solution,
}: ModalProps) => {
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <div className={styles.modalViewContainer}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <button onClick={handleCloseModal}>
            <i className={"far fa-times-circle " + styles.btnClose}></i>
          </button>
        </div>
        <div className={styles.modalContent}>
          <h2>You {type === "won" ? "Won!" : "Lost :("}</h2>
          <div className={styles.puzzle}>
            {completedWords.map((word, index) => (
              <Square key={index} word={word} solution={solution} />
            ))}
          </div>
          <div className={styles.socialShareContainer}>
            <h3>Share your score!</h3>
            <div className={styles.social}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://twitter.com/intent/tweet?url=https://wordle-game-iota.vercel.app/&text=Hola Prueba`}
                className={`${styles.btnSocial} ${styles.twitterLogo}`}
              >
                <i className="fab fa-twitter-square"></i>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://api.whatsapp.com/send?text=Hola Prueba en https://wordle-game-iota.vercel.app/`}
                className={`${styles.btnSocial} ${styles.whatsappLogo}`}
              >
                <i className="fab fa-whatsapp-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
