import Image from "next/image";
import Link from "next/link";
import { Lexend_Deca } from "next/font/google";
import arrowLeft from "../../../../public/Arrow 5.png";
import arrowRight from "../../../../public/Arrow 6.png"
import phoneFront from "../../../../public/Purple iphone 14 Pro front.png"
import phoneBack from "../../../../public/Purple iphone 14 Pro.png"
import './style.css';

export default function solutionPage() {
    return (
        <div style={{ marginBottom: 30 }}>
            <div className="app-pageHeading">Прототип приложения</div>
            <div className="app-pageHeadingLine"></div>
            <div className="d-flex align-items-center justify-content-center">
                <Image src={phoneBack} alt="phoneBack" height={350}></Image>
                <div className="app-arrowLeft">
                    <Image src={arrowLeft} alt="arrowLeft" height={35}></Image>
                </div>
                <Image src={phoneFront} alt="phoneFront" height={400}></Image>
                <div className="d-flex app-arrowRight">
                    <Image src={arrowRight} alt="arrowRight" height={35}></Image>
                </div>
                <Image src={phoneBack} alt="phoneBack" height={350}></Image>
            </div>
            <div className="app-pageInstruction">До выхода приложения, осталось: </div>
            <div className="app-pageInstructionLine"></div>
            <div className="d-flex justify-content-center">
                <div className="d-flex align-items-center justify-content-center app-pageCountDown">
                    <div className="app-countDownText">обратный отсчет до выходп приложения</div>
                </div>
            </div>
        </div>
    );
}