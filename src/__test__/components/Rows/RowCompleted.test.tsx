import { mount } from "enzyme";
import { RowCompleted } from "../../../components/Rows/RowCompleted";

describe("Tests for <RowCompleted />", () => {
  const rowcompleted = mount(<RowCompleted word="HELLO" solution="HELLO" />);

  test("Render RowCompleted component", () => {
    expect(rowcompleted.length).toEqual(1);
  });

  test("RowCompleted component should have correct number of children (boxes)", () => {
    expect(rowcompleted.find("Box").length).toEqual(5);
  });

  test("First Box children should have class (.correct) in case the word and the solution are the same", () => {
    expect(rowcompleted.find("Box").first().find(".correct").length).toEqual(1);
  });

  test("First Box children should have class (.absent) in case the word and the solution are different", () => {
    const rowcompleted = mount(<RowCompleted word="HELLO" solution="BATTY" />);
    expect(rowcompleted.find("Box").first().find(".absent").length).toEqual(1);
  });

  test("First Box children should have class (.present) in case the word contains a letter of the solution", () => {
    const rowcompleted = mount(<RowCompleted word="HAPPY" solution="FLESH" />);
    expect(rowcompleted.find("Box").first().find(".present").length).toEqual(1);
  });

  test("RowCompleted component with Snapshot", () => {
    expect(rowcompleted).toMatchSnapshot();
  });
});
