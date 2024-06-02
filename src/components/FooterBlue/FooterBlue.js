import Link from "next/link";
import Image from "next/image";
import logoSrc from "../../../public/logo.png";
import phoneLogoSrc from "../../../public/phone-logo.png";
import mailLogoSrc from "../../../public/mail-logo.png";
import instaLogoSrc from "../../../public/instagram-logo.png";
import youtubeLogoSrc from "../../../public/youtube-logo.png";
import "./style.css";

export default function FooterBlue() {
    return (
        <div style={{ marginTop: "auto" }}>
            <div className="d-flex align-items-center justify-content-center" style={{ height: 200, backgroundColor: "#293991", position: "relative" }}>
                <div className="col-3 d-flex justify-content-center align-items-center" style={{ height: "100%", left: "5%", top: "0%", position: "absolute" }}>
                    <div className="d-flex justify-content-center" style={{ background: "#A7B4FF", height: 150, width: 150, borderRadius: "50%", position: "absolute" }}></div>
                    <Image alt="logo" src={logoSrc} width={135} height={135} style={{ zIndex: 1000 }}></Image>
                </div>
                <div className="col-3 text-center justify-content-center" style={{ height: "100%", left: "35%", top: "5%", position: "absolute" }}>
                    <div className="contact-text">Contact Us</div>
                    <div className="d-flex justify-content-center"><div className="lines" style={{ width: "50%" }}></div></div>
                    <div className="d-flex justify-content-center" style={{ marginTop: 20 }}>
                        <Image alt="phonelogo" src={phoneLogoSrc} width={30} height={30} ></Image>
                        <div className="number" style={{ marginLeft: 20 }}>8-111-111-1111</div>
                    </div>
                    <div className="d-flex justify-content-center" style={{ marginTop: 20 }}>
                        <Image alt="maillogo" src={mailLogoSrc} width={30} height={30}></Image>
                        <div className="number" style={{ marginLeft: 20 }}>@mindbridge.qz</div>
                    </div>
                </div>
                <div className="col-3 text-center justify-content-center" style={{ left: "65%", top: "5%", position: "absolute" }}>
                    <div className="contact-text">Social Media</div>
                    <div className="d-flex justify-content-center"><div className="lines" style={{ width: "50%" }}></div></div>
                    <div className="d-flex justify-content-center" style={{ marginTop: 20 }}>
                        <Image alt="instalogo" src={instaLogoSrc} width={30} height={30}></Image>
                        <div className="number" style={{ marginLeft: 20 }}>@mindbridge.qz</div>
                    </div>
                    <div className="d-flex justify-content-center" style={{ marginTop: 20 }}>
                        <Image alt="youtubelogo" src={youtubeLogoSrc} width={45} height={30}></Image>
                        <div className="number" style={{ marginLeft: 20 }}>To be coming soon</div>
                    </div>
                </div>
            </div >
        </div >
    );
}
