import React from 'react'

const Header = (props) => {
  return (
    <div>
      <header className="app-header">
        <h2>{props.text}</h2>
      
      </header>
    </div>
  );
};

export default Header