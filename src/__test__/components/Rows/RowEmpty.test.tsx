import { mount } from "enzyme";
import { RowEmpty } from "../../../components/Rows/RowEmpty";

describe("Tests for <RowEmpty", () => {
  const rowempty = mount(<RowEmpty />);

  test("Render RowEmpty component", () => {
    expect(rowempty.length).toEqual(1);
  });

  test("RowEmpty component should have correct number of children (boxes)", () => {
    expect(rowempty.find("Box").length).toEqual(5);
  });

  test("RowEmpty component should have class (.row)", () => {
    expect(rowempty.find(".row").length).toEqual(1);
  });

  test("First Box children should have correct class (.empty)", () => {
    expect(rowempty.find("Box").first().find(".empty").length).toEqual(1);
  });

  test("First Box children should haven't content", () => {
    expect(rowempty.find("Box").first().text()).toEqual("");
  });

  test("RowEmpty component with Snapshot", () => {
    expect(rowempty).toMatchSnapshot();
  });
});
