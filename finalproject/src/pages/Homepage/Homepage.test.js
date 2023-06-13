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

// jest.mock('../../Components/Button/Button.js', () => () => (<button>click</button>));
//the mock covers over the existing functionality and test will test for mock instead of the existing function

test( "renders buttons", () => {
 const {container} = 
 render(
    <MemoryRouter>
      <Homepage />
    </MemoryRouter>
  );

expect( container.textContent).toMatch("Go SoloGroup ModeSpin The Wheel")
  }

)
