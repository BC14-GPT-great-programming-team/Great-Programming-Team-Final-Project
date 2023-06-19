import React, { createContext, useContext } from 'react';

const RoundsContext = createContext();

export const RoundsProvider = ({ children }) => {



const initialRounds = {
    'An Activity': [
      { id: 1, name: "Restaurant", roundLabel: "venue_type", score: 0, nextRoundID: "A Cuisine" },
      { id: 2, name: "Cinema", roundLabel: "venue_type", score: 0, nextRoundID: "A Genre" },
      { id: 3, name: "Bar", roundLabel: "venue_type", score: 0, nextRoundID: "" },
    ],
    'A Cuisine': [
      { id: 4, name: "Mexican", roundLabel: "cuisine_type", score: 0, nextRoundID: "" },
      { id: 5, name: "Chinese", roundLabel: "cuisine_type", score: 0, nextRoundID: "" },
      { id: 6, name: "Italian", roundLabel: "cuisine_type", score: 0, nextRoundID: "" },
      { id: 7, name: "Indian", roundLabel: "cuisine_type", score: 0, nextRoundID: "" },
      { id: 8, name: "Burger", roundLabel: "cuisine_type", score: 0, nextRoundID: "" },
      { id: 9, name: "Thai", roundLabel: "cuisine_type", score: 0, nextRoundID: "" },
    ],
    'A Genre': [
        { id: 4, name: "Thriller", roundLabel: "genre", score: 0, nextRoundID: "" },
        { id: 5, name: "Romance", roundLabel: "genre", score: 0, nextRoundID: "" },
        { id: 6, name: "Comedy", roundLabel: "genre", score: 0, nextRoundID: "" },
        { id: 7, name: "Horror", roundLabel: "genre", score: 0, nextRoundID: "" },
        { id: 8, name: "Action", roundLabel: "genre", score: 0, nextRoundID: "" },
        { id: 9, name: "Drama", roundLabel: "genre", score: 0, nextRoundID: "" },
      ],
  };

  return (
    <RoundsContext.Provider value={{rounds: initialRounds}} >
      {children}
    </RoundsContext.Provider>
  );
};

export const useRounds = () => useContext(RoundsContext);