import { Inter, Margarine } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import FooterWhite from "../../components/FooterWhite/FooterWhite.js";
import Header from "../../components/Header/Header.js";
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
