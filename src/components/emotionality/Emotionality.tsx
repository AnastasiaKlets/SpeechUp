import React from 'react';
import { ReactSVG } from 'react-svg'
import './Emotionality.css'
import okImg from './img/ok.svg'
import happyImg from './img/happy.svg'
import angryImg from'./img/angry.svg'

function Emotionality() {
    let infForEmotionality = {
        subtitle1: "Процент ваших эмоций в выступлении.",
        value1: 9,
        value2: 25,
        value3: 90
    };
    return (
    <>
        <div className="textEmotionality">
            <p>
                {infForEmotionality.subtitle1}
            </p>
        </div>
        <div className="imgAllEmotionality">
            <div className="angryImg">
                <ReactSVG className="imk1" src={angryImg}/>
                <p className="pText">
                    Злость
                </p>
                <p className="pPercent" style={{color: "#FF4E78"}}>
                    {infForEmotionality.value1} %
                </p>
            </div>
            <div className="okImg">
                <ReactSVG className="imk2" src={okImg}/>
                <p className="pText">
                    Нейтрально
                </p>
                <p className="pPercent" style={{color: "#7C8EB5"}}>
                    {infForEmotionality.value2} %
                </p>
            </div>
            <div className="happyImg">
                <ReactSVG className="imk3" src={happyImg} />
                <progress value={infForEmotionality.value3} max="100"></progress>
                <p className="pText">
                    Радость
                </p>
                <p className="pPercent" style={{color: "#10CE7E"}}>
                    {infForEmotionality.value3} %
                </p>
            </div>
        </div>
    </>
    );}

export default Emotionality;