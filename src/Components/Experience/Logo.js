import React from "react";
import LogoCss from "./Logo.module.css";


export default function Logo(props) {
  return (
    <li className={LogoCss.list}>
      <img className={LogoCss.logos}
       src={props.logoImg}
        alt="logo" />
      {props.logoName}
    </li>
  );
}
