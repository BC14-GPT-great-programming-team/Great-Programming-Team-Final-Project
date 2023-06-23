import { render, screen ,fireEvent} from "@testing-library/react";
import CreateJoin from "../CreateJoin/CreateJoin";
import { MemoryRouter, Route,Routes } from "react-router-dom";
import JoinGroup from "../JoinGroup/JoinGroup";
import PreFilter from "../PreFilterPage/PreFilterPage";


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
  test("button moves to the create group prefilter page", () => {
    
    render(
      <MemoryRouter>
    <CreateJoin/>
    <PreFilter/>
      </MemoryRouter>
    );
    const createGroupBtn2 = screen.getByRole("button", { name: "Create Group" });
    expect(createGroupBtn2).toBeInTheDocument();
  

  
    fireEvent.click(createGroupBtn2);
     const createTheGroup= screen.getByRole("heading", { name: "Location" });
    // // getByPlaceholderText('Enter group code');
     expect(createTheGroup).toBeInTheDocument();



    });
    // test("button renders and moves to the group joining page ")

 