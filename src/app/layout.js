import { Inter, Margarine } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "../app/globals.css";
import Header from "../components/Header/Header.js";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="App">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
