import Image from "next/image";
import Link from "next/link";
import './style.css';

export default function donationPage() {
    return (
        <div style={{ marginBottom: 30 }}>
            <div className="d-flex justify-content-center" >
                <div className="pageHeading">MindBridge</div>
            </div >
            <div className="d-flex justify-content-center">
                <div className="box">
                    <div className="d-flex donation-text justify-content-center"> Help our organization by donating!</div>
                    <div className="d-flex justify-content-center">
                        <button className="donation-button">Donate</button>
                    </div>
                </div>
            </div >
        </div>
    );
}