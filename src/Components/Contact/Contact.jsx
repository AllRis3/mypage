import React, { useRef } from "react";
import ContactCss from "./Contact.module.css";
import { motion } from "framer-motion";
import MyMap from "./MyMap";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE,
        process.env.REACT_APP_EMAIL_TEMPLATE,
        form.current,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          e.target.reset();
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  const [buttonClicked, setButtonClicked] = useState("false");
  function HandleClick() {
    return setButtonClicked(!buttonClicked);
  }

  return (
    <React.Fragment>
      <motion.div
        initial={{ y: -300 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className={ContactCss.maincontent}>
          <div className={ContactCss.infocontainer}>
            <h1 className={ContactCss.header}>
              Contact me!
              <div className={ContactCss.line}></div>
            </h1>
            <form ref={form} onSubmit={sendEmail} className={ContactCss.form}>
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                typeof="text"
                required={true}
              />
              <input
                type="text"
                name="user_email"
                placeholder="Email"
                typeof="email"
                required={true}
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                typeof="text"
              />
              <textarea
                type="text"
                name="message"
                placeholder="Message"
                typeof="text"
                required={true}
                rows="8"
                className={ContactCss.message}
              />
              <button
                onClick={HandleClick}
                type={buttonClicked ? "button" : "submit"}
                value={buttonClicked ? "value" : "Send"}
                className={
                  buttonClicked
                    ? ContactCss.normalButton
                    : ContactCss.goneButton
                }
              >
                {buttonClicked ? "Send Email" : "wooooow!!!"}
              </button>
            </form>
          </div>
          <div className={ContactCss.mapContainer}>
            <MyMap />
          </div>
        </div>
      </motion.div>
    </React.Fragment>
  );
}
