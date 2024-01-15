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
          <div className="contact__icon-box">
            <a href="mailto:w.leszkowicz99@gmail.com">
              <span>
                <GoMail size="3rem" />
              </span>
            </a>
          </div>
          <div className="contact__icon-box">
            <a href="https://www.linkedin.com/in/wiktor-leszkowicz-70aa44262/">
              <span>
                {" "}
                <CiLinkedin size="3rem" />
              </span>
            </a>
          </div>
          <div className="contact__icon-box">
            <a href="https://github.com/FakeGods">
              <span>
                <VscGithubAlt size="3rem" className="contact__icons-box1" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
