import React from "react";
import '../styles/Chapters.css'
const PlainScene = ({ text, choices, handleChoiceClick, background }) => (
    <div className="plain" style={{  backgroundImage: `url(${background})`, backgroundSize:"cover",backgroundRepeat:"no-repeat" }}>
      <div className="plaincard">
      <p>{text}</p>
      <div className="choices">
        {choices.map((choice, index) => (
          <button key={index} onClick={() => handleChoiceClick(choice.nextScene)}>
            {choice.text}
          </button>
        ))}
      </div>
      
      </div>
    </div>
  );
  export default PlainScene