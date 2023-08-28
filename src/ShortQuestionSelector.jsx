import React, { useState } from 'react';
import './ShortQuestionSelector.css'; // Import your CSS styles
import shortQuestions from './shortQuestions'; // Your array of short questions
import SQsPDFFile from './components/SQsPDFFile'
import InputPaperHeaderDetails from './components/InputPaperHeaderDetails';
import {PDFDownloadLink, StyleSheet} from '@react-pdf/renderer'

const styles = StyleSheet.create({
  pdfLink : {
    textDecoration : 'none',
    width : '10%'
  }
})


const ShortQuestionSelector = () => {
  const [selectedShortQuestions, setSelectedShortQuestions] = useState([]);
  const [showShortQuestionSection, setShowShortQuestionSection] = useState(true);
  const [doneButton, setDoneButton] = useState(true);

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

  const toggleMCQSection = () => {
    setShowShortQuestionSection(!showShortQuestionSection);
  };

  const handleDoneClick = () => {
    setDoneButton(!doneButton);
  };

  const handlePrint = () => {
    const printButton = document.getElementById('printButton');
    const doneBtn = document.getElementById('doneBtn');
    // const sqDoneBtn = document.getElementById('sqDoneBtn');
    const saveAsPdfBtn = document.getElementById('saveAsPdfBtn');
    
    printButton.style.display = 'none'; // Hide the print button before printing
    doneBtn.style.display = 'none'; // Hide the print button before printing
    // sqDoneBtn.style.display = 'none';
    saveAsPdfBtn.style.display = 'none';
    window.print();
    printButton.style.display = 'block'; // Show the print button after printing
    doneBtn.style.display = 'block'; // Show the print button after printing
    // sqDoneBtn.style.display = 'block';
    saveAsPdfBtn.style.display = 'block';
  };


  return (
    <div>
    <InputPaperHeaderDetails />
    <div className='mcqs-paper'>
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
      <button id='doneBtn' className='mcq-generate-btn' onClick={toggleMCQSection}>
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
      <PDFDownloadLink
      style={styles.pdfLink}
       document={<SQsPDFFile 
                      selectedShortQuestions={selectedShortQuestions} 
                      />} 
                      
                      fileName="Paper 1">
       {({loading})=>(loading ? <button >Preparing for Download...</button> : <button id='saveAsPdfBtn' className="pdf-generate-btn">Save As PDF</button>)}
    </PDFDownloadLink>
      <button id="printButton" className="mcq-generate-btn" onClick={handlePrint}>
       Print
      </button>
    </div>
    </div>
  );
};

export default ShortQuestionSelector;
