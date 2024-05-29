import Image from "next/image";
import Link from "next/link";
import watchSrc from "../../../public/watch-button-logo.png";
import "./globals.css";

export default function Home() {
  return (
    <div style={{ marginTop: 30, marginBottom: 30 }}>
      <div className="d-flex" style={{ height: 500, marginLeft: 70, marginRight: 80 }}>
        <div className="col-6">
          <div className="pageHeading" style={{ height: "20%", marginTop: 30, marginBottom: 20 }}>MindBridge</div>
          <div className="box" style={{ height: "40%", paddingLeft: 10 }}>
            <div className="text-box-page">Ваш проводник к <span className="text-box-span-page">психо эмоциональному</span> благополучию!</div>
          </div>
          <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="watch-button d-flex align-items-center" style={{ textDecoration: "none", height: "15%", width: "45%", marginTop: 20 }}>
            <Image src={watchSrc} width="10%" height="20%" alt="watch" style={{ marginLeft: "4%" }}></Image>
            <div className="watch-button-text" style={{ marginLeft: 10 }}>Смотреть подкаст</div>
          </Link>
        </div>
        <div className="col-6">
          <div className="box bg-dark-subtle" style={{ height: "100%", marginLeft: "10%" }}></div>
        </div>
      </div>
    </div>
  );
}
