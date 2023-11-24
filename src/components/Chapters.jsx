// Chapters.js
import React, { useState } from 'react';
import PlainScene from './PlainScene';
import DialogueScene from './DialogueScene';
import PlayerInputScene from './PlayerInputScene';
import '../App.css'

const Chapters = ({ story }) => {
  const [currentScene, setCurrentScene] = useState('scene1');

  const handleChoiceClick = (nextScene) => {
    setCurrentScene(nextScene);
  };

  const handleInputSubmit = (inputValue) => {
    // Handle the user input, and optionally update state or perform other actions
    console.log('User input:', inputValue);
  };

  const renderScene = () => {
    const currentSceneData = story[currentScene];

    switch (currentSceneData.type) {
      case 'plain':
        return (
          <PlainScene
            text={currentSceneData.text}
            choices={currentSceneData.choices}
            handleChoiceClick={handleChoiceClick}
          />
        );
      case 'dialogue':
        return (
          <DialogueScene
            text={currentSceneData.text}
            person={currentSceneData.person}
            choices={currentSceneData.choices}
            handleChoiceClick={handleChoiceClick}
          />
        );
        case 'playerinput':
          return (
            <PlayerInputScene
              component={currentSceneData.component}
              choices={currentSceneData.choices}
            handleChoiceClick={handleChoiceClick}
              
            />
          );
      default:
        return null;
    }
  };
  const calculateProgress = () => {
    const sceneKeys = Object.keys(story);
    const currentIndex = sceneKeys.indexOf(currentScene);
    const totalScenes = sceneKeys.length;
    const progress = (currentIndex / (totalScenes - 1)) * 100;
    return Math.min(progress, 100); // Ensure progress doesn't exceed 100%
  };

  return (
    <div className="chapters">
      <div className="story-container">
        <h1>Interactive Story</h1>
        {renderScene()}
        <div className="progress-bar-container">
          <div
            className="progress-bar"
            style={{ width: `${calculateProgress()}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Chapters;
