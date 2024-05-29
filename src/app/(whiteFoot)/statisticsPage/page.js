import Image from "next/image";
import "./style.css";
import arrow from "../../../../public/arrow.png";

export default function statisticsPage() {
    return (
        <>
            <div className="text-box">
                <div className="text-title">
                    Статистика психо-эмоциональных проблем в Казахстане
                </div>
            </div>
            <div className="stats">
                <div className="content" id="content1">
                    <h4>1</h4>
                    <p>There will be some statistics</p>
                </div>
                <Image src={arrow} alt="arrow" className="arrow" id="arrow1"></Image>
                <div className="content" id="content2">
                    <h4>2</h4>
                    <p>There will be some statistics</p>
                </div>
                <Image src={arrow} alt="arrow" className="arrow" id="arrow2"></Image>
                <div className="content" id="content3">
                    <h4>3</h4>
                    <p>There will be some statistics</p>
                </div>
            </div>
            <div className="join">
                <div className="jtext">
                    <h4>Присоединяйтесь к нам, на пути к решению!</h4>
                </div>
            </div>
        </>
    );
}
