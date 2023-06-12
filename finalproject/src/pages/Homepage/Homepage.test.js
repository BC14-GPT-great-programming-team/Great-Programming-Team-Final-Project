import { render, screen } from "@testing-library/react";

import Homepage from "./Hompage.js";
import { MemoryRouter } from "react-router-dom";

test("renders homepage logo", () => {
  // Renders Page
  render(
    <MemoryRouter>
      <Homepage />
    </MemoryRouter>
  );
  //   Check if Logo renders
  const groupBtn = screen.getByAltText("logo");
  //   Test
  expect(groupBtn).toBeInTheDocument();
});
