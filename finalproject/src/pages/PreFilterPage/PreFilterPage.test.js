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
test("render of page for the pre filter", () => {
  const { container } = render(
    <MemoryRouter>
      <PreFilter />
    </MemoryRouter>
  );
  expect(container).toBeInTheDocument();
});

// !!Test for next button to not be clickable until the input has value!!
test("input value and button state", () => {
  // the Mock input of a user
  const mockedLocation = "London";

  render(
    <MemoryRouter>
      {/* Mock the user inputting London */}
      <PreFilter userInput={{ location: mockedLocation }} />
    </MemoryRouter>
  );

  //   Tests run from top to bottom
  //   Button Tests
  const nextBtn = screen.getByRole("button", { name: "Next" });
  expect(nextBtn).toBeInTheDocument();
  //we expect the button to be unclickable/disabled as the input of location hasn't happened yet
  expect(nextBtn).toBeDisabled();

  //   Input Tests
  const locationInput = screen.getByRole("textbox");
  //the textbox of location should be rendered
  expect(locationInput).toBeInTheDocument();
  //the rendered locationinput value should be "" as no input of characters have been entered yet
  expect(locationInput.value).toBe("");

  //   User Event
  fireEvent.change(locationInput, { target: { value: mockedLocation } });
  //the fireevent changes the lack of input from empty to that of our mocked location "london" 
  //so that it holds a value within textbox now

  //   Final Test to see if Button is enabled
  expect(locationInput.value).toBe(mockedLocation);
  //this expect checks out if the value in the locationinput (textbox) is the value we are attempting to place in it (the mocked location)
  //if so it enables the button again and next button is able to be clicked
  expect(nextBtn).toBeEnabled();
});

