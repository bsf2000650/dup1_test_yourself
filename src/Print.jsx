import React, { useState } from 'react';
import MCQSelector from './MCQSelector';
import SelectedMCQs from './SelectedMCQs';
import ShortQuestionSelector from './ShortQuestionSelector';
import './ShortQuestionSelector.css';
import SelectedShortQuestions from './SelectedShortQuestion';

function App() {
  const [selectedMCQs, setSelectedMCQs] = useState([]);
  const [selectedShortQuestions, setSelectedShortQuestions] = useState([]);
  const [printing, setPrinting] = useState(false);

  const handleMCQSelect = (selectedIndices) => {
    setSelectedMCQs(selectedIndices);
  };

  const handleShortQuestionSelect = (selectedIndices) => {
    setSelectedShortQuestions(selectedIndices);
  };

  const handlePrint = () => {
    setPrinting(true);
    setTimeout(() => {
      window.print();
      setPrinting(false);
    }, 100);
  };

  return (
    <div className="App">
      {!printing && (
        <div>
          <MCQSelector onMCQSelect={handleMCQSelect} />
          <ShortQuestionSelector onShortQuestionSelect={handleShortQuestionSelect} />
        </div>
      )}

      {selectedMCQs.length > 0 && selectedShortQuestions.length > 0 && (
        <div>
          <SelectedMCQs selectedIndices={selectedMCQs} />
          <SelectedShortQuestions selectedIndices={selectedShortQuestions} />
        </div>
      )}

      {selectedMCQs.length > 0 && selectedShortQuestions.length > 0 && !printing && (
        <button className='print-btn' onClick={handlePrint}>Print Paper</button>
      )}
    </div>
  );
}

export default App;
