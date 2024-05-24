import Image from "next/image";
import "./style.css";

export default function statisticsPage() {
    return (
        <>
            <div className="d-flex justify-content-center" style={{ height: 70, border: "3px solid #293991", borderTop: 0, marginTop: -30 }}>
                <div className="text-title">Статистика психо-эмоциональных проблем в Казахстане </div>
            </div>
            <div className="d-flex justify-content-center" style={{ height: 70, marginTop: 30 }}>
                <div className="text-title">Some statistics..</div>
            </div>

            <div className="d-flex justify-content-center" style={{ marginBottom: "auto", backgroundColor: "#293991", height: 70, marginTop: 30 }}>
                Here
            </div>
        </>
    );
}
