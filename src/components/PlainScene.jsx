import React from "react";
const PlainScene = ({ text, choices, handleChoiceClick }) => (
    <div>
      <p>{text}</p>
      <div className="choices">
        {choices.map((choice, index) => (
          <button key={index} onClick={() => handleChoiceClick(choice.nextScene)}>
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
  export default PlainScene