import React from 'react';
import  rupor from './img/mouthpiese.svg'
import  bubbleYellow from './img/bubbleYellow.svg'
import bubbleViolet from './img/bubbleViolet.svg'
import bubbleBlue from './img/bubbleBlue.svg'
import bubbleRed from './img/bubbleRed.svg'
import { ReactSVG } from "react-svg";
import './Eloquence.css'
import bigCloud from './img/bigCloud.svg'

function Eloquence() {
    return (
        <>
            <div className="text">
                <p>

                </p>
            </div>
            <div className="allImg">
                <div className="rImg">
                    <ReactSVG src={rupor}/>
                </div>
                <div className="bacAndBubbles">
                    <div className="cloud">
                        <ReactSVG className="bigCloud" src={bigCloud}/>
                    </div>
                    <div className="bubbles">
                        <ReactSVG src={bubbleBlue}/>
                        <ReactSVG src={bubbleRed}/>
                        <ReactSVG src={bubbleViolet}/>
                        <ReactSVG src={bubbleYellow}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Eloquence;