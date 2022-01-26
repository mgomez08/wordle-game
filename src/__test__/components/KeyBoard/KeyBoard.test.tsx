import { mount } from "enzyme";
import { KeyBoard } from "../../../components/KeyBoard/KeyBoard";
import { keys } from "../../../constants";

describe("Test for <KeyBoard />", () => {
  const onKeyPressed = jest.fn();
  const keyboard = mount(<KeyBoard keys={keys} onKeyPressed={onKeyPressed} />);

  test("Render KeyBoard component", () => {
    expect(keyboard.length).toEqual(1);
  });

  test("KeyBoard component should have .keyboardContainer class", () => {
    expect(keyboard.find(".keyboardContainer").length).toEqual(1);
  });

  test("KeyBoard component should have correct number of children (keys)", () => {
    expect(keyboard.find("button").length).toEqual(28);
  });

  test("Simulate click on first key", () => {
    keyboard.find("button").first().simulate("click");
    expect(onKeyPressed).toHaveBeenCalledWith(keys[0]);
  });

  test("KeyBoard component with Snapshot", () => {
    expect(keyboard).toMatchSnapshot();
  });
});
