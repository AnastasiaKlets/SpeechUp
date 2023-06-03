import React from 'react';
import { ReactSVG } from 'react-svg'
import './Emotionality.css'
import okImg from './img/ok.svg'
import happyImg from './img/happy.svg'
import angryImg from'./img/angry.svg'

function Emotionality() {
    let infForEmotionality = {
        subtitle1: "Процент ваших эмоций в выступлении."
    }
    return (
    <>
        <div className="textEmotionality">
            <p>
                {infForEmotionality.subtitle1}
            </p>
        </div>
        <div className="imgAllEmotionality">
            <div className="angryImg">
                <ReactSVG src={angryImg}/>
            </div>
            <div className="okImg">
                <ReactSVG src={okImg}/>
            </div>
            <div className="happyImg">
                <ReactSVG  src={happyImg}/>
            </div>
        </div>
    </>
    );}

export default Emotionality;