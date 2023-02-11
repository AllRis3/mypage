import React from "react";
import AboutMeCss from "./AboutMe.module.css";
import ProfPic from "../pictures/JustMe.jpg";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <React.Fragment>
      <motion.div
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className={AboutMeCss.maincontent}>
          <div className={AboutMeCss.infocontainer}>
            <h1 className={AboutMeCss.header}>
              About Me
              <div className={AboutMeCss.line}></div>
            </h1>
            <div className={AboutMeCss.mainInfo}>
              <div className={AboutMeCss.par1}>
                <p>
                  As a computer enthusiast I always remember myself, from my
                  early ages, trying to learn how to use my fathers computer. I
                  self taught repairing and fixing any pc issue
                  (software/hardware). Then I got familiar with programs like
                  Photoshop, Corel Draw and started creating my onw design
                  projects. I like learning new technologies and try different
                  things.
                </p>
              </div>
              <div className={AboutMeCss.par2}>
                <p>
                  Lately i started learning programming and found out an
                  exciting new world of opportunities and challenges for me. I
                  was always passionate about creating staff but when i saw my
                  first code working i realised the real magic of programming.
                </p>
              </div>
            </div>
          </div>
          <div className={AboutMeCss.picbox}>
            <img className={AboutMeCss.pic} src={ProfPic} alt="My profile" />
            <div className={AboutMeCss.picBorder}> </div>
          </div>
        </div>
      </motion.div>
    </React.Fragment>
  );
}
