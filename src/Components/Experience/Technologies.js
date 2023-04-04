import React from "react";
import htmlLogo from "../pictures/html.png";
import cssLogo from "../pictures/css.png";
import jsLogo from "../pictures/javascript.png";
import reactLogo from "../pictures/react.png";
import gitHubLogo from "../pictures/github.png";
import bootstrapLogo from "../pictures/bootstrap.png";
import tailwindLogo from "../pictures/tailwind.png";
import nodeLogo from "../pictures/node.png";
import TechnologiesCss from "./Technologies.module.css";
import Logo from "./Logo";

function Technologies() {
  return (
    <>
      <h3>Studying and practicing technologies like:</h3>
      <div className={TechnologiesCss.technologies}>
        <Logo logoImg={htmlLogo} logoName={"Html 5"} />
        <Logo logoImg={cssLogo} logoName={"Css 3"} />
        <Logo logoImg={jsLogo} logoName={"Javascript"} />
        <Logo logoImg={reactLogo} logoName={"React.js"} />
        <Logo logoImg={gitHubLogo} logoName={"GitHub"} />
        <Logo logoImg={bootstrapLogo} logoName={"Bootstrap"} />
        <Logo logoImg={tailwindLogo} logoName={"Tailwind"} />
        <Logo logoImg={nodeLogo} logoName={"Node.js"} />
      </div>
    </>
  );
}

export default Technologies;
