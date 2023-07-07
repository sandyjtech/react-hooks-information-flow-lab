import React from 'react';

function Header({onDarkModeClick, isDarkMode}){
    function newMode(){
     return   isDarkMode ? "Dark" : "Light"
    }
    return (
        <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {newMode()} Mode
        </button>
      </header>
    )
}
//Header
export default Header;
