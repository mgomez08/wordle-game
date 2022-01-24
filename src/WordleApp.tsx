import { RowCompleted } from "./components/Rows/RowCompleted";
import { RowEmpty } from "./components/Rows/RowEmpty";

export default function WordleApp() {
  return (
    <div>
      <RowCompleted word="sabio" solution="break" />
      <RowCompleted word="sabio" solution="break" />
      <RowCompleted word="sabio" solution="break" />
      <RowEmpty />
      <RowEmpty />
      <RowEmpty />
    </div>
  );
}
