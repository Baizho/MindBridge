"use client"

import Link from "next/link";
import Image from "next/image";
import statSrc from "../../../public/statistics.png";
import connectionSrc from "../../../public/connection.png";
import arrowSrc from "../../../public/arrow.png";
import appSrc from "../../../public/app.png";
import donationSrc from "../../../public/donation.png";
import ellipseSrc from "../../../public/ellipse.png";
import xSrc from "../../../public/x.png";
import menuButtonSrc from "../../../public/menuButton.png";
import { useState, useEffect } from "react";
import "./style.css";

export default function Menu() {
    const [opa, setOpa] = useState("hidden");

    function changeOpacity() {
        if (opa == "hidden") setOpa("visible");
        else setOpa("hidden");
    }
    return (
        <div style={{ zIndex: 1000 }}>
            <div style={{ position: "relative", cursor: "pointer" }}>
                <Image src={menuButtonSrc} height={30} alt="logo" onClick={() => {
                    changeOpacity()
                }}></Image>
            </div>
            <div style={{ visibility: opa, position: "absolute", right: "101.5%", top: "100%" }}>
                <div className="d-flex" style={{ marginLeft: "50%", height: 430, width: 300, backgroundColor: "#293991" }}>
                    <div className="col" style={{ paddingLeft: 20 }}>
                        <div className="d-flex" style={{ height: "7%", position: "relative" }}>
                            <Image alt="xlogo" onClick={() => { changeOpacity(); }} src={xSrc} width={10} height={10} style={{ position: "absolute", right: "7%", top: "40%" }}></Image>
                        </div>

                        <Link href="../statisticsPage" className="d-flex justify-content-start" style={{ marginTop: 10, textDecoration: "none" }}>
                            <Image alt="statlogo" src={statSrc} width={30} height={30}></Image>
                            <div className="numberText" style={{ marginLeft: 20 }}>Статистика</div>
                        </Link>
                        <div className="line" style={{ width: "90%" }}></div>

                        <Link href="../solutionPage" className="d-flex justify-content-start" style={{ marginTop: 30, textDecoration: "none" }}>
                            <Image alt="connectionlogo" src={connectionSrc} width={30} height={30}></Image>
                            <div className="numberText" style={{ marginLeft: 20 }}>Решение</div>
                        </Link>
                        <div className="line" style={{ width: "90%" }}></div>

                        <Link href="../planPage" className="d-flex justify-content-start" style={{ marginTop: 30, textDecoration: "none" }}>
                            <Image alt="arrowlogo" src={arrowSrc} width={30} height={30}></Image>
                            <div className="numberText" style={{ marginLeft: 20 }}>План Развития</div>
                        </Link>
                        <div className="line" style={{ width: "90%" }}></div>

                        <Link href="../appPage" className="d-flex justify-content-start" style={{ marginTop: 30, textDecoration: "none" }}>
                            <Image alt="applogo" src={appSrc} width={30} height={30}></Image>
                            <div className="numberText" style={{ marginLeft: 20 }}>Приложение</div>
                        </Link>
                        <div className="line" style={{ width: "90%" }}></div>

                        <Link href="../donationPage" className="d-flex justify-content-start" style={{ marginTop: 30, textDecoration: "none" }}>
                            <Image alt="donationlogo" src={donationSrc} width={30} height={30}></Image>
                            <div className="numberText" style={{ marginLeft: 20 }}>Пожертвование</div>
                        </Link>
                        <div className="line" style={{ width: "90%" }}></div>

                        <Link href="../foundationPage" className="d-flex justify-content-start" style={{ marginTop: 30, textDecoration: "none" }}>
                            <Image alt="ellipselogo" src={ellipseSrc} width={30} height={30}></Image>
                            <div className="numberText" style={{ marginLeft: 20 }}>Niet Foundation</div>
                        </Link>
                        <div className="line" style={{ width: "90%" }}></div>
                    </div>
                </div >
            </div>
        </div >
    );
}
