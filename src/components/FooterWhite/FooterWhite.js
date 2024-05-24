import Link from "next/link";
import Image from "next/image";
import logoSrc from "../../../public/logo.png";
import phoneLogoSrc1 from "../../../public/phone-logo-1.png";
import mailLogoSrc1 from "../../../public/mail-logo-1.png";
import instaLogoSrc1 from "../../../public/instagram-logo-1.png";
import "./style.css";

export default function FooterWhite() {
    return (
        <div style={{ marginTop: "auto", paddingTop: 30 }}>
            <div className="d-flex align-items-center justify-content-center" style={{ height: 200, backgroundColor: "#FFFFFF", position: "relative", border: "1px solid #293991" }}>
                <div className="col-3 d-flex justify-content-center" style={{ height: "100%", left: "5%", top: "0%", position: "absolute" }}>
                    <div className="d-flex justify-content-center" style={{ background: "#A7B4FF", marginTop: 20, height: 160, width: 160, borderRadius: "50%" }}>
                        <Image src={logoSrc} style={{ marginTop: "10%" }} width={130} height={130}></Image>
                    </div>
                </div>
                <div className="col-3 text-center justify-content-center" style={{ height: "100%", left: "35%", top: "5%", position: "absolute" }}>
                    <div className="contact-text">Contact Us</div>
                    <div className="d-flex justify-content-center"><div className="lines" style={{ width: "50%" }}></div></div>
                    <div className="d-flex justify-content-center" style={{ marginTop: 20 }}>
                        <Image src={phoneLogoSrc1} width={30} height={30} ></Image>
                        <div className="number" style={{ marginLeft: 20 }}>8-111-111-1111</div>
                    </div>
                    <div className="d-flex justify-content-center" style={{ marginTop: 20 }}>
                        <Image src={mailLogoSrc1} width={30} height={30}></Image>
                        <div className="number" style={{ marginLeft: 20 }}>@mindbridge.qz</div>
                    </div>
                </div>
                <div className="col-3 text-center justify-content-center" style={{ height: "100%", left: "65%", top: "5%", position: "absolute" }}>
                    <div className="contact-text">Social Media</div>
                    <div className="d-flex justify-content-center"><div className="lines" style={{ width: "50%" }}></div></div>
                    <div className="d-flex justify-content-center" style={{ marginTop: 20 }}>
                        <Image src={instaLogoSrc1} width={30} height={30}></Image>
                        <div className="number" style={{ marginLeft: 20 }}>@mindbridge.qz</div>
                    </div>

                </div>
            </div >
        </div >
    );
}
