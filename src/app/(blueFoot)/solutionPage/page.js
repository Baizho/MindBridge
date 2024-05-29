import Image from "next/image";
import"./style.css";
import imgSrc from "../../../../public/app.png";

export default function solutionPage() {
    return (
        <div className="body">
            <h1>MindBridge</h1>
            <div className="box">
                <div id="solutionText">
                    <p>Bla blabla</p>
                </div>
                <Image src={imgSrc} id="img" alt="logo"></Image>
            </div>
        </div>
    );
}
