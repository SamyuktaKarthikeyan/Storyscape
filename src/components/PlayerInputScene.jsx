// PlayerInputScene.js
import React, { useState } from 'react';

const PlayerInputScene = ({  component, choices, handleChoiceClick, background }) => {
  const DynamicComponent = component;

  return (
    <div className="plain" style={{  backgroundImage: `url(${background})`, backgroundSize:"cover",backgroundRepeat:"no-repeat" }}>
      {DynamicComponent ? (
        <DynamicComponent choices={choices} handleChoiceClick={handleChoiceClick}/>
      ) : (
        <p>Loading...</p>
      )}
      
    </div>
  );
};

export default PlayerInputScene;
