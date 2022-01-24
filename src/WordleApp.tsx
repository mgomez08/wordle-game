import { Box } from "./components/Box/Box";

export default function WordleApp() {
  return (
    <div>
      <Box value="a" status="present" />
      <Box value="hola" status="absent" />
    </div>
  );
}
