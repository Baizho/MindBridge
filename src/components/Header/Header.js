import Link from "next/link";
import { Inter } from "next/font/google";
import Image from "next/image";
import logoSrc from "../../../public/logo.png";
import homeButtonSrc from "../../../public/homeButton.png";

import Menu from "../Menu/Menu";
import "./style.css";

export default function Header() {
  return (
    <div>
      <div className="d-flex" style={{ height: 70, backgroundColor: "#293991", position: "relative" }}>
        <div className="d-flex align-items-center" style={{ height: "100%", left: "1%", position: "absolute" }}>
          <div>
            <Image src={logoSrc} height={50} alt="logo"></Image>
          </div>
          <div className="navTitle">MindBridge</div>
        </div>
        <div className="d-flex align-items-center" style={{ height: "100%", right: "2%", gap: 40, position: "absolute" }}>
          <div>
            <Link href="../"><Image src={homeButtonSrc} height={30} alt="logo"></Image></Link>
          </div>
          <Menu />
        </div>
      </div >
    </div>
  );
}