import React from 'react';
import './img/mouthpiese.svg'
import './img/bubbleYellow.svg'
import './img/bubbleViolet.svg'
import './img/bubbleBlue.svg'
import './img/bubbleRed.svg'
import { ReactSVG } from 'react-svg'

function Eloquence() {
    return (
        <>
            <div>
                <p>

                </p>
            </div>
            <div>
                <ReactSVG src="mouthpiese.svg"></ReactSVG>

                <ReactSVG src="bubbleBlue.svg"></ReactSVG>
                <ReactSVG src="bubbleRed.svg"></ReactSVG>
                <ReactSVG src="bubbleViolet.svg"></ReactSVG>
                <ReactSVG src="bubbleYellow.svg"></ReactSVG>
            </div>

        </>
    );
}

export default Eloquence;