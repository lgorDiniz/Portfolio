import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App(){
	const [activePage, setActivePage] = useState("about");

	const renderPage = () => {
		switch(activePage){
			case "projects":
				return <Projects></Projects>;
			case "contact":
				return <Contact></Contact>;
			default:
				return <About></About>;
		}
	};

	return (
		<div className="container">
			<Header setActivePage = {setActivePage}></Header>
			<Content>{renderPage()}</Content>
		</div>
	)
}

export default App;