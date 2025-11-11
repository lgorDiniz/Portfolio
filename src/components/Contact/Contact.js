import React from "react";
import "./Contact.css";
import EmailIcon from "./Images/Email.png";
import GitHubIcon from "./Images/GitHub.png";
import LinkedInIcon from "./Images/LinkedIn.png";
import PhoneIcon from "./Images/Phone.png";

function Contact(){
    return (
        <div className="contactBox">
            <h2>Contacts and Links:</h2>
            <div className="contact">
                <a href="mailto:igordinizsilveira@hotmail.com" className="contactInfo"><img className="icon" src={EmailIcon} alt="Email Icon"></img><strong>Email: igordinizsilveira@hotmail.com</strong></a>
                <a href="tel: +16173885524" target="_blank" rel="noreferrer" className="contactInfo"><img className="icon" src={PhoneIcon} alt="Phone Icon"></img><strong>Phone: +1 (617) 388-5524</strong></a>
                <a href="https://github.com/lgorDiniz" target="_blank" rel="noreferrer" className="contactInfo"><img className="icon" src={GitHubIcon} alt="GitHub Icon"></img><strong>GitHub: https://github.com/lgorDiniz</strong></a>
                <a href="https://linkedin.com/in/igor-diniz-5205b21a5" target="_blank" rel="noreferrer" className="contactInfo"><img className="icon" src={LinkedInIcon} alt="LinkedIn Icon"></img><strong>LinkedIn: linkedin.com/in/igor-diniz-5205b21a5</strong></a>
            </div>
        </div>
    )
}

export default Contact;