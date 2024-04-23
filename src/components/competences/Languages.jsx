import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Javacript", xp: 1.5 },
      { id: 2, value: "Java", xp: 0.9 },
      { id: 3, value: "Php", xp: 0.8 },
    ],
    frameworks: [
      { id: 1, value: "React", xp: 1.5 },
      { id: 3, value: "Angular", xp: 0.9 },
      { id: 4, value: "Figma", xp: 0.5 },
    ],
  };


  render() {
    let { languages, frameworks } = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="langages"
        />

        <ProgressBar
          languages={frameworks}
          title="frameworks & bibliothèques"
          className=" frameworkDisplay"
        />
      </div>
    );
  }
}

export default Languages;
