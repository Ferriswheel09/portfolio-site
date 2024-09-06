import React from "react";
import Link from "next/link";
import Home from "@/resources/home";
import Info from "@/resources/about";
import Monitor from "@/resources/project";
import Bookmark from "@/resources/post";



export default function Navbar() {
    const navItems = [
      { key: 'home', href: '/#home', icon: <Home/>, label: 'Home' },
      { key: 'about', href:'/#about', icon: <Info />, label: 'About' },
      { key: 'projects', href:'/#projects', icon: <Monitor />, label: 'Projects' },
      { key: 'posts', href:'/posts', icon: <Bookmark />, label: 'Posts' },
    ];
  
    return (
      //0 55 100
      <header className="navbar w-1/2 z-50 text-black fixed top-0 left-0 right-0 mx-auto h-min">
        <div className="bg-gradient-to-r from-grad-purp to-grad-blue via-black via-55% flex align-center flex-wrap items-center justify-between mx-auto p-4  border-2 shadow-xl shadow-neutral-600">
          <div className="border-2 rounded-3xl p-4 w-40 text-center bg-button-teal shadow-xl">
            <h1 className="font-medium">Faris Jiwad</h1>
          </div>
          <ul className="font-medium flex flex-row p-4 space-x-4">
            {navItems.map(item => (
              <Link
                href={item.href}
                key={item.key}
                className="transition flex flex-row space-x-1 bg-button-teal border-2 w-40 border-white rounded-3xl p-4 hover:text-black hover:bg-slate-100 hover:shadow-xl hover:-translate-y-1 hover:scale-110"
              >
                {item.icon}
                <p className="pl-5">{item.label}</p>
              </Link>
            ))}
          </ul>
        </div>
      </header>
    );
  }