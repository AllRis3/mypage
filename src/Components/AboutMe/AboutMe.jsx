import React from "react";
import AboutMeCss from "./AboutMe.module.css";
import ProfPic from "../pictures/JustMe.jpg";
import { motion } from "framer-motion";
import Frame from "../../UI/Frame";
import Content from "../../UI/Content";
import Header from "../../UI/Header";

export default function AboutMe() {
  return (
    <React.Fragment>
      <motion.div
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <Frame>
          <Content>
            <Header>About Me</Header>
            <p>
              As a computer enthusiast I always remember myself, from my early
              ages, trying to learn how to use my fathers computer. I self
              taught repairing and fixing any pc issue (software/hardware). Then
              I got familiar with programs like Photoshop, Corel Draw and
              started creating my onw design projects. I like learning new
              technologies and try different things.
            </p>
            <p>
              Lately i started learning programming and found out an exciting
              new world of opportunities and challenges for me. I was always
              passionate about creating staff but when i saw my first code
              working i realised the real magic of programming.
            </p>
          </Content>
          <Content>
            <div className={AboutMeCss.picbox}>
              <img className={AboutMeCss.pic} src={ProfPic} alt="My profile" />
              <div className={AboutMeCss.picBorder}> </div>
            </div>
          </Content>
        </Frame>
      </motion.div>
    </React.Fragment>
  );
}
