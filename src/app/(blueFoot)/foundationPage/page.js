"use client"
import "./style.css"
import { useRouter } from 'next/router'
import React, { useState } from 'react';
import Link from "next/link";

export default function foundationPage() {
    const [isVisible, setIsVisible] = useState({
        'button1': true, // This will make the text for button1 visible by default
        'button2': false
    });

    const handleClick = (id) => {
        // Reset all keys in the isVisible object to false
        const resetVisibility = Object.keys(isVisible).reduce((acc, key) => {
            acc[key] = false;
            return acc;
        }, {});

        setIsVisible({
            ...resetVisibility,
            // Then set the clicked button's visibility to the opposite of its current state
            [id]: !isVisible[id]
        });
    };

    // ... rest of your code

    return (
        <div className="body">
            <div  className="foundHead">
                <div> x<span id="niet">Niet</span> <span id="found">Foundation</span></div>
            </div>
            <div className="buttons">

                <div className="button">
                    <button onClick={() => handleClick('button1')} className="button">
                        <p>Information</p>
                    </button>
                    <button onClick={() => handleClick('button2')} className="">
                        <p>News</p>
                    </button>
                </div>
                <div className="info">

                    {isVisible['button1'] && <div id="sInfoPage">
                        Here will be information about Niet Foundation
                    </div>}
                    {isVisible['button2'] && <div id="sInfoPage">
                        News about Niet Foundation
                    </div>}
                </div>

            </div>
        </div>
    );
}
