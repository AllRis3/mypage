import React from "react";
import WorkCss from "./Work.module.css";
import { motion } from "framer-motion";

export default function Work() {
  return (
    <React.Fragment>
      <motion.div
        initial={{ y: -300 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className={WorkCss.maincontent}>
          <div className={WorkCss.infocontainer}>
            <h1 className={WorkCss.header}>
              Work
              <div className={WorkCss.line}></div>
            </h1>
            <h3>Coming soon...</h3>
          </div>
        </div>
      </motion.div>
    </React.Fragment>
  );
}
