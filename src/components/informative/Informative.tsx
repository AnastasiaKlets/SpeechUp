import React from 'react';
import './Informative.css'

function Informative() {
    let infForInformative = {
        subtitle1: "Доля неречевых звуков и слов-паразитов превышает допустимый порог.",
        subtitle2: "Не хватает фактов и деталей для подтерждения высказанных аргументов."
    }

    return (
        <>
            <div className="inf">
                <div className="text">
                    <p> {infForInformative.subtitle1}</p>
                    <p>{infForInformative.subtitle2}</p>
                </div>
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