import React from 'react';
import './App.css';
import Informative from "./components/informative/Informative";
import UnityOfStyl from "./components/unityOfStyle/UnityOfStyl";
import Eloquence from "./components/eloquence/Eloquence";
import Emotionality from "./components/emotionality/Emotionality";
function App() {

  return (
    <div className="app">
      <div className= "wrapper">

        <div className="divInformative">
          <div className="nameTopic">
            <p>Информативность</p>
          </div>
          <div>
            <Informative/>
          </div>
        </div>

        <div className="divUnityOfStyl">
          <div className="nameTopic">
            <p>Единство стиля</p>
          </div>
          <div>
            <UnityOfStyl/>
          </div>
        </div>

        <div className="divEloquence">
          <div className="nameTopic">
            <p>Красноречивость</p>
          </div>
          <div>
            <Eloquence/>
          </div>
        </div>

        <div className="divEmotionality">
          <div className="nameTopic">
            <p>Эмоциональность</p>
          </div>
          <div>
            <Emotionality/>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
