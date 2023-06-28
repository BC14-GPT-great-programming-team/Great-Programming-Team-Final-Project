import React, { createContext, useContext } from "react";

const RoundsContext = createContext();

export const RoundsProvider = ({ children }) => {
  const initialRounds = {
    "An Activity": [
      {
        id: 1,
        name: "Restaurant",
        roundLabel: "venue_type",
        score: 0,
        nextRoundID: "A Time",
      },
      {
        id: 2,
        name: "Museum",
        roundLabel: "venue_type",
        score: 0,
        nextRoundID: "Exhibits",
      },
      {
        id: 3,
        name: "Bar",
        roundLabel: "venue_type",
        score: 0,
        nextRoundID: "Music",
      },
    ],

    "A Time": [
      {
        id: 82,
        name: "Breakfast",
        roundLabel: "time",
        score: 0,
        nextRoundID: "Breakfast",
      },
      {
        id: 9123,
        name: "Lunch",
        roundLabel: "time",
        score: 0,
        nextRoundID: "An Atmosphere",
      },
      {
        id: 10321,
        name: "Dinner",
        roundLabel: "time",
        score: 0,
        nextRoundID: "An Atmosphere",
      },
      {
        id: 6321,
        name: "Snack",
        roundLabel: "time",
        score: 0,
        nextRoundID: "",
      },
    ],

    "An Atmosphere": [
      {
        id: 4,
        name: "Family Friendly",
        roundLabel: "atmosphere",
        score: 0,
        nextRoundID: "A Cuisine",
      },
      {
        id: 5,
        name: "Romantic",
        roundLabel: "atmosphere",
        score: 0,
        nextRoundID: "A Cuisine",
      },
      {
        id: 6,
        name: "Live Music",
        roundLabel: "atmosphere",
        score: 0,
        nextRoundID: "A Cuisine",
      },
      {
        id: 7,
        name: "Outdoor",
        roundLabel: "atmosphere",
        score: 0,
        nextRoundID: "A Cuisine",
      },
    ],

    "A Cuisine": [
      {
        id: 10,
        name: "Mexican",
        roundLabel: "cuisine_type",
        score: 0,
        nextRoundID: "A Dining Experience",
      },
      {
        id: 11,
        name: "Chinese",
        roundLabel: "cuisine_type",
        score: 0,
        nextRoundID: "A Dining Experience",
      },
      {
        id: 12,
        name: "Italian",
        roundLabel: "cuisine_type",
        score: 0,
        nextRoundID: "A Dining Experience",
      },
      {
        id: 13,
        name: "Indian",
        roundLabel: "cuisine_type",
        score: 0,
        nextRoundID: "A Dining Experience",
      },
      {
        id: 14,
        name: "Burger",
        roundLabel: "cuisine_type",
        score: 0,
        nextRoundID: "A Dining Experience",
      },
      {
        id: 15,
        name: "Thai",
        roundLabel: "cuisine_type",
        score: 0,
        nextRoundID: "A Dining Experience",
      },
    ],

    "A Dining Experience": [
      {
        id: 16,
        name: "Fine Dining",
        roundLabel: "dining_experience",
        score: 0,
        nextRoundID: "",
      },
      {
        id: 17,
        name: "Casual",
        roundLabel: "dining_experience",
        score: 0,
        nextRoundID: "",
      },
      {
        id: 18,
        name: "Fast Food",
        roundLabel: "dining_experience",
        score: 0,
        nextRoundID: "",
      },
      {
        id: 19,
        name: "Buffet",
        roundLabel: "dining_experience",
        score: 0,
        nextRoundID: "",
      },
      {
        id: 21,
        name: "Gastropub",
        roundLabel: "dining_experience",
        score: 0,
        nextRoundID: "",
      },
    ],
    Breakfast: [
      {
        id: 22,
        name: "All Day Breakfast",
        roundLabel: "dining_experience",
        score: 0,
        nextRoundID: "",
      },
      {
        id: 23,
        name: "Gastropub",
        roundLabel: "dining_experience",
        score: 0,
        nextRoundID: "",
      },
    ],
    Exhibits: [
      {
        id: 24,
        name: "Modern Art",
        roundLabel: "museum_exhibits",
        score: 0,
        nextRoundID: "",
      },
      {
        id: 25,
        name: "Historical",
        roundLabel: "museum_exhibits",
        score: 0,
        nextRoundID: "",
      },
      {
        id: 26,
        name: "Science",
        roundLabel: "museum_exhibits",
        score: 0,
        nextRoundID: "",
      },
      {
        id: 27,
        name: "Nature",
        roundLabel: "museum_exhibits",
        score: 0,
        nextRoundID: "",
      },
      {
        id: 28,
        name: "Art",
        roundLabel: "museum_exhibits",
        score: 0,
        nextRoundID: "",
      },
    ],
    Music: [
      {
        id: 29,
        name: "Rock",
        roundLabel: "music_type",
        score: 0,
        nextRoundID: "",
      },
      {
        id: 30,
        name: "Pop",
        roundLabel: "music_type",
        score: 0,
        nextRoundID: "",
      },
      {
        id: 26,
        name: "Indie",
        roundLabel: "music_type",
        score: 0,
        nextRoundID: "",
      },
      {
        id: 31,
        name: "Jazz",
        roundLabel: "music_type",
        score: 0,
        nextRoundID: "",
      },
      {
        id: 32,
        name: "Blues",
        roundLabel: "music_type",
        score: 0,
        nextRoundID: "",
      },
      {
        id: 33,
        name: "RNB",
        roundLabel: "music_type",
        score: 0,
        nextRoundID: "",
      },
    ],
  };

  return (
    <RoundsContext.Provider value={initialRounds}>
      {children}
    </RoundsContext.Provider>
  );
};

export const useRounds = () => useContext(RoundsContext);
