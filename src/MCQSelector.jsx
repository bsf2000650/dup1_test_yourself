import React, { useState } from 'react';
import './MCQSelector.css';
import mcqs from './mcqs'; // Your array of MCQs

const MCQSelector = ({ onMCQSelect }) => {
  const [selectedMCQs, setSelectedMCQs] = useState([]);

  const handleMCQSelection = (index) => {
    if (!selectedMCQs.includes(index)) {
      setSelectedMCQs([...selectedMCQs, index]);
    }
  }

  const handleMCQDeselection = (index) => {
    const updatedSelectedMCQs = selectedMCQs.filter((selectedIndex) => selectedIndex !== index);
    setSelectedMCQs(updatedSelectedMCQs);
  };

  return (
    <div>
      <h1>MCQ Selector</h1>
      <h2>Available MCQs:</h2>
      <ul>
        {mcqs.map((mcq, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={selectedMCQs.includes(index)}
                onChange={() =>
                  selectedMCQs.includes(index)
                    ? handleMCQDeselection(index)
                    : handleMCQSelection(index)
                }
              />
              {mcq.question}
            </label>
          </li>
        ))}
      </ul>
      <button className='mcq-generate-btn' onClick={() => onMCQSelect(selectedMCQs)}>Generate MCQS</button>
    </div>
  );
};

export default MCQSelector;
