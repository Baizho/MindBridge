import Link from "next/link";
import Image from "next/image";
import logoSrc from "../../../public/logo.jpg";
import phoneLogoSrc from "../../../public/phone-logo.png";
import mailLogoSrc from "../../../public/mail-logo.png";
import instaLogoSrc from "../../../public/instagram-logo.png";
import youtubeLogoSrc from "../../../public/youtube-logo.png";
import "./style.css";

export default function Footer() {
    return (
        <div style={{ marginTop: 30 }}>
            <div className="d-flex align-items-center justify-content-center" style={{ height: 250, backgroundColor: "#293991", position: "relative" }}>
                <div className="col-3 text-center" style={{ left: "5%", top: "5%", position: "absolute" }}>
                    <Image src={logoSrc} height={200}></Image>
                </div>
                <div className="col-3 text-center justify-content-center" style={{ left: "35%", top: "5%", position: "absolute" }}>
                    <div className="contact-text">Contact Us</div>
                    <div className="d-flex justify-content-center"><div className="line" style={{ width: "50%" }}></div></div>
                    <div className="d-flex justify-content-center" style={{ marginTop: 10 }}>
                        <Image src={phoneLogoSrc} width={30} height={30}></Image>
                        <div className="number" style={{ marginLeft: 20 }}>8-111-111-1111</div>
                    </div>
                    <div className="d-flex justify-content-center" style={{ marginTop: 10 }}>
                        <Image src={mailLogoSrc} width={30} height={30}></Image>
                        <div className="number" style={{ marginLeft: 20 }}>@mindbridge.qz</div>
                    </div>
                </div>
                <div className="col-3 text-center justify-content-center" style={{ left: "65%", top: "5%", position: "absolute" }}>
                    <div className="contact-text">Social Media</div>
                    <div className="d-flex justify-content-center"><div className="line" style={{ width: "50%" }}></div></div>
                    <div className="d-flex justify-content-center" style={{ marginTop: 10 }}>
                        <Image src={instaLogoSrc} width={30} height={30}></Image>
                        <div className="number" style={{ marginLeft: 20 }}>@mindbridge.qz</div>
                    </div>
                    <div className="d-flex justify-content-center" style={{ marginTop: 10 }}>
                        <Image src={youtubeLogoSrc} width={30} height={30}></Image>
                        <div className="number" style={{ marginLeft: 20 }}>To be coming soon</div>
                    </div>
                </div>
            </div >
        </div>
    );
}
