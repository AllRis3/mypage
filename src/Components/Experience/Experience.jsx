import React from "react";
import { motion } from "framer-motion";
import Frame from "../../UI/Frame";
import Content from "../../UI/Content";
import Header from "../../UI/Header";
import Technologies from "./Technologies";
import Info from "./Info";

export default function Experience() {
  return (
    <React.Fragment>
      <motion.div
        initial={{ y: -300 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <Frame>
          <Content>
            <Header>Experience</Header>
            <Info />
          </Content>
          <Content>
            <Technologies />
          </Content>
        </Frame>
      </motion.div>
    </React.Fragment>
  );
}
