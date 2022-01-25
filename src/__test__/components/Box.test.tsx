import { mount } from "enzyme";
import { Box } from "../../components/Box/Box";

describe("Tests for <Box />", () => {
  const box = mount(<Box value="H" status="correct" />);
  test("Render Box component", () => {
    expect(box.length).toEqual(1);
  });
  test("Box component should have correct class", () => {
    expect(box.find(".correct").length).toEqual(1);
  });
});
