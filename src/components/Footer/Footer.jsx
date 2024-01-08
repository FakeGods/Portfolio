import React from "react";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
    return (
        <div className="footer">
        <div className="footer1">
            Copyright © 2024. All rights are reserved 
        </div>
        <div className="footer_socials">
            <FiGithub />
            <CiLinkedin />
        </div>
        </div>
    )
}

export default Footer;