import React from 'react';
import './App.css';
import Informative from "./components/informative/Informative";
import UnityOfStyl from "./components/unityOfStyle/UnityOfStyl";
import Eloquence from "./components/eloquence/Eloquence";
import Emotionality from "./components/emotionality/Emotionality";
function App() {
  return (
    <div className="App">
      <div className= "wrapper">
        <div className= "accordion">
          <div className="item">
            <div className="title">
              <h2>Информативность</h2>
              <span>+</span>
            </div>
            <div className="content">
              <Informative />
            </div>
          </div>
          <div className="item">
            <div className="title">
              <h2>Единство стиля</h2>
              <span>+</span>
            </div>
            <div className="content">
              <UnityOfStyl/>
            </div>
          </div>
          <div className="item">
            <div className="title">
              <h2>Красноречивость</h2>
              <span>+</span>
            </div>
            <div className="content">
              <Eloquence/>
            </div>
          </div>
          <div className="item">
            <div className="title">
              <h2>Эмоциональность</h2>
              <span>+</span>
            </div>
            <div className="content">
              <Emotionality/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
