import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome to Our Platform</h1>
        <p>Let Us Help you by Automating your Manual Test Generation</p>
      </header>
      <section className="main-content">
        <h2>Explore Our Features</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          consectetur libero ac metus bibendum, ac finibus felis eleifend.
        </p>
        <button>Learn More</button>
      </section>
      <h1>Choose Any of the Template</h1>
      <div className="additional-content">
        <Link to='/mcqsPaper' className="feature">
          <h3>MCQS</h3>
          <p>Create only MCQs paper.</p>
        </Link>
        <Link to='/sqsPaper' className="feature">
          <h3>Short Questions</h3>
          <p>Create only Short Question paper</p>
        </Link>
        <Link to='mcqsAndsqsPaper' className="feature">
          <h3>MCQS and Short Question</h3>
          <p>Create MCQS and Short Question paper</p>
        </Link>
        <Link to='completePaper' className="feature">
          <h3>Complete Paper</h3>
          <p>Create a Complete Paper.</p>
        </Link>
        </div>
    </div>
  );
};

export default HomePage;

