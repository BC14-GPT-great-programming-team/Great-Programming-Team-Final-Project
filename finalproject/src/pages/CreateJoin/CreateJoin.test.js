import { render, screen } from "@testing-library/react";
import CreateJoin from "../CreateJoin/CreateJoin";
import { MemoryRouter } from "react-router-dom";

test("render group button", () => {
    render(
      <MemoryRouter>
        <CreateJoin />
      </MemoryRouter>
    );
  
    
    const createGroupBtn = screen.getByRole("button", { name: "Create Group" });
    expect(createGroupBtn).toBeInTheDocument();

    const joinGroupBtn = screen.getByRole("button", { name: "Join Group" });
    expect(joinGroupBtn).toBeInTheDocument();
  });