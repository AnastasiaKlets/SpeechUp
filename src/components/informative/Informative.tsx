import React from 'react';
import './Informative.css'

function Informative() {
    return (
        <>
            <div className="inf">
                <p></p>
                <p></p>

                <div className="flex-container">
                    <div className="parasites">Слова-паразиты</div>
                    <div className="Non-speech">Неречевые звуки</div>
                    <div className="Arguments">Аргументы без подтверждения</div>
                    <div className="Other">Другое в выступлении</div>
                </div>
            </div>
        </>
    );
}

export default Informative;