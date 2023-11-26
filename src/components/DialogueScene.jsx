import React from "react";
import Typewriter from 'typewriter-effect';

const DialogueScene = ({ text, person, choices, handleChoiceClick, background }) => (
  <div className="plain" style={{  backgroundImage: `url(${background})`, backgroundSize:"cover",backgroundRepeat:"no-repeat" }}>
      <img src={`src/assets/${person}.jpg`} alt={person} className="dialogueimg"/>
    <div className="plaincard">
<Typewriter
  options={{
    strings: text,
    autoStart: true,
    loop: false,
    cursor:null,
    delay:50,
  }}
/>
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
  export default DialogueScene