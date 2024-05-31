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
                        <div className="text-box">Plan..</div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="box bg-dark-subtle" style={{ height: "100%", marginLeft: "10%" }}></div>
                </div>
            </div >
        </div>
    );
}