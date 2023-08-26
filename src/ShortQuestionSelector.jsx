import React, { useState } from 'react';
import './ShortQuestionSelector.css';
import shortQuestions from './shortQuestions'; 

const ShortQuestionSelector = ({ onShortQuestionSelect }) => {
  const [selectedShortQuestions, setSelectedShortQuestions] = useState([]);

  const handleShortQuestionSelection = (index) => {
    if (!selectedShortQuestions.includes(index)) {
      setSelectedShortQuestions([...selectedShortQuestions, index]);
    }
  }

  const handleShortQuestionDeselection = (index) => {
    const updatedSelectedShortQuestions = selectedShortQuestions.filter(
      (selectedIndex) => selectedIndex !== index
    );
    setSelectedShortQuestions(updatedSelectedShortQuestions);
  };

  return (
    <div>
      <h1>Short Question Selector</h1>
      <h2>Available Short Questions:</h2>
      <ul>
        {shortQuestions.map((question, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={selectedShortQuestions.includes(index)}
                onChange={() =>
                  selectedShortQuestions.includes(index)
                    ? handleShortQuestionDeselection(index)
                    : handleShortQuestionSelection(index)
                }
              />
              {question}
            </label>
          </li>
        ))}
      </ul>
      <button className='short-questions-generate-btn' onClick={() => onShortQuestionSelect(selectedShortQuestions)}>
        Generate Short Questions
      </button>
    </div>
  );
};

export default ShortQuestionSelector;
