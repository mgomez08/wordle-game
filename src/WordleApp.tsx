import { RowCompleted } from "./components/Rows/RowCompleted";
import { RowCurrent } from "./components/Rows/RowCurrent";
import { RowEmpty } from "./components/Rows/RowEmpty";

export default function WordleApp() {
  return (
    <div>
      <RowCompleted word="sabio" solution="sabia" />
      <RowCompleted word="sabio" solution="break" />
      <RowCurrent word="sabo" />
      <RowEmpty />
      <RowEmpty />
      <RowEmpty />
    </div>
  );
}
