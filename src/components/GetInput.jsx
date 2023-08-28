import React, { useState } from "react";
import "./GetInput.css";

const GetInput = () => {
  const [instituteName, setInstituteName] = useState("");
  const [session, setSession] = useState("");
  const [paper, setPaper] = useState("");
  const [paperCode, setPaperCode] = useState("");
  const [paperType, setPaperType] = useState("");
  const [time, setTime] = useState("");
  const [maxMarks, setMaxMarks] = useState();

  const [flag, setFlag] = useState(true);
  const [flag1, setFlag1] = useState(true);


  const handleInstChange = (e) => {
    e.preventDefault();
    setInstituteName(e.target.value);
  };

  const handleSessChange = (e) => {
    e.preventDefault();
    setSession(e.target.value);
  };

  const handlePaperChange = (e) => {
    e.preventDefault();
    setPaper(e.target.value);
  };

  const handlePapCodeChange = (e) => {
    e.preventDefault();
    setPaperCode(e.target.value);
  };

  const handleTimeChange = (e) => {
    e.preventDefault();
    setTime(e.target.value);
  };

  const handleMaxMarksChange = (e) => {
    e.preventDefault();
    setMaxMarks(e.target.value);
  };

  const handlePapTypeChange = (e) => {
    e.preventDefault();
    setPaperType(e.target.value);
  };

  const handleRemoveBorder = () => {
    setFlag(!flag);
  };

  const handleSessionBorder = () => {
    setFlag1(!flag1);
  }

  return (
    <>
      <>
        <div className="getInput">
          {/* Institute Name */}
          <div className="institute-div">
            <input
              type="text"
              id="instituteName"
              placeholder="Institute Name"
              value={instituteName}
              onChange={handleInstChange}
              className={flag ? "remove-border institute-name" : "show-border institute-name"}
            />
          </div>

          <br />

          <div className="outer-div">

            <div className="inner-div">   
            <div className="item">
           
            <label htmlFor="paper">Subject : </label>
            <input
              type="text"
              id="paper"
              placeholder="Computer Science/Biology"
              value={paper}
              onChange={handlePaperChange}
              className={flag ? "remove-border subject" : "show-border subject"}
            />
            </div>

            <div className="item">
            <label htmlFor="session">Session : </label>
            <input
              type="text"
              id="session"
              placeholder="2020-2024"
              value={session}
              onChange={handleSessChange}
              className={flag ? "remove-border" : "show-border"}
            />
            </div>

            <div className="item">
            <label htmlFor="paperCode">Paper Code : </label>
            <input
              type="text"
              id="paperCode"
              placeholder="CS2023"
              value={paperCode}
              onChange={handlePapCodeChange}
              className={flag ? "remove-border" : "show-border"}
            />
            </div>
            </div>
            
            <div className="inner-div2">
            <div className="item">
            <label htmlFor="time">Time : </label>
            <input
              type="text"
              id="time"
              placeholder="20 Mins"
              value={time}
              onChange={handleTimeChange}
              className={flag ? "remove-border" : "show-border"}
            />
            </div>
            
            <div className="item paper-type">
            <label htmlFor="paperType">Paper Type : </label>
            <input
              type="text"
              id="paperType"
              placeholder="Objective/Subjective"
              value={paperType}
              onChange={handlePapTypeChange}
              className={flag ? "remove-border" : "show-border"}
            />
            </div>
            
            <div className="item">
            <label htmlFor="maxMarks">Max Marks : </label>
            <input
              type="number"
              id="maxMarks"
              value={maxMarks}
              placeholder="20"
              onChange={handleMaxMarksChange}
              className={flag ? "remove-border" : "show-border"}
            />
            </div>
            
            </div>
          </div>
          {/* <button onClick={handleRemoveBorder}>{flag ? 'Show Border' : 'Remove Border'}</button> */}
        </div>
      </>
    </>
  );
};

export default GetInput;
