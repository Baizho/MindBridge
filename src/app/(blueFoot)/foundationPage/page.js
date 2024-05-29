"use client"
import "./style.css"
import { useRouter } from 'next/router'
import React, { useState } from 'react';
import Link from "next/link";

export default function foundationPage() {
    const [isVisible, setIsVisible] = useState({});

    const handleClick = (id) => {
        setIsVisible(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    return (
        <div className="body">
            <div>
                <h1> xNiet Foundation</h1>
            </div>
            <div className="buttons">
                <button onClick={() => handleClick('button1')} className="button">
                    <h3>Information</h3>
                </button>
                {isVisible['button1'] && <div id="sInfoPage">
                    Here will be information about Niet Foundation
                </div>}
                <button onClick={() => handleClick('button2')} className="">
                    <h3>Links</h3>
                </button>
                {isVisible['button2'] && <div id="sInfoPage">
                    Links will
                </div>}
            </div>
        </div>
    );
}
