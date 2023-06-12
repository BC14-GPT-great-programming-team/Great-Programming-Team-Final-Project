


// george and robertos work
//PLAN:
//import react and react router DONE!!
//create function that returns JSX DONE!!
//   return:
//        selection choices component

//logic to update score variable when button is selected?DONE!!
// pass selection choices props down
//

import React, { useState } from 'react';

export default function VoteScreen() {
  const [score, setScore] = useState(0);

  function handleClick() {
    setScore(score + 1);
    console.log(score);
  }

  function handleNext() {
    setScore(0);
    console.log(score);
  }

  return (
    <div>
      <button className="option" onClick={handleClick}>
        Restaurant
      </button>
      <button className="next_button" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}