import React, {useState} from 'react';

const GetInput = () => {

    const [instituteName,setInstituteName] = useState('');
    const [session,setSession] = useState('');
    const [paper,setPaper] = useState('');
    const [paperCode,setPaperCode] = useState('');
    const [paperType, setPaperType] = useState('');
    const [time,setTime] = useState('');
    const [maxMarks, setMaxMarks] = useState();

    const [showInput,setShowInput] = useState(true)

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

    const toggleSections = () => {
        setShowInput(!showInput);
    }
    

  return (
    <>
    { showInput ? (
        <>
        <div className='getInput'>
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
        <button onClick={toggleSections}>Show Input</button>
        </>) : (
        <div className='setInput'>
            <h2>{instituteName}</h2>
            <h2>{session}</h2>
            <h2>{paper}</h2>
            <h2>{paperCode}</h2>
            <h2>{time}</h2>
            <h2>{paperType}</h2>
            <h2>{maxMarks}</h2>
        </div> )
    }
        {/* <SetInput 
            instituteName={instituteName}
            session={session}
            paper={paper}
            paperCode={paperCode}
            paperType={paperType}
            time={time}
            maxMarks={maxMarks}
         /> */}
    </>
  )
}

export default GetInput;
