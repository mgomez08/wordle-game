import { mount } from "enzyme";
import { Square } from "../../../components/Modal/Square";

describe("Tests for <Square />", () => {
  const square = mount(<Square word="HELLO" solution="HELLO" />);

  test("Render Square component", () => {
    expect(square.length).toEqual(1);
  });

  test("Square component should have correct class (.puzzleWord)", () => {
    expect(square.find(".puzzleWord").length).toEqual(1);
  });

  test("Square component should have correct number of children (6)", () => {
    expect(square.find("div").length).toEqual(6);
  });

  test("Square component with Snapshot", () => {
    expect(square).toMatchSnapshot();
  });
});
