import React from "react";
import "./Header.css";

function Header(){
    return (
        <header className="header">
            <div className="nameBox">
                <h1>Igor Diniz da Silveira Gonsales</h1>
                <p>Entry Level Web Developer</p>
            </div>
            <nav className="navigation">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}

export default Header