import React from "react";
import classes from './Contact.module.css';

const Contact = () => {
  return <div className={classes.layout}>
    <header className={classes.header}></header>
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
      <div>
        <label>Message</label>
        <textarea></textarea>
      </div>
    </form>
  </div>
};

export default Contact;