import React from "react";
import "./Projects.css";
import TMBP from "./Images/Project1.PNG";
import TDLP from "./Images/Project2.PNG";
import MGP from "./Images/Project3.PNG";

function Projects(){
    return (
        <div className="projectsBox">
            <h2>My projects</h2>
            <div className="projects">
                <div className="projectCard">
                    <h3>Task Management Board</h3>
                    <img className="image" src={TMBP} alt="Screenshot of the project"></img>
                    <div className="description">
                        <p><strong>Description: </strong>A task management app made with HTML, CSS and JavaScript, as well as Firebase for authentication and database.</p>
                    </div>
                    <div className="buttons">
                        <a className="button" href="https://lgordiniz.github.io/Taskboard/" target="_blank"><strong>Demo</strong></a>
                        <a className="button" href="https://github.com/lgorDiniz/Taskboard" target="_blank"><strong>Code</strong></a>
                    </div>
                </div>

                <div className="projectCard">
                    <h3>React Todo List</h3>
                    <img className="image" src={TDLP} alt="Screenshot of the project"></img>
                    <div className="description">
                        <p><strong>Description: </strong>A simple Todo list made as my first project using React.</p>
                    </div>
                    <div className="buttons">
                        <a className="button" href="https://lgordiniz.github.io/react-app/" target="_blank"><strong>Demo</strong></a>
                        <a className="button" href="https://github.com/lgorDiniz/react-app" target="_blank"><strong>Code</strong></a>
                    </div>
                </div>

                <div className="projectCard">
                    <h3>Match Game</h3>
                    <img className="image" src={MGP} alt="Screenshot of the project"></img>
                    <div className="description">
                        <p><strong>Description: </strong>A Match Game made with pure HMLT, CSS and JavaScript.</p>
                    </div>
                    <div className="buttons">
                        <a className="button" href="https://lgordiniz.github.io/MatchGame/" target="_blank"><strong>Demo</strong></a>
                        <a className="button" href="https://github.com/lgorDiniz/MatchGame" target="_blank"><strong>Code</strong></a>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Projects;