import React from 'react';
import mcqs from './mcqs'; // Your array of MCQs

const SelectedMCQs = ({ selectedIndices }) => {
  return (
    <div>
      <h1>Selected MCQs for Printing</h1>
      {selectedIndices.map((index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h2>Question {index + 1}</h2>
          <p>{mcqs[index].question}</p>
          <ul>
            {mcqs[index].options.map((option, optionIndex) => (
              <li key={optionIndex}>{option}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SelectedMCQs;
