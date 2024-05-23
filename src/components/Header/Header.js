import Link from "next/link";
import Image from "next/image";
import logoSrc from "../../../public/logo.jpg";
import homeButtonSrc from "../../../public/homeButton.png";
import menuButtonSrc from "../../../public/menuButton.png";
import "./style.css";

export default function Header() {
  return (
    <div style={{ marginBottom: 30 }}>
      <div className="d-flex" style={{ height: 70, backgroundColor: "#293991", position: "relative" }}>
        <div className="row align-items-center" style={{ height: "100%", left: "5%", position: "absolute" }}>
          <div style={{ width: "25%" }}>
            <Image src={logoSrc} height={50} alt="logo"></Image>
          </div>
          <div className="navTitle" style={{ width: "75%" }}>MindBridge</div>
        </div>
        <div className="d-flex align-items-center" style={{ height: "100%", right: "2%", gap: 40, position: "absolute" }}>
          <div>
            <Image src={homeButtonSrc} height={30} alt="logo"></Image>
          </div>
          <div>
            <Image src={menuButtonSrc} height={30} alt="logo"></Image>
          </div>
        </div>
      </div >
    </div>
  );
}
