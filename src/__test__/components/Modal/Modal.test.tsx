import { mount } from "enzyme";
import { Modal } from "../../../components/Modal/Modal";

describe("Tests for <Modal />", () => {
  const modal = mount(
    <Modal
      type="won"
      completedWords={["H", "E", "L", "L", "O"]}
      solution="HELLO"
    />
  );

  test("Render Modal component", () => {
    expect(modal.length).toEqual(1);
  });

  test("Modal component should render title Won!", () => {
    expect(modal.find("h2").text()).toEqual("You Won!");
  });

  test("Modal component should render title Lost :(", () => {
    modal.setProps({ type: "lost" });
    expect(modal.find("h2").text()).toEqual("You Lost :(");
  });

  test("Modal component should render correct number of children (completedWords)", () => {
    expect(modal.find("Square").length).toEqual(5);
  });

  test("Modal component with Snapshot", () => {
    expect(modal).toMatchSnapshot();
  });
});
