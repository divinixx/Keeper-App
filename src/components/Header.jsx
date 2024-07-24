import React from 'react';

function Header({ darkMode, toggleDarkMode }) {
  return (
    <header>
      <h1>Keeper</h1>
      <button onClick={toggleDarkMode} className="toggle-btn">
        {darkMode ? '☀️' : '🌙'}
      </button>
    </header>
  );
}

export default Header;