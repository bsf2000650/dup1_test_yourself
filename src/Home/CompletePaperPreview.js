import React from 'react';
import CompletePaper from '../images/complete_paper_template.png';
import './PaperPreview.css'

const CompletePaperPreview = () => {
  return (
    <>
        <div className='paperPreview'>
          <h1>Complete Paper</h1>
          <img src={CompletePaper}/>
        </div>
    </>
  )
}

export default CompletePaperPreview
