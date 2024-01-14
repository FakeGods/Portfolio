import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { GoMail } from "react-icons/go";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__content">
          <div className="contact__title">
            <p>contact</p>
            <h3>Hit me up! 👇</h3>
          </div>
        </div>
        <div className="contact__icons">
            <div className="contact__icons-box">
              <span><GoMail size="7rem" href="mailto:w.leszkowicz99@gmail.com" /></span>
            </div>
            <div className="contact__icons-box">
              <span> <CiLinkedin size="7rem" /></span>
            </div>
            <div className="contact__icons-box">
              <span><VscGithubAlt size="7rem" /></span>
              <div className="contact__info">
                <h3>Mail</h3>
                <a href="mailto:w.leszkowicz99@gmail.com">w.leszkowicz99@gmail.com</a>
              </div>
          </div>
        </div>
        </div>
    </section>
  );
};

export default Contact;
