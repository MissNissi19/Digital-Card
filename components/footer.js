import React from "react"
import ReactDOM from "react-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return (
        <div className="footer">
           <button className="icons"><FontAwesomeIcon icon={ faTwitter }/></button>
            <button className="icons"><FontAwesomeIcon icon={ faFacebookF }/></button>
            <button className="icons"><FontAwesomeIcon icon={ faInstagram }/></button>
            <button className="icons"><FontAwesomeIcon icon={ faGithub }/></button> 
        
        </div>
    )
}


