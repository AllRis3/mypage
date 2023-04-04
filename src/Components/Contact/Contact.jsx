import React from "react";
import { motion } from "framer-motion";
import Form from "./Form";
import Frame from "../../UI/Frame";
import Content from "../../UI/Content";
import Map from "./Map";
import Header from "../../UI/Header";

export default function Contact(event) {
  return (
    <React.Fragment>
      <motion.div
        initial={{ y: -300 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <Frame>
          <Content>
            <Header>Contact me!</Header>
            <Form />
          </Content>
          <Content>
            <Map />
          </Content>
        </Frame>
      </motion.div>
    </React.Fragment>
  );
}
