import React from "react";
import classnames from "classnames";
import { Container, Row } from "react-bootstrap";
import style from "./Contact.module.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Contact = () => {
  return (
    <Container className="mt-5" id="Contact">
      <Row>
        <div className={style.wrapper}>
          <div className={classnames(style.icon, style.github)}>
            <div className={style.tooltip}>Github</div>
            <span>
              <a
                href="https://github.com/Santibio"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
            </span>
          </div>
          <div className={classnames(style.icon, style.linkedin)}>
            <div className={style.tooltip}>LinkedIn</div>
            <span>
              <a
                href="https://www.linkedin.com/in/santiago-bioletto-609aa4212/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin />
              </a>
            </span>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Contact;
