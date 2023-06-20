import { render, screen, fireEvent } from "@testing-library/react";
import Homepage from "./Hompage.js";
import PreFilter from "../PreFilterPage/PreFilterPage.js";
import { MemoryRouter, Route, Routes } from "react-router-dom";

// Test all buttons render on screen
test("renders buttons", () => {
  const { container } = render(
    <MemoryRouter>
      <Homepage />
    </MemoryRouter>
  );

  expect(container.textContent).toMatch("Go SoloGroup ModeSpin The Wheel");
});

// Test Render Buttons
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

// Test that the Go Solo Mode links to Pre Filter Page
test("solo link to pre filter", () => {
  render(
    <MemoryRouter>
      {/* Use Routes!!! for paths */}
      <Routes>
        {/* Set the element to the page you want to link to */}
        <Route path="/" element={<Homepage />} />
        <Route path="/prefilter" element={<PreFilter />} />
      </Routes>
    </MemoryRouter>
  );

  const soloBtn = screen.getByRole("button", { name: "Go Solo" });
  expect(soloBtn).toBeInTheDocument();
  // Get attribute
  expect(soloBtn.getAttribute("to", "/prefilter"));

  // Fire User Event
  fireEvent.click(soloBtn);
  const preFilterPage = screen.getByRole("heading", { name: "Select Filters" });
  expect(preFilterPage).toBeInTheDocument();
});
