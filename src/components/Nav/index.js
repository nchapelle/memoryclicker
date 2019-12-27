import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <ul>
        <li className="brand">
          <a className="navbar-brand" href="/">
            Memory Clicky Game
          </a>
        </li>
        <li className="message"> 
          Message Goes Here Correct / Incorrect
        </li>
        <li className="HighScores">
        Your Score= X and High Score = Z
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
