import React,{useState}from "react";

function Header({onDarkModeClick}){
    const [isDarkMode, setIsDarkMode] = useState(false);

    function toggleDarkMode() {
      setIsDarkMode((isDarkMode) => !isDarkMode);
    }
    return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
    </div>)
}
export default Header