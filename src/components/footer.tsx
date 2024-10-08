"use client";

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from "next-themes";



export default function Footer(){

    const { theme } = useTheme();

    return(
        <div className={`${theme === 'dark' ? 'bg-neutral-900' : 'bg-neutral-100'} pt-2 border-t-2 z-50`}>
            <div className="flex flex-row align-center justify-center">
                <a href="https://github.com/Ferriswheel09/" target="_blank" className="px-1">
                    <img src="/github-brands.png" className="h-10 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer"/>
                </a>
                <a href="https://www.linkedin.com/in/faris-jiwad/" target="_blank" className="px-1">
                    <img src="/linkedin-brands.png" className="h-10 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer"/>
                </a>
            </div>
            <div className="text-center text-neutral-400 pb-2">
                <p>Faris Jiwad &copy; 2024</p>
            </div>
        </div>
    )
}