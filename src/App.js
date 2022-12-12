import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project is coded by Natalia Peppi and it is
          <a
            href="https://github.com/Nataliapeppi/weather-react-project"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            opened-sourced
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}
