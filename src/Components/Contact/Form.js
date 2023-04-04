import React from "react";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import FormCss from "./Form.module.css";

export default function Form(props) {
  // const [formInputsValidity, setFormInputsValidity] = useState({
  //   name: true,
  //   email: true,
  //   message: true,
  // });
  // const nameInputRef = useRef();
  // const emailInputRef = useRef();
  // const messageInputRef = useRef();
  // const isEmpty = (value) => value.trim() === '';
  
  // const validateHandler = () => {
    
  //   const enteredName = nameInputRef.current.value;
  //   console.log(enteredName)
  //   const enteredEmail = emailInputRef.current.value;
  //   const enteredMessage = messageInputRef.current.value;

  //   const enteredNameIsValid = !isEmpty(enteredName);
  //   const enteredEnailIsValid = !isEmpty(enteredName);
  //   const enteredMessageIsValid = !isEmpty(enteredName);


  //   const formIsValid= 
  //   enteredNameIsValid &&
  //   enteredEnailIsValid &&
  //   enteredMessageIsValid;
    
  //   setFormInputsValidity({
  //     name: enteredNameIsValid,
  //     email: enteredEnailIsValid,
  //     message: enteredMessageIsValid,
  //   });
  //   console.log(formIsValid)
  // };
  
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
        // ref={nameInputRef}
      />
      <input
        type="text"
        name="user_email"
        placeholder="Email"
        typeof="email"
        required={true}
        // ref={emailInputRef}
      />
      <input type="text" name="subject" placeholder="Subject" typeof="text" />
      <textarea
        type="text"
        name="message"
        placeholder="Message"
        typeof="text"
        required={true}
        // ref={messageInputRef}
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
