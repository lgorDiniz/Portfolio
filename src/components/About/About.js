import React from "react";
import "./About.css"
import Picture from "./Images/Picture.jpg";
import HtmlLogo from "./Images/HTML5.png";
import CssLogo from "./Images/CSS.png";
import JsLogo from "./Images/Javascript.png";
import ReactLogo from "./Images/React.png";
import FirebaseLogo from "./Images/Firebase.png";
import NodeLogo from "./Images/Node.png";
import GitHubLogo from "./Images/GitHub.png";
import VSCodeLogo from "./Images/VSCode.png";

function About(){
    return(
        <div className="aboutContainer">
            <div className="aboutText">

                <h2>About me</h2>
                <p className="about">
                    My name is <strong>Igor Diniz</strong>, and I'm an entry-level Web Developer passionate about building applications and learning new technologies.<br></br>
                    I began my development journey by teaching myself programming online, and recently I had the opportunity to complete a <strong>Networking Career Program with
                    concentration in Web Development</strong> at <em>Computer Systems Institute</em>.<br></br>
                    I built projects using <strong>HTML, CSS, JavaScript, and Firebase</strong>, and I'm currently expanding my skills in <strong>Node.js</strong> and <strong>React</strong>.
                </p>

                <h2>Education</h2>
                <p>
                    <strong>Computer Systems Institute</strong> — Networking Career Program with a concentration in Web Development.<br></br>
                    <strong>Completed</strong>: 2025<br></br>
                    - Focused on front-end and back-end fundamentals, networking, and web development practices.
                </p>

                <h2>Spoken Languages</h2>
                <ul>
                    <li>Brazilian Portuguese - Native</li>
                    <li>English - Advanced</li>
                </ul>

                <h2>Skills</h2>
                <div className="skills">
                    <div className="skillRow">
                        <p><strong>Frontend:</strong></p>
                        <span className="badge"><img className="logo" src={HtmlLogo} alt="html logo" /> HTML</span>
                        <span className="badge"><img className="logo" src={CssLogo} alt="css logo" /> CSS</span>
                        <span className="badge"><img className="logo" src={JsLogo} alt="Javascript logo" /> Javascript</span>
                        <span className="badge"><img className="logo" src={ReactLogo} alt="React logo" /> React</span>
                    </div>
                    <div className="skillRow">
                        <p><strong>Backend:</strong></p>
                        <span className="badge"><img className="logo" src={FirebaseLogo} alt="Firebase logo"></img> Firebase</span>
                        <span className="badge"><img className="logo" src={NodeLogo} alt="Node.js logo"></img> Node.js</span>
                    </div>
                    <div className="skillRow">
                        <p><strong>Tools:</strong></p>
                        <span className="badge"><img className="logo" src={GitHubLogo} alt="GitHub logo"></img> GitHub</span>
                        <span className="badge"><img className="logo" src={VSCodeLogo} alt="Visual Stude Code logo"></img> VS Code</span>
                    </div>
                </div>
                

                <h2>Goals</h2>
                <p>
                    My goal is to gain hands-on experience as a web developer, continue improving my skills, and contribute to impactful projects that solve real-world problems.
                </p>

            </div>

            <div className="aboutPicture">
                <img id="picture" src={Picture} alt="Igor Diniz"></img>
            </div>
        </div>
    );
}

export default About;