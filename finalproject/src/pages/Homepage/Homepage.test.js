import { render, screen, fireEvent } from "@testing-library/react";
import Homepage from "./Hompage.js";
import PreFilter from "../PreFilterPage/PreFilterPage.js";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import CreateJoinGroup from "../CreateJoin/CreateJoin.js";
import { jest } from "@jest/globals";

const mockFunction = jest.fn();

//STOP CAPITALIZING one minute and not capitalizing everything the next ,its such a nuisance on tests

// Test all buttons render on screen
test("renders buttons", () => {
  const { container } = render(
    <MemoryRouter>
      <Homepage />
    </MemoryRouter>
  );

  expect(container.textContent).toMatch("");
});

// Test Render Buttons
// Test Group Mode button renders
test("render group mode button", () => {
  render(
    <MemoryRouter>
      <Homepage />
    </MemoryRouter>
  );

  const groupModeBtn = screen.getByRole("button", { name: "GROUP MODE" });
  expect(groupModeBtn).toBeInTheDocument();
});

// Test Spin button renders(this test was for the random choice button for spin the wheel)
// test("render spin button", () => {
//   render(
//     <MemoryRouter>
//       <Homepage />
//     </MemoryRouter>
//   );

//   const spinBtn = screen.getByRole("button", { name: "SPIN THE WHEEL" });
//   expect(spinBtn).toBeInTheDocument();
// });

// Test that the Go Solo Mode links to Pre Filter Page
test("solo link to pre filter", () => {
  render(
    <MemoryRouter>
      {/* Use Routes!!! for paths */}
      <Routes>
        {/* Set the element to the page you want to link to */}
        <Route path="/" element={<Homepage setGroupMode={mockFunction} />} />
        <Route path="/prefilter" element={<PreFilter />} />
      </Routes>
    </MemoryRouter>
  );

  const soloBtn = screen.getByRole("button", { name: "GO SOLO" });
  expect(soloBtn).toBeInTheDocument();
  //
  // Get attribute
  // expect(soloBtn.getAttribute("to", "/prefilter"));

  // Fire User Event
  fireEvent.click(soloBtn);
  // const preFilterPage = screen.getByRole("heading", { name: "Location" });
  // expect(preFilterPage).toBeInTheDocument();
  expect(mockFunction).toHaveBeenCalledWith(false);
});

// Test group mode button links to create join
test("Group link to create/join", () => {
  render(
    <MemoryRouter>
      {/* Use Routes!!! for paths */}
      <Routes>
        {/* Set the element to the page you want to link to */}
        <Route path="/" element={<Homepage setGroupMode={mockFunction} />} />
        <Route path="/create-join" element={<CreateJoinGroup />} />
      </Routes>
    </MemoryRouter>
  );
  const GroupBtn = screen.getByRole("button", { name: "GROUP MODE" });
  expect(GroupBtn).toBeInTheDocument();

  fireEvent.click(GroupBtn);
  // const createGroupPage = screen.getByRole("button", { name: "Create Group" });
  expect(mockFunction).toHaveBeenCalledWith(true);
});
