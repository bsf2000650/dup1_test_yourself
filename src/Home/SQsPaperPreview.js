import React from 'react';
import SQsTemplate from '../images/short_questions_template.PNG';
import './PaperPreview.css';

const SQsPaperPreview = () => {
  return (
    <>
    <div className='paperPreview'>
          <h1>Short Questions Paper Preview</h1>
          <img src={SQsTemplate}/>
    </div>
    </>
  )
}

export default SQsPaperPreview
