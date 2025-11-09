import React from "react";
import "./Header.css";

function Header({setActivePage}){
    return (
        <header className="header">
            <div className="nameBox">
                <h1 className="name">Igor Diniz da Silveira Gonsales</h1>
                <p className="title">Entry Level Web Developer</p>
            </div>
            <nav className="navigation">
                <button className="link" onClick={() => setActivePage("about")}>About</button>
                <button className="link" onClick={() => setActivePage("projects")}>Projects</button>
                <button className="link" onClick={() => setActivePage("contact")}>Contact</button>
            </nav>
        </header>
    );
}

export default Header