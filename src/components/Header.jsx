import React, { useState } from 'react';
import './Buttons.css';
import './Header.css';

const Header = () => {
  const [day, setDay] = useState(
    JSON.parse(localStorage.getItem('my-day') || 1)
  );

  const increaseDay = () => {
    if (day > 0 && day < 100) {
      localStorage.setItem('my-day', JSON.stringify(day + 1));
      setDay(day => day + 1);
    }
  };
  const decreaseDay = () => {
    if (day > 1 && day <= 100) {
      localStorage.setItem('my-day', JSON.stringify(day - 1));
      setDay(day => day - 1);
    }
  };

  return (
    <div className="header">
      <div className="container">
        <h2 className="title">
          <span className="title-word title-word-1">100</span>
          <span className="title-word title-word-2">Days</span>
          <span className="title-word title-word-3">Of</span>
          <span className="title-word title-word-4">Code</span>
        </h2>
      </div>

      <h2>Saturday, May 28 2022 - Monday, September 5 2022</h2>

      <h1>Day : {day} </h1>
      <div className="buttons">
        <button className="cybr-btn" onClick={decreaseDay}>
          Day<span aria-hidden>-</span>
          <span aria-hidden className="cybr-btn__glitch">
            -
          </span>
          <span aria-hidden className="cybr-btn__tag">
            -
          </span>
        </button>
        <button className="cybr-btn" onClick={increaseDay}>
          Day<span aria-hidden>+</span>
          <span aria-hidden className="cybr-btn__glitch">
            +
          </span>
          <span aria-hidden className="cybr-btn__tag">
            +
          </span>
        </button>
      </div>
      <h3>Time Left : </h3>
    </div>
  );
};

export default Header;
