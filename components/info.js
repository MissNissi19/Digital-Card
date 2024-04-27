import React from "react"
import ReactDOM from "react-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Info(){

    const handleClick = function(event) {
        event.preventDefault()
        window.open("https://www.linkedin.com/in/oana-laura-luciana-jula-7536962b9", "_blank");
    }

    return (
        <div className="container">
            <h2>Jula Oana Laura </h2>
            <h5>Junior Frontend Developer</h5>
            <h6 className="website">https://github.com/MissNissi19?tab=repositories</h6>
            <div className="container-btns">
                <button className="email-btn"><FontAwesomeIcon icon={faEnvelope} /> Email</button>
                <button className="linkedin-btn" onClick={handleClick}><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</button>
            </div>
        
        </div>
    )
}

