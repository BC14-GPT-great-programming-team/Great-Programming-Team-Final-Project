import React, { createContext, useContext } from 'react';

const RoundsContext = createContext();

export const RoundsProvider = ({ children }) => {



const initialRounds = {
    'An Activity': [
      { id: 1, name: "Restaurant", roundLabel: "venue_type", score: 0, nextRoundID: "An Atmosphere" },
      { id: 2, name: "Museum", roundLabel: "venue_type", score: 0, nextRoundID: "A Theme" },
      { id: 3, name: "Bar", roundLabel: "venue_type", score: 0, nextRoundID: "" },
    ],

    'An Atmosphere': [
      { id: 4, name: "Family Friendly", roundLabel: "atmosphere", score: 0, nextRoundID: "A Time" },
      { id: 5, name: "Romantic", roundLabel: "atmosphere", score: 0, nextRoundID: "A Time" },
      { id: 6, name: "Live Music", roundLabel: "atmosphere", score: 0, nextRoundID: "A Time" },
      { id: 7, name: "Outdoor", roundLabel: "atmosphere", score: 0, nextRoundID: "A Time" },
    ],

    'A Time': [
      { id: 4, name: "Breakfast", roundLabel: "Time", score: 0, nextRoundID: "A Cuisine" },
      { id: 5, name: "Lunch", roundLabel: "Time", score: 0, nextRoundID: "A Cuisine" },
      { id: 6, name: "Dinner", roundLabel: "Time", score: 0, nextRoundID: "A Cuisine" },
      { id: 6, name: "Snack", roundLabel: "Time", score: 0, nextRoundID: "" },
     
    ],
    'A Cuisine': [
      { id: 10, name: "Mexican", roundLabel: "cuisine_type", score: 0, nextRoundID: "A Dining Experience" },
      { id: 11, name: "Chinese", roundLabel: "cuisine_type", score: 0, nextRoundID: "A Dining Experience" },
      { id: 12, name: "Italian", roundLabel: "cuisine_type", score: 0, nextRoundID: "A Dining Experience" },
      { id: 13, name: "Indian", roundLabel: "cuisine_type", score: 0, nextRoundID: "A Dining Experience" },
      { id: 14, name: "Burger", roundLabel: "cuisine_type", score: 0, nextRoundID: "A Dining Experience" },
      { id: 15, name: "Thai", roundLabel: "cuisine_type", score: 0, nextRoundID: "A Dining Experience" },
    ],

    'A Dining Experience': [
      { id: 10, name: "Fine Dining", roundLabel: "experience", score: 0, nextRoundID: "" },
      { id: 11, name: "Contemporary", roundLabel: "experience", score: 0, nextRoundID: "" },
      { id: 12, name: "Fast Food", roundLabel: "experience", score: 0, nextRoundID: "" },
      { id: 13, name: "Buffet", roundLabel: "experience", score: 0, nextRoundID: "" },
      { id: 14, name: "All Day Breakfast", roundLabel: "experience", score: 0, nextRoundID: "" },
      { id: 15, name: "Gastropub", roundLabel: "experience", score: 0, nextRoundID: "" },
    ],
    
  };

  return (
    <RoundsContext.Provider value={initialRounds} >
      {children}
    </RoundsContext.Provider>
  );
};

export const useRounds = () => useContext(RoundsContext);