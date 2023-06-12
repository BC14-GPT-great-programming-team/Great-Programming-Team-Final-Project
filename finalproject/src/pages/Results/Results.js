import React from 'react';
import { useHistory } from 'react-router-dom';

const ResultsScreen = ({ rounds, setRounds }) => {
  const history = useHistory();

  const calculateWinner = (roundOptions) => {
    let maxScore = 0;
    let winningOption = null;

    roundOptions.forEach((option) => {
      if (option.score > maxScore) {
        maxScore = option.score;
        winningOption = option;
      }
    });

    return winningOption;
  };

  const handleNext = () => {
    if (rounds.length > 1) {
      const remainingRounds = rounds.slice(1);
      setRounds(remainingRounds);
      history.push('/');
    } else {
      // No more rounds, navigate to a final page or do something else
      history.push('/final-page');
    }
  };

  const currentRound = rounds[0];
  const winner = calculateWinner(currentRound);

  return (
    <div>
      <h1>Results Page</h1>
      <p>Winner: {winner ? winner.name : 'No winner'}</p>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default ResultsScreen;