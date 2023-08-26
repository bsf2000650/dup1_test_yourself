import React, { useState } from 'react';
import MCQSelector from './MCQSelector';
import SelectedMCQs from './SelectedMCQs';


function QuestionSection() {
  const [selectedMCQs, setSelectedMCQs] = useState([]);
  const [printing, setPrinting] = useState(false);

  const handleMCQSelect = (selectedIndices) => {
    setSelectedMCQs(selectedIndices);
  };

  const handlePrint = () => {
    setPrinting(true);
    setTimeout(() => {
      window.print();
      setPrinting(false);
    }, 100); 
  };

  return (
    <>
    <div>
      {!printing && (
        <MCQSelector onMCQSelect={handleMCQSelect} />
      )}
      {selectedMCQs.length > 0 && !printing && (
        <button onClick={handlePrint}>Print Selected MCQs</button>
      )}
      {selectedMCQs.length > 0 && (
        <SelectedMCQs selectedIndices={selectedMCQs} />
      )}




    </div>
    </>
  );
}

export default QuestionSection;
