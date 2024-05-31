import Link from "next/link";
import { Inter } from "next/font/google";
import Image from "next/image";
import logoSrc from "../../../public/logo.png";
import homeButtonSrc from "../../../public/homeButton.png";

import Menu from "../Menu/Menu";
import "./style.css";
import Head from "next/head";

export default function Header() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover" />
      </Head>
      <div className="d-flex" style={{ height: 70, backgroundColor: "#293991", position: "relative" }}>
        <div className="row align-items-center" style={{ height: "100%", left: "1%", position: "absolute" }}>
          <div style={{ width: "25%" }}>
            <Image src={logoSrc} height={50} alt="logo"></Image>
          </div>
          <div className="navTitle" style={{ width: "75%" }}>MindBridge</div>
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