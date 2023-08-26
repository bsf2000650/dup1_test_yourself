import React from 'react';
import shortQuestions from './shortQuestions'; // Your array of short questions

const SelectedShortQuestions = ({ selectedIndices }) => {
  return (
    <div>
      <h1>Selected Short Questions for Printing</h1>
      {selectedIndices.map((index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h2>Question {index + 1}</h2>
          <p>{shortQuestions[index]}</p>
        </div>
      ))}
    </div>
  );
};

export default SelectedShortQuestions;
