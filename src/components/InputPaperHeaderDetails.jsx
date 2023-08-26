import React, { useState } from 'react'
import SetInput from './SetInput';
import GetInput from './GetInput';

const InputPaperHeaderDetails = () => {

  const [showInput, setShowInput] = useState(true);

    const toggleInput = () => {
        setShowInput(!showInput);
    };

  return (
    <>
      <div>
            {/* <button onClick={toggleInput}>Toggle Input</button> */}
            {showInput && <GetInput />}
            <SetInput />
        </div>      
    </>
  )
}

export default InputPaperHeaderDetails
