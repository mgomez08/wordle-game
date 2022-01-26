import { mount } from "enzyme";
import { RowCurrent } from "../../../components/Rows/RowCurrent";

describe("Tests for <RowCurrent />", () => {
  const rowcurrent = mount(<RowCurrent word="HELLO" />);

  test("Render RowCurrent component", () => {
    expect(rowcurrent.length).toEqual(1);
  });

  test("RowCurrent component should have correct number of children (boxes)", () => {
    expect(rowcurrent.find("Box").length).toEqual(5);
  });

  test("First Box children should have class (.edit)", () => {
    expect(rowcurrent.find("Box").first().find(".edit").length).toEqual(1);
  });

  test("First Box children should have 'H' in the content", () => {
    expect(rowcurrent.find("Box").first().contains("H")).toEqual(true);
  });

  test("RowCurrent component with Snapshot", () => {
    expect(rowcurrent).toMatchSnapshot();
  });
});
