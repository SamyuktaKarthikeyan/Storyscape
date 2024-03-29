// Chapters.js
import React, { useState } from 'react';
import PlainScene from './PlainScene';
import DialogueScene from './DialogueScene';
import PlayerInputScene from './PlayerInputScene';
import '../App.css'
import { useSelector } from 'react-redux';

const Chapters = ({ story }) => {
  const username = useSelector(state => state.username);
  const [currentScene, setCurrentScene] = useState('scene1');

  const handleChoiceClick = (nextScene) => {
    console.log(username)
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
            background={currentSceneData.background}
          />
        );
      case 'dialogue':
        return (
          <DialogueScene
            text={currentSceneData.text}
            person={currentSceneData.person}
            choices={currentSceneData.choices}
            handleChoiceClick={handleChoiceClick}
            background={currentSceneData.background}

          />
        );
        case 'playerinput':
          return (
            <PlayerInputScene
              component={currentSceneData.component}
              choices={currentSceneData.choices}
            handleChoiceClick={handleChoiceClick}
            background={currentSceneData.background}
              
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
        {renderScene()}
        </div>
        <div className="progress-bar-container">
          <div
            className="progress-bar"
            style={{ width: `${calculateProgress()}%` }}
          ></div>
        </div>
    </div>
  );
};

export default Chapters;
