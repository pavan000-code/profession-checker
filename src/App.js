import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "👨‍⚖️": "Judge",
  "👩‍🔬": "Scientist",
  "👮": "Officer",
  "️👩‍⚕️": "Doctor",
  "👨‍✈️": "Pilot",
  "👩‍🚒": "Firefighter",
  "👨‍🎤": "Singer",
  "👩‍💼": "Entrepreneur",
  "🕵️‍♂️": "Detective",
  "👩‍🚀": "Astronaut",
  "👨‍🍳": "Chef",
  "👩🏻‍🎨": "Painter"
};
var wordDictionary = {
  Judge: "👨‍⚖️",
  Scientist: "👩‍🔬‍",
  Officer: "👮",
  Doctor: "👩‍⚕️",
  Pilot: "👨‍✈️",
  Firefighter: "👩‍🚒",
  Singer: "👨‍🎤",
  Entrepreneur: "👩‍💼",
  Detective: "️️️️️🕵️‍♂️",
  Astronaut: "👩‍🚀",
  Chef: "👨‍🍳",
  Painter: "👩🏻‍🎨"
};
var knownEmojis = Object.keys(emojiDictionary);

export default function App() {
  const [prof, setProf] = useState("");
  const [meaning, setMeaning] = useState("");
  function inputChangeHandler(event) {
    var newProf = event.target.value;
    var newMeaning = "";

    if (newProf in emojiDictionary) {
      setProf(newProf);
      newMeaning = emojiDictionary[newProf];
    } else if (newProf in wordDictionary) {
      var profPic = wordDictionary[newProf];
      setProf(profPic);
      newMeaning = newProf;
    } else {
      newProf = event.target.value;
      if (event.target.value === "") {
        setProf(newProf);
        newMeaning = "Enter a value";
      } else {
        setProf(newProf);
        newMeaning = "Not Available";
      }
    }
    setMeaning(newMeaning);
  }
  function emojiClickHandler(emoji) {
    setProf(emoji);
    var newMeaning = emojiDictionary[emoji];
    setMeaning(newMeaning);
  }
  return (
    <div className="pageWrap">
      <nav className="navigation container">
        <div className="nav-items">
          <div className="nav-repo">
            <a
              className="nav-link"
              href="https://github.com/dev-enforced/profession-emoji-check"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-github"></i>
            </a>
          </div>
          <h1 className="nav-title">PROFESSION CHECK ✔</h1>
        </div>
      </nav>

      <div className="main-content">
        <div className="main-intro">
          <h2>Enter the emoji on Input and get its meaning</h2>
        </div>
        <div className="main-body">
          <div className="main-input">
            <p>
              <label htmlFor="Emoji input">INPUT 👇🏻</label>
              <input
                onChange={inputChangeHandler}
                id="inp"
                type="text"
                placeholder="Enter your emoji here"
              ></input>
            </p>
          </div>
          <div className="main-output">
            <h2>
              Emoji / Word Entered:
              <br />
              {prof}
            </h2>
            <br />
            <h2>
              Meaning/Emoji:
              <br />
              {meaning}
            </h2>
          </div>
          <div className="main-options">
            {knownEmojis.map((emoji) => {
              return (
                <span
                  className="main-card"
                  onClick={() => emojiClickHandler(emoji)}
                >
                  {emoji}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-tagline">
          <h3>Made with love by Pavan Kalyan.Available on:</h3>
        </div>
        <ul className="footer-socials">
          <li className="footer-inline">
            <a
              className="footer-links"
              href="https://github.com/pavan000-code"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-github"></i>
            </a>
          </li>
          <li className="footer-inline">
            <a
              className="footer-links"
              href="https://twitter.com/pavankalyan002"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-twitter"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
