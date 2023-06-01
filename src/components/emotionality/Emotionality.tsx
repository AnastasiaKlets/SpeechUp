import React from 'react';
import { ReactSVG } from 'react-svg'
import './img/ok.svg'
import './img/happy.svg'
import './img/angry.svg'

function Emotionality() {
    return (

    <>
        <div><p></p></div>
        <div className="imgAll">
            <div className="progressbar">
                <ReactSVG className="img" src="angry.svg" />
                <span className="span" style={{height: "15%" }}><ReactSVG src="angry.svg"/></span>
            </div>
            <div className="progressbar">
                <ReactSVG className="a1" src="angry.svg"/>
                <span className="a2" style={{height: "85%"}}><ReactSVG src="angry.svg"/></span>

            </div>
            <div className="progressbar">
                <ReactSVG className="img" src="ok.svg"/>
                <span className="span" style={{height: "15%"}}><ReactSVG src="ok.svg"/></span>
            </div>
            <div className="progressbar">
                <ReactSVG className="a1" src="ok.svg"/>
                <span className="a2" style={{height: "85%"}}><ReactSVG src="ok.svg"/></span>

            </div>
            <div className="progressbar">
                <ReactSVG className="img" src="happy.svg"/>
                <span className="span" style={{height: "15%"}}><ReactSVG src="happy.svg"/></span>
            </div>
            <div className="progressbar">
                <ReactSVG className="a1" src="happy.svg"/>
                <span className="a2" style={{height: "85%"}}><ReactSVG src="happy.svg"/></span>

            </div>
        </div>
    </>
    );
}

export default Emotionality;