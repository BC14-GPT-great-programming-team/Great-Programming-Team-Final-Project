import { render, screen } from "@testing-library/react";
import JoinGroup from "../JoinGroup/JoinGroup";
import { MemoryRouter } from "react-router-dom";

test("the button for next on the page", () => {
  // Renders Page
  render(
    <MemoryRouter>
      <JoinGroup />

    </MemoryRouter>
  );

  const nextBtn = screen.getByRole("button", { name: "Next" });
  expect(nextBtn).toBeInTheDocument();
});

// Test for input renders
// test("renders input", () => {
//   render(
//     <MemoryRouter>
//       <JoinGroup />
//     </MemoryRouter>
//   );
//   const codeInput = screen.getByRole("textbox", { name: "Enter Code" });
//   expect(codeInput).toBeInsTheDocument();
// });
