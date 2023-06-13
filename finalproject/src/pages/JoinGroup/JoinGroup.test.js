import { render, screen } from "@testing-library/react";
import JoinGroup from "../JoinGroup/JoinGroup";
import { MemoryRouter } from "react-router-dom";


test("the button for next on the page", () => {
    // Renders Page
    render(
      <MemoryRouter>
        <JoinGroup/>
      </MemoryRouter>
    );

const nextBtn = screen.getByRole("button", { name: "NEXT" });
    expect(nextBtn).toBeInTheDocument();
    })
test("renders input", () => {
    render(
         <MemoryRouter>
            <JoinGroup />
          </MemoryRouter>
    )
      const placeholderBtn = screen.getByPlaceholderText("Enter Code")
        expect(placeholderBtn).toBeInsTheDocument();
      });