import React from "react";
import ProjectFrameCss from "./ProjectFrame.module.css";
import { Link } from "react-router-dom";

export default function ProjectFrame(props) {
  return (
    <>
      <div className={ProjectFrameCss.container}>
      <a href={props.link} target="_blank">
        <img src={props.pic} />
      </a>
    </div>
        <h4>{props.text}</h4>
    </>
  );
}
