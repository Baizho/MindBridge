import Image from "next/image";
import Link from "next/link";
import './style.css';

export default function solutionPage() {
    return (
        <div style={{ marginTop: 30, marginBottom: 30 }}>
            <div className="d-flex" style={{ height: 500, marginLeft: "5%", marginRight: "5%" }} >
                <div className="col-6">
                    <div className="pageHeading" style={{ height: "20%", marginBottom: "5%", }}>MindBridge</div>
                    <div className="box" style={{ height: "72.5%", paddingLeft: 20 }}>
                        <div className="text-box">Наше приложение создано для улучшения психо-эмоционального состояния школьников. <span className="text-box-span">C MindBridge вы сможете легко отслеживать и анализировать своё состояние c помощью регулярных ментальных проверок и тестов.</span></div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="box bg-dark-subtle text-box" style={{ height: "100%", marginLeft: "10%" }}>
                        Мы предлагаем обширное изучение различных тем через подкасты, психологические игры и образовательные материалы.
                        Мы стремимся разрешить проблему депрессии и суицида в Казахстане, создавая безопасное и поддерживающее пространство для школьников. Подключайтес
                    </div>
                </div>
            </div >
        </div>
    );
}