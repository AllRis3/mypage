import React from "react";
import { motion } from "framer-motion";
import Frame from "../../UI/Frame";
import Content from "../../UI/Content";
import Header from "../../UI/Header";

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
            <h3 className="aqua">Coming soon...</h3>
          </Content>
        </Frame>
      </motion.div>
    </React.Fragment>
  );
}
