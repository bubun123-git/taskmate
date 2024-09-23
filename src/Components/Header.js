import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import "/Users/swapnasaritmallick/Desktop/Practice/Taskmate/taskmate/src/index.css";

const Header = () => {
  const [theme, setTheme] = useState("light");

  // Apply the selected theme as a class to the document's root element
  useEffect(() => {
    // Remove previously added theme classes (if any)
    document.documentElement.className = ""; 
    // Add the current theme as a class to the html element
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Taskmate Logo" />
        <span>Taskmate</span>
        <div className="themeSelector">
          <span
            onClick={() => setTheme("light")}
            className={theme === "light" ? "light activeTheme" : "light"}
          ></span>
          <span
            onClick={() => setTheme("medium")}
            className={theme === "medium" ? "medium activeTheme" : "medium"}
          ></span>
          <span
            onClick={() => setTheme("dark")}
            className={theme === "dark" ? "dark activeTheme" : "dark"}
          ></span>
          <span
            onClick={() => setTheme("gOne")}
            className={theme === "gOne" ? "gOne activeTheme" : "gOne"}
          ></span>
          <span
            onClick={() => setTheme("gTwo")}
            className={theme === "gTwo" ? "gTwo activeTheme" : "gTwo"}
          ></span>
          <span
            onClick={() => setTheme("gThree")}
            className={theme === "gThree" ? "gThree activeTheme" : "gThree"}
          ></span>
        </div>
      </div>
    </header>
  );
};

export default Header;