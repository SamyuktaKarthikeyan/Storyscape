
import React, { useState } from 'react';
import './App.css';

const story = {
  start: {
    text: 'You find yourself in a dark room. What do you want to do?',
    choices: [
      { text: 'Look for a light switch', nextScene: 'lightSwitch' },
      { text: 'Open the door', nextScene: 'door' },
    ],
  },
  lightSwitch: {
    text: 'You find a light switch and turn it on. The room is now illuminated.',
    choices: [
      { text: 'Explore the room', nextScene: 'exploreRoom' },
      { text: 'Go back to the dark room', nextScene: 'start' },
    ],
  },
  exploreRoom: {
    text: 'You discover a key on the table and a door at the far end of the room.',
    choices: [
      { text: 'Take the key and open the door', nextScene: 'escape' },
      { text: 'Leave the key and go back to the dark room', nextScene: 'start' },
    ],
  },
  
  door: {
    text: 'The door is locked. You need to find a key.',
    choices: [
      { text: 'Go back to the dark room', nextScene: 'start' },
    ],
  },
  
  escape: {
    text: 'Congratulations! You successfully escaped the room.',
    choices: [],
  },
};
const App = () => {
  const [currentScene, setCurrentScene] = useState('start');

  const handleChoiceClick = (nextScene) => {
    setCurrentScene(nextScene);
  };

  const calculateProgress = () => {
    const sceneKeys = Object.keys(story);
    const currentIndex = sceneKeys.indexOf(currentScene);
    const totalScenes = sceneKeys.length;
    const progress = (currentIndex / (totalScenes - 1)) * 100;
    return Math.min(progress, 100); // Ensure progress doesn't exceed 100%
  };
  

  return (
    <div className="App">
      <div className="story-container">
        <h1>Interactive Story</h1>
        <p>{story[currentScene].text}</p>
        <div className="choices">
          {story[currentScene].choices.map((choice, index) => (
            <button key={index} onClick={() => handleChoiceClick(choice.nextScene)}>
              {choice.text}
            </button>
          ))}
        </div>
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

export default App;