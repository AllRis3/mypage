import React from "react";
import { motion } from "framer-motion";
import Frame from "../../UI/Frame";
import Content from "../../UI/Content";
import Header from "../../UI/Header";
import ProjectFrame from "./ProjectFrame";
import mealspic from "../pictures/Meals4You.png";

export default function Work() {
  return (
    <React.Fragment>
      <motion.div
        initial={{ y: -300 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <Frame>
          <Content>
            <Header>Work</Header>
            <ProjectFrame
              pic={mealspic}
              link={"https://allris3.github.io/Meals4You/"}
              text="A small order food app"
            />
          </Content>
        </Frame>
      </motion.div>
    </React.Fragment>
  );
}
