import React from 'react';
import './Informative.css'

function Informative() {
    let inf= {
        title:"Доля неречевых звуков и слов-паразитов превышает допустимый порог.",
        items:[
            {
                title:"Слова-паразиты",
                value:"10%",
                color:"#410DAE",
            },
            {
                title:"Неречевые звуки",
                value:"25%",
                color:"#FE5D74",
            },
            {
                title:"Аргументы без подтверждения",
                value:"25%",
                color:"#FFB800",
            },
            {
                title:"Другое",
                value:"40%",
                color:"#7C8EB5",
            }
        ]
    }

    const listItems = inf.items.map((number) =>
            <div className="content" style={{backgroundColor: number.color, width: number.value, }}>
                {number.title}
            </div>
    );

    return (
        <>
            <div className="inf">
                <div className="text">
                    <p> {inf.title}</p>
                </div>
                <div className="container">
                    {listItems}
                </div>
            </div>
        </>
    );
}

export default Informative;