import React from 'react';
import MCQsAndSQsTemplate from '../images/mcqs_and_short_questions_paper_template.png';
import './PaperPreview.css';

const MCQsAndSQsPaperPreview = () => {
  return (
    <>
        <div className='paperPreview'>
          <h1>MCQs and Short Questions Paper</h1>
          <img src={MCQsAndSQsTemplate}/>
        </div>
    </>
  )
}

export default MCQsAndSQsPaperPreview
