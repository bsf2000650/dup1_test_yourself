import React from 'react';
import shortQuestions from './shortQuestions'; // Your array of short questions

const SelectedShortQuestions = ({ selectedIndices }) => {
  const sortedSelectedIndices = [...selectedIndices].sort((a, b) => a - b);

  return (
    <div>
      <h4>Short Questions</h4>
      {sortedSelectedIndices.map((index, serialNumber) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <p>{`Q${serialNumber + 1}. ${shortQuestions[index]}`}</p>
        </div>
      ))}
    </div>
  );
};

export default SelectedShortQuestions;

