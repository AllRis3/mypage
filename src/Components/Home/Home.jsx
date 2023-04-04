import React from "react";
import HomeCss from "./Home.module.css";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Particle from "../../UI/Particle";

export default function Home() {
  return (
    <React.Fragment>
      <Particle />
      <div className={HomeCss.maincontent}>
        <div className={HomeCss.infocontainer}>
          <div className={HomeCss.homeText}>Hi, I am</div>
          <div className={HomeCss.name}>Angelos Papadoulis</div>
          <div className={HomeCss.homeText}>Front End Developer</div>
        </div>
        <div className={HomeCss.iconsContainer}>
          <a
            href="https://www.linkedin.com/in/angelos-papadoulis/"
            target="_blank"
            rel="noreferrer"
            className={HomeCss.icons}
          >
            LinkedIn <FaLinkedinIn size={40} color="#0a66c2" />
          </a>
          <a
            href="https://github.com/AllRis3"
            target="_blank"
            rel="noreferrer"
            className={HomeCss.icons}
          >
            GitHub <AiFillGithub size={40} color="#ffffff" />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}
