import React from 'react';
import './UnityOfStyl.css'

function UnityOfStyl() {
    let infForUnityOfStyl = {
        subtitle1: "Стиль выступления больше подходит под публицистический. "
    }
    return (
        <>
            <div className="inf">
                <div className="text">
                    <p>{infForUnityOfStyl.subtitle1}</p>
                </div>
                <div className="flex-container">
                    <div className="Pablic">Публицистический </div>
                    <div className="auther">Другие стили</div>
                </div>
            </div>

        </>
    );
}

export default UnityOfStyl;