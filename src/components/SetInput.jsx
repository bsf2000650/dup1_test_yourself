import React from 'react'

const SetInput = (props) => {
  return (
    <>
        <h2>{props.instituteName}</h2>
        <h2>{props.session}</h2>
        <h2>{props.paper}</h2>
        <h2>{props.paperCode}</h2>
        <h2>{props.time}</h2>
        <h2>{props.paperType}</h2>
        <h2>{props.maxMarks}</h2>
    </>
  )
}

export default SetInput
