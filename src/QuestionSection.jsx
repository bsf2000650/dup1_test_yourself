import React, { useState } from 'react';
import './paper.css';
import mcqs from './mcqs';
import Print from './Print'

const QuestionSection = (props) => {

  return (
    <div>
      <div className='paper-boundary'>
        <div className="paper-header">
        {/*<h2>University of Education</h2>
            <div className='paper-header-detail'>
            <div className='item'>
                <h3>Sessioin : 2020-2024</h3>
                <h3 className='h3'>Paper : Computer Science</h3>
            </div>
            <div className='item'>
                <h3>Paper Code : IT1004</h3>
                <h3 className='h3'>Time : 15 mins</h3>
            </div>
            <div className='item'>
                <h3>Paper Type : Objective Type</h3>
                <h3 className='h3'>Max Marks : 20</h3>
            </div>
            </div> */}
            <h2>{props.instituteName}</h2>
            <h2>{props.session}</h2>
            <h2>{props.paper}</h2>
            <h2>{props.paperCode}</h2>
            <h2>{props.time}</h2>
            <h2>{props.paperType}</h2>
            <h2>{props.maxMarks}</h2>
        </div>
        <Print />
      </div>
    </div>
  )
}

export default QuestionSection
