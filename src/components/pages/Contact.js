import React, { useState } from "react";
import classes from './Contact.module.css';

const Contact = () => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  
  const fNameHandler = (event) => {
    setFName(event.target.value)
  }

  const lNameHandler = (event) => {
    setLName(event.target.value)
  }

  const emailHandler = (event) => {
    setEmail(event.target.value)
  }

  const messageHandler = (event) => {
    setMessage(event.target.value);
  }
  const submitHandler = (event) => {
    event.preventDefault();

    if(fName === '' || lName === '' || email === '') {
      return;
    }

    // console.log(fName, lName, email, message)
    setFName('');
    setLName('');
    setEmail('');
    setMessage('');
  }

  return <div className={classes.layout}>
    <header className={classes.header}>
      <h1>Contact Me</h1>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
    </header>
    <form onSubmit={submitHandler}>
      <div className={classes.name}>
        <div className={classes.row}>
          <label htmlFor="first_name">First name</label>
          <input type='text' placeholder="Enter your first name" id="first_name" value={fName} onChange={fNameHandler}/>
        </div>
        <div className={classes.row}>
          <label htmlFor="last_name">Last name</label>
          <input type='text' placeholder="Enter your last name" id="last_name" value={lName} onChange={lNameHandler}/>
        </div>
      </div>
      <div className={classes.email}>
        <label htmlFor="email">Email</label>
        <input type='email' placeholder="yourname@email.com" id="email" value={email} onChange={emailHandler}/>
      </div>
      <div className={classes.text}>
        <label htmlFor="message">Message</label>
        <textarea placeholder="Send me a message and I'll reply you as soon as possible." id="message" value={message} onChange={messageHandler}/>
      </div>
      <div className={classes.check}>
        <input id="checkbox" type="checkbox"/>
        <label htmlFor="checkbox">You agree to providing your data to Isaiah who may contact you</label>
      </div>
    <button id="btn__submit" type="submit">Send message</button>
    </form>
  </div>
};

export default Contact;