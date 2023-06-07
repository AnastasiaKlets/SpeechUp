import React from 'react';
import { ReactSVG } from 'react-svg'
import './Emotionality.css'
import okImg from './img/ok.svg'
import happyImg from './img/happy.svg'
import angryImg from'./img/angry.svg'
import { cn } from "@bem-react/classname";

function chekProcent(inf:any){
    if(inf.items.procent < 5){
        return 1
    }
    if(inf.items.procent < 10){
        return 2
    }
    if(inf.items.procent<20){
        return 3
    }
    if(inf.items.procent < 30){
        return 4
    }
    if(inf.items.procent<40){
        return 5
    }
    if(inf.items.procent < 50){
        return 6
    }
    if(inf.items.procent<60){
        return 7
    }
    if(inf.items.procent<70){
        return 8
    }
    if(inf.items.procent < 80){
        return 9
    }
    if(inf.items.procent<90){
        return 10
    }
    if(inf.items.procent < 100){
        return 11
    }

}

function Emotionality() {

    let inf= {
        title:"Процент ваших эмоций в выступлении",
        items:[
            {
                title:"Злость",
                procent:10,
                colorProcent: "#FF4E78"
            },
            {
                title:"Без эмоций",
                procent:25,
                colorProcent: "#7C8EB5"
            },
            {
                title:"Радость",
                procent:25,
                colorProcent: "#10CE7E"
            }
        ]
    }
    const cnProfilePreview = cn("imk");
    // @ts-ignore
    const listItems = inf.items.filter(( str => str.title == "Злость")).map((number) =>
        <>
            <div >
                <ReactSVG className={} src={angryImg}/>
            </div>
            <p className="pText">
                {number.title}
            </p>
            <p className="pPercent" style={{color:number.colorProcent}}>
                {number.procent} %
            </p>
        </>
    );
    const listItemsok = inf.items.filter(( str => str.title == "Без эмоций")).map((number) =>
        <>
            <div >
                <ReactSVG className={chekProcent(number.procent)} src={okImg}/>
            </div>
            <p className="pText">
                {number.title}
            </p>
            <p className="pPercent" style={{color:number.colorProcent}}>
                {number.procent} %
            </p>
        </>
    );
    const listItemshappy = inf.items.filter(( str => str.title == "Радость")).map((number) =>
        <>
            <div >
                <ReactSVG className={chekProcent(number.procent)} src={happyImg}/>
            </div>
            <p className="pText">
                {number.title}
            </p>
            <p className="pPercent" style={{color:number.colorProcent}}>
                {number.procent} %
            </p>
        </>
    );


    return (
        <>
            <div className="textEmotionality">
                <p>
                    {inf.title}
                </p>
            </div>
            <div className="imgAllEmotionality">
                <div className="angryImg">
                    {listItems}
                </div>
                <div className="okImg">
                    {listItemsok}
                </div>
                <div className="happyImg">
                    {listItemshappy}
                </div>
            </div>
        </>
    );}

export default Emotionality;