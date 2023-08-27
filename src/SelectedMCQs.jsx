import React from 'react';
import mcqs from './mcqs'; 
import './SelectedMCQs.css'

const SelectedMCQs = ({ selectedIndices }) => {
  const sortedSelectedIndices = [...selectedIndices].sort((a, b) => a - b);

  return (
    <div>
      <h4>Choose the best answer</h4>
      {sortedSelectedIndices.map((index, serialNumber) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <p>{serialNumber + 1}. {mcqs[index].question}</p>
          <ul className='mcqs-section'>
            {mcqs[index].options.map((option, optionIndex) => (
              <li className='options' key={optionIndex}>{option}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SelectedMCQs;

