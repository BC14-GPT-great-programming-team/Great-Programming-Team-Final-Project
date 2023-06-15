import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

import Homepage from "./Hompage.js";
import { MemoryRouter } from "react-router-dom";
// import { createMemoryHistory } from 'history';
// import { Router } from 'react-router-dom';

// Logo Test
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

// jest.mock('../../Components/Button/Button.js', () => () => (<button>click</button>));
//the mock covers over the existing functionality and test will test for mock instead of the existing function

test("renders buttons", () => {
  const { container } = render(
    <MemoryRouter>
      <Homepage />
    </MemoryRouter>
  );

  expect(container.textContent).toMatch("Go SoloGroup ModeSpin The Wheel");
});

// Test Render Buttons
// Test solo button renders
test("render solo button", () => {
  render(
    <MemoryRouter>
      <Homepage />
    </MemoryRouter>
  );

  // Used getAllByRole first but this returned an array of the 3 buttons
  const goSoloBtn = screen.getByRole("button", { name: "Go Solo" });
  expect(goSoloBtn).toBeInTheDocument();
});

// Test Group Mode button renders
test("render group mode button", () => {
  render(
    <MemoryRouter>
      <Homepage />
    </MemoryRouter>
  );

  const groupModeBtn = screen.getByRole("button", { name: "Group Mode" });
  expect(groupModeBtn).toBeInTheDocument();
});

// Test Spin button renders
test("render spin button", () => {
  render(
    <MemoryRouter>
      <Homepage />
    </MemoryRouter>
  );

  const spinBtn = screen.getByRole("button", { name: "Spin The Wheel" });
  expect(spinBtn).toBeInTheDocument();
});

// Check link from Group Mode to create-join
// test("link from group mode", () => {
//   render(
//     <MemoryRouter >
//       <Homepage />
//     </MemoryRouter>
//   );
//   // const groupModeBtn = screen.getByRole("button", { name: "Group Mode" });

//  userEvent.click(screen.getByRole("button", { name: "Group Mode" }));

//   // Assert that the URL has changed to "create-join"
//   expect(window.location.pathname).toBe("/create-join");
// });

// // Create a mock history object
// const history = createMemoryHistory();

// // Render the component with the mock history object
// render(
//   <Router history={history}>
//     <Homepage />
//   </Router>
// );

// // Click the "Group Mode" button
//  userEvent.click(screen.getByRole("button", { name: "Group Mode" }));

// // Assert the navigation by checking the history object
// expect(history.location.pathname).toBe("/create-join");
