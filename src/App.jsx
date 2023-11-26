import React from "react";
import Chapters from "./components/Chapters";
import Entername from "./components/Entername";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
const outside="https://idahocapitalsun.com/wp-content/uploads/2022/08/Ambulance-outside-OHSU-ED-Christine-Torres-Hicks.jpg";
const reception="https://www.buildingbetterhealthcare.com/article-image-alias/reception-and-waiting-areas-key-to.jpg";
const corridor="https://media3.cgtrader.com/variants/gKbuhhxWNeYeGNPsMzBXcwnP/64d1262c1acde2eb3beef249c4695a8ad88c958dd79db36f763bf631017addd0/1.jpg";
const App = () => {
  const name=useSelector(state=>state.username)
  const story ={
    scene1:{
      type:'plain',
      background:outside,
      text:"Welcome to Edenbrook. Bostons's prestigious research teaching hospital",
      choices:[
        { text:'Next',nextScene:'scene2'},
      ],
    },
    scene2:{
      type:'dialogue',
      background:reception,
      person:'Dr. Ines Delarosa',
      text:"Hi! You seem lost. Let me guess... First day of your medical residency",
      choices:[
        { text:'Next',nextScene:'scene3'},
      ],
    },
    scene3:{
      type:'dialogue',
      background:reception,
      person:'Dr. Ines Delarosa',
      text:"You're gonna need a photo ID. Just step over here, in front of camera...",
      choices:[
        { text:'Next',nextScene:'scene4'},
      ],
    },
    
    scene4:{
      type:'playerinput',
      background:reception,
      component:Entername,
      choices:[
        { text:'Next',nextScene:'scene5'},
      ]
    },
    scene5:{
      type:'dialogue',
      background:reception,
      person:'Dr. Ines Delarosa',
      text:`Here you go, Dr.${name}. I wish my ID photo looked that good!  `,
      choices:[
        { text:'Next',nextScene:'scene6'},
      ]
    },
    scene6:{
      type:'dialogue',
      background:reception,
      person:name,
      text:"My first day as a real doctor! Am I dreaming?",
      choices:[
        { text:'Next',nextScene:'scene7'},
      ]
    },
    scene7:{
      type:'dialogue',
      background:reception,
      person:'Dr. Ines Delarosa',
      text:"I was in your shoes last year. Believe me, med school was nothing compared to this.",
      choices:[
        { text:'Next',nextScene:'scene8'},
      ]
    },
    scene8:{
      type:'dialogue',
      background:reception,
      person:'Dr. Ines Delarosa',
      text:"Your three years of residency will be the toughest, most amazing years of your life!",
      choices:[
        { text:'Next',nextScene:'scene9'},
      ]
    },
    scene9:{
      type:'dialogue',
      background:reception,
      person:'Dr. Ines Delarosa',
      text:"But this first year as an intern will be the craziest of all.",
      choices:[
        { text:'Next',nextScene:'scene10'},
      ]
    },
    scene10:{
      type:'dialogue',
      background:reception,
      person:name,
      text:"I'm ready for it. I've been dreaming of woking at Edenbrook for years.",
      choices:[
        { text:'Next',nextScene:'scene11'},
      ]
    },
    scene11:{
      type:'dialogue',
      background:reception,
      person:name,
      text:"Ever since I learned Ethan Ramsey was here. His research basically inspired me to apply to med school!",
      choices:[
        { text:'Next',nextScene:'scene12'},
      ]
    },
    scene12:{
      type:'dialogue',
      background:reception,
      person:name,
      text:"So... any words of advice?",
      choices:[
        { text:'Next',nextScene:'scene13'},
      ]
    },
    scene13:{
      type:'dialogue',
      background:reception,
      person:'Dr. Ines Delarosa',
      text:"Make friends. With your fellow interns your senior residents, even your patients! Friends will get you through anything.",
      choices:[
        { text:'Next',nextScene:'scene14'},
      ]
    },
    scene14:{
      type:'dialogue',
      background:reception,
      person:'Dr. Ines Delarosa',
      text:"And, uh, try not to annoy the attendings! You do not want to get on your boss's bad side!",
      choices:[
        { text:'Next',nextScene:'scene15'},
      ]
    },
    scene15:{
      type:'dialogue',
      background:reception,
      person:name,
      text:"Noted!",
      choices:[
        { text:'Next',nextScene:'scene16'},
      ]
    },
    scene16:{
      type:'plain',
      background:corridor,
      text:"You're passing through the waiting room on the way to orientation when you hear gasps behind you!",
      choices:[
        { text:'Next',nextScene:'scene17'},
      ],
    },
    scene17:{
      type:'dialogue',
      background:corridor,
      person:'woman',
      text:"Nnhhh....",
      choices:[
        { text:'Next',nextScene:'scene18'},
      ]
    },
    scene18:{
      type:'plain',
      background:corridor,
      text:"A woman collapses out of her seat! Other waiting patients crowd around her...",
      choices:[
        { text:'Next',nextScene:'scene19'},
      ]
    },
    scene19:{
      type:'dialogue',
      background:corridor,
      person:name,
      text:"...",
      choices:[
        { text:'Give her space!',nextScene:'scene20'},
        { text:'Someone call a doctor',nextScene:'scene22'},

      ]
    },
    scene20:{
      type:'dialogue',
      background:corridor,
      person:name,
      text:"Everybody, step back! I'm a doctor!",
      choices:[
        { text:'Next',nextScene:'scene21'},
      ]
    },
    scene21:{
      type:'plain',
      background:corridor,
      text:"You hurry over to the woman just as another doctor rushes in. He kneels at her side and checks her pulse",
      choices:[
        { text:'Next',nextScene:'scene23'},
      ]
    },
    scene22:{
      type:'plain',
      background:corridor,
      text:"You move aside just as another doctor rushes in. He kneels at her side and checks her pulse",
      choices:[
        { text:'Next',nextScene:'scene23'},
      ]
    },
    scene23:{
      type:'dialogue',
      background:corridor,
      person:'Dr. Ethan Ramsey',
      text:"Pulse is weak. She's unresponsive.",
      choices:[
        { text:'Next',nextScene:'scene24'},
      ]
    },
    scene24:{
      type:'plain',
      background:corridor,
      text:"He looks around and spots you.",
      choices:[
        { text:'Next',nextScene:'scene25'},
      ]
    },
    scene25:{
      type:'dialogue',
      background:corridor,
      person:'Dr. Ethan Ramsey',
      text:"You. Rookie. Get in here.",
      choices:[
        { text:'Next',nextScene:'scene26'},
      ]
    },
    
    
    
  }
  return (
    <div className="App">
      <Navbar/>
      <Chapters story={story} />
    </div>
  );
}

export default App;