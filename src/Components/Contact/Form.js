import React from "react";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import FormCss from "./Form.module.css";

export default function Form(props) {
  
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
    <form ref={form} onSubmit={sendEmail} className={FormCss.form}>
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
      <input type="text" name="subject" placeholder="Subject" typeof="text" />
      <textarea
        type="text"
        name="message"
        placeholder="Message"
        typeof="text"
        required={true}
        rows="8"
        className={FormCss.message}
      />
      <button
        onClick={HandleClick}
        type={buttonClicked ? "button" : "submit"}
        value={buttonClicked ? "value" : "Send"}
        className={buttonClicked ? FormCss.normalButton : FormCss.goneButton}
      >
        {buttonClicked ? "Send Email" : "Fill the form!"}
      </button>
    </form>
  );
}
