import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { GoMail } from "react-icons/go";



const Contact = () => {
  return (
    <section id="contact">
    <p>contact</p>
    <h3>Hit me up! 👇</h3>
    <div className="contact_icons">
      <div className="contact_box">
      <GoMail size='7rem' href="mailto:w.leszkowicz99@gmail.com"/>
      <CiLinkedin size='7rem' />
      <VscGithubAlt size='7rem' />
      
      
      </div>
    </div>
    </section>
    
  )
}

export default Contact;