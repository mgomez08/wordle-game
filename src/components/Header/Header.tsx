import style from "./header.module.scss";

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.containerHeader}>
        <button>
          <i className={"fas fa-question " + style.sizeIcon}></i>
        </button>
        <h1>WORDLE</h1>
        <button>
          <i className={"fas fa-language " + style.sizeIcon}></i>
        </button>
      </div>
    </header>
  );
};
