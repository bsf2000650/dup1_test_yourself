import React, {useState} from 'react';


const Input = () => {

    const [instituteName,setInstituteName] = useState('');
    const [session,setSession] = useState('');
    const [paper,setPaper] = useState('');
    const [paperCode,setPaperCode] = useState('');
    const [paperType, setPaperType] = useState('');
    const [time,setTime] = useState('');
    const [maxMarks, setMaxMarks] = useState();

    const handleInstChange = (e) => {
        e.preventDefault();
        setInstituteName(e.target.value)
    }

    const handleSessChange = (e) => {
        e.preventDefault();
        setSession(e.target.value);
    }

    const handlePaperChange = (e) => {
        e.preventDefault();
        setPaper(e.target.value);
    }

    const handlePapCodeChange = (e) => {
        e.preventDefault();
        setPaperCode(e.target.value);
    }

    const handleTimeChange = (e) => {
        e.preventDefault();
        setTime(e.target.value);
    }

    const handleMaxMarksChange = (e) => {
        e.preventDefault();
        setMaxMarks(e.target.value);
    }

    const handlePapTypeChange = (e) => {
        e.preventDefault();
        setPaperType(e.target.value);
    }
    

  return (
    <>
        <div className='input'>
            <h1>Test YourSelf</h1>
            <p>Let us help you automating test creation with just few clicks</p>
            <h1>Enter paper header details</h1>
            
            <label htmlFor='instituteName'>Institute Name</label>
            <input 
                type="text"
                id='instituteName'
                value={instituteName}
                onChange={handleInstChange}
             /> <br /> 
             <label htmlFor="session">Session</label>
             <input 
                type="text"
                id='session'
                value={session}
                onChange={handleSessChange} /> <br />
             <label htmlFor="paper">Paper Title</label>
             <input 
                type="text"
                id='paper'
                value={paper}
                onChange={handlePaperChange} /> <br />
             <label htmlFor="paperCode">Paper Code</label>
             <input 
                type="text"
                id='paperCode'
                value={paperCode}
                onChange={handlePapCodeChange} /> <br />
             <label htmlFor="time">Time</label>
             <input 
                type="text"
                id='time'
                value={time}
                onChange={handleTimeChange} /> <br />

             <label htmlFor="paperType">Paper Type</label>
             <input 
                type="text"
                id='paperType'
                value={paperType}
                onChange={handlePapTypeChange} /> <br />

             <label htmlFor="maxMarks">Max Marks</label>
             <input 
                type="number"
                id='maxMarks'
                value={maxMarks}
                onChange={handleMaxMarksChange} /> <br />
        </div>
    </>
  )
}

export default Input
