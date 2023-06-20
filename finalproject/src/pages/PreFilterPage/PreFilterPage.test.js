/*
render of page from the pre filter -
test for the next button to not be clicked until location form imput is filled / used
test if the drop down box choices are selectable 
test if the toggle for accessiblity (wheelchair) is able to be checked or unchecked on click
test if the next button routes to the solo voting screen start when clicked (the group hasn't been implemented yet)


*/ 
import { render, screen, fireEvent } from "@testing-library/react";
import PreFilter from "../PreFilterPage/PreFilterPage.js";
import { MemoryRouter, Route, Routes } from "react-router-dom";



//testing to see if the page can be rendered for the pre filter

test ("render of page for the pre filter", () => {
const {container} =
    render(
        <MemoryRouter>
          <PreFilter/>
        </MemoryRouter>
      );
expect(container).toBeInTheDocument()

})
