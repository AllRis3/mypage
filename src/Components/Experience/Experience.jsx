import React from "react";
import ExperienceCss from "./Experience.module.css";
import { motion } from "framer-motion";
import htmlLogo from "../pictures/html.png";
import cssLogo from "../pictures/css.png";
import jsLogo from "../pictures/javascript.png";
import reactLogo from "../pictures/react.png";
import gitHubLogo from "../pictures/github.png";
import bootstrapLogo from "../pictures/bootstrap.png";
import tailwindLogo from "../pictures/tailwind.png";
import nodeLogo from "../pictures/node.png";

export default function Experience() {
  return (
    <React.Fragment>
      <motion.div
        initial={{ y: -300 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className={ExperienceCss.maincontent}>
          <div className={ExperienceCss.infocontainer}>
            <h1 className={ExperienceCss.header}>
              Experience
              <div className={ExperienceCss.line}></div>
            </h1>
            <div className={ExperienceCss.moreInfo}>
              <p>
                Starting from zero the 'trip' to become a{" "}
                <span className="aqua">Front-end Developer</span> , I thirstily
                started attending online courses and creating small
                personal projects. <br /> Colt Steele's
                <span className="aqua"> "The Web Developer Bootcamp"</span> was the 
                first course i took and learn the basics about Front-end developing.
                <br /> Then started scrimba's <span className="aqua"> Learn React </span>course. 
                Alongside with the courses i was watching video tutorials and documentation 
                from Mdn and W3Schools. 
              </p>
            </div>
          </div>
          <div className={ExperienceCss.infocontainer}>
            <p>Studying and practicing technologies like:</p>
            <ul className={ExperienceCss.ul}>
              <div className={ExperienceCss.technologies}>
                <li className={ExperienceCss.list}>
                  Html 5
                  <img
                    className={ExperienceCss.logos}
                    src={htmlLogo}
                    alt="html"
                  />
                </li>
                <li className={ExperienceCss.list}>
                  Css 3
                  <img
                    className={ExperienceCss.logos}
                    src={cssLogo}
                    alt="css"
                  />
                </li>
                <li className={ExperienceCss.list}>
                  JavaScript
                  <img
                    className={ExperienceCss.logos}
                    src={jsLogo}
                    alt="javascript"
                  />
                </li>
                <li className={ExperienceCss.list}>
                  React.js
                  <img
                    className={ExperienceCss.logos}
                    src={reactLogo}
                    alt="react"
                  />
                </li>
              </div>
              <p>I am also familiar with:</p>
              <div className={ExperienceCss.technologies}>
                <li className={ExperienceCss.list}>
                  GitHub
                  <img
                    className={ExperienceCss.logos}
                    src={gitHubLogo}
                    alt="git"
                  />
                </li>
                <li className={ExperienceCss.list}>
                  Bootstrap
                  <img
                    className={ExperienceCss.logos}
                    src={bootstrapLogo}
                    alt="bootstrap"
                  />
                </li>
                <li className={ExperienceCss.list}>
                  Tailwind
                  <img
                    className={ExperienceCss.logos}
                    src={tailwindLogo}
                    alt="tailwind"
                  />
                </li>
                <li className={ExperienceCss.list}>
                  Node.js
                  <img
                    className={ExperienceCss.logos}
                    src={nodeLogo}
                    alt="Node"
                  />
                </li>
              </div>
            </ul>
          </div>
        </div>
      </motion.div>
    </React.Fragment>
  );
}
