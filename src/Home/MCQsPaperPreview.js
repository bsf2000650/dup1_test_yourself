import React from 'react';
import MCQSTemplate from '../images/mcqs_paper_template.png';
import './PaperPreview.css';

const MCQsPaperPreview = () => {
  return (
    <>
        <div className='paperPreview'>
          <h1>MCQs Paper Template</h1>
          <img src={MCQSTemplate}/>
        </div>
    </>
  )
}

export default MCQsPaperPreview
