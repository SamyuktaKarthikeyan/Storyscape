import React from "react";
import Chapters from "./components/Chapters";
import Entername from "./components/Entername";
const App = () => {
  const story ={
    scene1:{
      type:'plain',
      background:'outside',
      text:"Welcome to Sierra Innovations Centre. New York's prestigious research institute",
      choices:[
        { text:'Next',nextScene:'scene2'},
      ],
    },
    scene2:{
      type:'dialogue',
      background:'reception',
      person:'Dr. James Halliday',
      text:"Hi! You seem lost. Let me guess... First day as research intern?",
      choices:[
        { text:'Next',nextScene:'scene3'},
      ],
    },
    scene3:{
      type:'dialogue',
      background:'reception',
      person:'Dr. James Halliday',
      text:"You are gonna need photo ID, just step over here, in front of camera.",
      choices:[
        { text:'Next',nextScene:'scene4'},
      ],
    },
   
    scene4:{
      type:'playerinput',
      background:'reception',
      component:Entername,
      choices:[
        { text:'Next',nextScene:'scene5'},
      ]
    },
    scene5:{
      type:'plain',
      background:'reception',
      text:"Welcome to the institute",
      choices:[],
    }
  }
  return (
    <div className="App">
      <Chapters story={story} />
    </div>
  );
}

export default App;