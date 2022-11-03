import React from "react";
import classes from './Contact.module.css';

const Contact = () => {
  return <div className={classes.layout}>
    <header className={classes.header}>
      <h1>Contact Me</h1>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
    </header>
    <form>
      <div>
        <label htmlFor="first_name">First name</label>
        <input id="first_name"/>
      </div>
      <div>
        <label htmlFor="last_name">Last name</label>
        <input id="last_name"/>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email"/>
      </div>
      <div className={classes.text}>
        <label htmlFor="message">Message</label>
        <textarea id="message"/>
      </div>
      <div className={classes.check}>
        <input id="checkbox" type="checkbox"/>
        <label htmlFor="checkbox">You agree to providing your data to Isaiah who may contact you</label>
      </div>
    </form>
    <button id="btn__submit" type="submit">Send message</button>
  </div>
};

export default Contact;