// PlayerInputScene.js
import React, { useState } from 'react';

const PlayerInputScene = ({  component, choices, handleChoiceClick }) => {
  const DynamicComponent = component;

  return (
    <div>
      {DynamicComponent ? (
        <DynamicComponent choices={choices} handleChoiceClick={handleChoiceClick}/>
      ) : (
        <p>Loading...</p>
      )}
      
    </div>
  );
};

export default PlayerInputScene;
