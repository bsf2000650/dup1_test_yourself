import React, { useState } from 'react';
import './MCQSelector.css'; // You can import your own CSS styles
import mcqs from './mcqs'; // Your array of MCQs
import InputPaperHeaderDetails from './components/InputPaperHeaderDetails'
import MCQsPDFFile from './components/MCQsPDFFile';
import {PDFDownloadLink, StyleSheet} from '@react-pdf/renderer'

const styles = StyleSheet.create({
  pdfLink : {
    textDecoration : 'none',
    width : '10%'
  }
})

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
      <PDFDownloadLink
      style={styles.pdfLink}
       document={<MCQsPDFFile 
                      selectedMCQs={selectedMCQs} 
                      />} 
                      
                      fileName="Paper 1">
       {({loading})=>(loading ? <button>Preparing for Download...</button> : <button id='saveAsPdfBtn' className="pdf-generate-btn">Save As PDF</button>)}
    </PDFDownloadLink>
    <button id="printButton" className="mcq-generate-btn" onClick={handlePrint}>
  Print
</button>
</div>
    </div>
  );
};

export default MCQSelector;
