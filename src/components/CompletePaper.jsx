import React, { useState } from "react";
import mcqs from "../mcqs";
import shortQuestions from "../shortQuestions";
import InputPaperHeaderDetails from "./InputPaperHeaderDetails";
import QuestionSection from "../QuestionSection";
import "./CompletePaper.css";

const CompletePaper = (props) => {
  const [selectedMCQs, setSelectedMCQs] = useState([]);
  const [showShortQuestionSection, setShowShortQuestionSection] =
    useState(true);
  const [showMCQSection, setShowMCQSection] = useState(true);
  const [doneButton, setDoneButton] = useState(true);
  const [printBtn, setPrintBtn] = useState(true);

  const handleMCQSelection = (index) => {
    if (!selectedMCQs.includes(index)) {
      setSelectedMCQs([...selectedMCQs, index]);
    }
  };

  const handleMCQDeselection = (index) => {
    const updatedSelectedMCQs = selectedMCQs.filter(
      (selectedIndex) => selectedIndex !== index
    );
    setSelectedMCQs(updatedSelectedMCQs);
  };

  const handleClearSelection = () => {
    setSelectedMCQs([]);
  };

  const toggleMCQSection = () => {
    setShowShortQuestionSection(!showShortQuestionSection);
  };

  const [selectedShortQuestions, setSelectedShortQuestions] = useState([]);
  // const [showShortQuestionSection, setShowShortQuestionSection] = useState(true);
  // const [doneButton, setDoneButton] = useState(true);

  const handleShortQuestionSelection = (index) => {
    if (!selectedShortQuestions.includes(index)) {
      setSelectedShortQuestions([...selectedShortQuestions, index]);
    }
  };

  const handleShortQuestionDeselection = (index) => {
    const updatedSelectedShortQuestions = selectedShortQuestions.filter(
      (selectedIndex) => selectedIndex !== index
    );
    setSelectedShortQuestions(updatedSelectedShortQuestions);
  };

  // const toggleMCQSection = () => {
  //   setShowShortQuestionSection(!showShortQuestionSection);
  // };

  const handleDoneClick = () => {
    setDoneButton(!doneButton);
  };

  const handlePrint = () => {
    const printButton = document.getElementById('printButton');
    const doneBtn = document.getElementById('doneBtn');
    const sqDoneBtn = document.getElementById('sqDoneBtn');
    printButton.style.display = 'none'; // Hide the print button before printing
    doneBtn.style.display = 'none'; // Hide the print button before printing
    sqDoneBtn.style.display = 'none';
    window.print();
    printButton.style.display = 'block'; // Show the print button after printing
    doneBtn.style.display = 'block'; // Show the print button after printing
    sqDoneBtn.style.display = 'block';
  };

  return (
    <>
      <div className="complete-paper">

        <InputPaperHeaderDetails />

      {/* MCQs Section Starts */}
          {showShortQuestionSection && (
            <div>
              <h2 className="choose-best-answer">
                Select MCQs from the following
              </h2>
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
                    <ul className="mcqs-options">
                      {mcq.options.map((option, optionIndex) => (
                        <li key={optionIndex}>{option}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <button
            id="doneBtn"
            className="mcq-generate-btn"
            onClick={toggleMCQSection}
          >
            {showShortQuestionSection ? "Done" : "Modify"}
          </button>
          <div className="selected-mcqs">
            <h3>Choose the best answer :</h3>
            <ol>
              {selectedMCQs.map((index, serialNumber) => (
                <li key={index}>
                  {`${serialNumber + 1}. ${mcqs[index].question}`}
                  <ul className="mcqs-options">
                    {mcqs[index].options.map((option, optionIndex) => (
                      <li key={optionIndex}>{option}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
          {/* MCQs Section Ends Here */}

          {/* Short Questions Starts Here */}

          <div className={doneButton ? 'display' : 'hide'}>
      {showShortQuestionSection && (
        <div>
          <h2 className='short-questions'>Select Short Questions from the Following:</h2>
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
        </div>
      )}
      <button id='sqDoneBtn' className='mcq-generate-btn' onClick={toggleMCQSection}>
            {showShortQuestionSection ? 'Done' : 'Modify'}
      </button>
      {/* {doneButton && (
        <button className='mcq-generate-btn' onClick={handleDoneClick}>
          {doneButton ? 'Done' : 'Modify'}
        </button>
      )} */}
      </div>
      <div className='selected-short-questions'>
        <h3>Short Questions :</h3>
        <ol>
          {selectedShortQuestions.map((index, serialNumber) => (
            <li key={index}>
              {`${serialNumber + 1}. ${shortQuestions[index]}`}
            </li>
          ))}
        </ol>
      </div>

          {/* Short Questions Ends Here */}
          <button id="printButton" className="mcq-generate-btn" onClick={handlePrint}>
       Print
      </button>
      </div>
    </>
  );
};

export default CompletePaper;
