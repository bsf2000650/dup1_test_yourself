import React, { useState } from 'react';
import './MCQSelector.css'; // You can import your own CSS styles
import mcqs from './mcqs'; // Your array of MCQs
import InputPaperHeaderDetails from './components/InputPaperHeaderDetails'

const MCQSelector = () => {
  const [selectedMCQs, setSelectedMCQs] = useState([]);
  const [showShortQuestionSection, setShowShortQuestionSection] = useState(true);
  const [showMCQSection, setShowMCQSection] = useState(true);
  const [doneButton, setDoneButton] = useState(true);
  const [printBtn,setPrintBtn] = useState(true);

  const handleMCQSelection = (index) => {
    if (!selectedMCQs.includes(index)) {
      setSelectedMCQs([...selectedMCQs, index]);
    }
  };

  const handleMCQDeselection = (index) => {
    const updatedSelectedMCQs = selectedMCQs.filter((selectedIndex) => selectedIndex !== index);
    setSelectedMCQs(updatedSelectedMCQs);
  };

  const handleClearSelection = () => {
    setSelectedMCQs([]);
  };

  const toggleMCQSection = () => {
    setShowShortQuestionSection(!showShortQuestionSection);
  };

  // const handleDoneClick = () => {
  //   setDoneButton(!doneButton);
  // };

  const handlePrint = () => {
    const printButton = document.getElementById('printButton');
    const doneBtn = document.getElementById('doneBtn');
    printButton.style.display = 'none'; // Hide the print button before printing
    doneBtn.style.display = 'none'; // Hide the print button before printing
    window.print();
    printButton.style.display = 'block'; // Show the print button after printing
    doneBtn.style.display = 'block'; // Show the print button after printing
  };

  return (
    <div>
    <InputPaperHeaderDetails />
    <div className='mcqs-paper'>
    <div className={doneButton ? 'display' : 'hide'}>
      {showShortQuestionSection && (
        <div>
          <h2 className='choose-best-answer'>Select MCQs from the following</h2>
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
                <ul className='mcqs-options'>
                  {mcq.options.map((option, optionIndex) => (
                    <li key={optionIndex}>{option}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
      <button id='doneBtn' className='mcq-generate-btn' onClick={toggleMCQSection}>
            {showShortQuestionSection ? 'Done' : 'Modify'}
      </button>
      {/* <button className='mcq-generate-btn' onClick={handleDoneClick}>Done</button> */}
      </div>
      <div className='selected-mcqs'>
        <h3>Choose the best answer :</h3>
        <ol>
          {selectedMCQs.map((index, serialNumber) => (
            <li key={index}>
              {`${serialNumber + 1}. ${mcqs[index].question}`}
              <ul className='mcqs-options'>
                {mcqs[index].options.map((option, optionIndex) => (
                  <li key={optionIndex}>{option}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    <button id="printButton" className="mcq-generate-btn" onClick={handlePrint}>
  Print
</button>
</div>
    </div>
  );
};

export default MCQSelector;
