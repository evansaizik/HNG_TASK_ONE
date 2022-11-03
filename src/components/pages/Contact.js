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
        <label>First name</label>
        <input></input>
      </div>
      <div>
        <label>Last name</label>
        <input></input>
      </div>
      <div>
        <label>Email</label>
        <input></input>
      </div>
      <div className={classes.text}>
        <label>Message</label>
        <textarea></textarea>
      </div>
      <div className={classes.check}>
        <input id="checkbox" type="checkbox"/>
        <label htmlFor="checkbox">You agree to providing your data to Isaiah who may contact you</label>
      </div>
    </form>
    <button type="submit">Send message</button>
  </div>
};

export default Contact;