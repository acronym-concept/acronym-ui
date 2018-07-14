import React from 'react';
import './app.css';

const App = () => (
  <div className="nav">
    <div className="logo">
      <a href="/">
        acronym
      </a>
    </div>

    <div className="selector">
      <ul id="select">

        <li>
          <a href="/">
            img
          </a>
        </li>

        <li>
          <a href="/">
            text
          </a>
        </li>
      </ul>
    </div>

    <div className="nav__links">
      <ul id="links">

        <li>
          <a href="/">
            Login
          </a>
        </li>

        <li>
          <a href="/">
            Sign up
          </a>
        </li>

        <li>
          <a href="/">
            Cart (0)
          </a>
        </li>

      </ul>
    </div>
  </div>
);

export default App;
