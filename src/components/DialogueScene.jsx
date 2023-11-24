import React from "react";
const DialogueScene = ({ text, person, choices, handleChoiceClick }) => (
    <div>
      <img src={`images/${person}.png`} alt={person} />
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
  export default DialogueScene