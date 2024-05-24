import { Inter, Margarine } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import Header from "../../components/Header/Header.js";
import FooterWhite from "../../components/FooterWhite/FooterWhite.js";
// import FooterBlue from "../../components/FooterBlue/FooterBlue";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div className="App">
                    <Header />
                    {children}
                    <FooterWhite />
                </div>
            </body>
        </html>
    );
}
