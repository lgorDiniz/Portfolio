import React from "react";
import "./Content.css"
import About from "../About/About";

function Content({children}){
    return <div className="content">{children}</div>
}

export default Content;