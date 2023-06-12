import { render, screen } from "@testing-library/react";

import Homepage from "./Hompage.js";

test("renders homepage logo", () => {
  // Renders Page
  render(<Homepage />);
  //   Check if Logo renders
  const groupBtn = screen.getByAltText("logo");
  //   Test
  expect(groupBtn).toBeInTheDocument();
});
