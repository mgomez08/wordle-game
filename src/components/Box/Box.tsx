import { BoxStatus } from "../../types/types";
import styles from "./box.module.scss";
import classNames from "classnames/bind";

const classes = classNames.bind(styles);

interface BoxProps {
  value: string;
  status: BoxStatus;
}

export const Box = ({ value, status }: BoxProps) => {
  const boxStatus = classes({
    absent: status === "absent",
    correct: status === "correct",
    edit: status === "edit",
    empty: status === "empty",
    present: status === "present",
  });
  return <div className={boxStatus}>{value}</div>;
};
