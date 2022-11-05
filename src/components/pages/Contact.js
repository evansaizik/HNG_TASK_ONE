import React, { useState, useReducer } from "react";
import classes from './Contact.module.css';

const messageReducer = (state, action) => {
  if (action.type === 'USER_MESSAGE') {
    return { value: action.val, isValid: action.val.length > 0 }
  }
  if (action.type === 'USER_BLUR') {
    return { value: state.value, isValid: state.value.length > 0 };
  }
  return { value: '', isValid: false }
};

const emailReducer = (state, action) => {
  if (action.type === 'USER_EMAIL') {
    return {value: action.val, isValid: action.val.includes('@')};
  }
  if (action.type === 'USER_BLUR') {
    return {value: state.value, isValid: state.value.includes('@')};
  }

  return {value: '', isValid: false};
}

const Contact = () => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');

  const [messageState, dispatchMessage] = useReducer(messageReducer, {
    value: '', 
    isValid: true,
  });

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: true,
  })
  
  const fNameHandler = (event) => {
    setFName(event.target.value)
  }

  const lNameHandler = (event) => {
    setLName(event.target.value)
  }

  const emailHandler = (event) => {
    dispatchEmail({type: 'USER_EMAIL', val: event.target.value })
  }

  const validateEmailHandler = () => {
    dispatchEmail({type: 'USER_BLUR'})
  }

  const messageHandler = (event) => {
    dispatchMessage({
      type: 'USER_MESSAGE',
      val: event.target.value
    })
  }

  const validateMessageHandler = () => {
    dispatchMessage({type: 'USER_BLUR'})
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if(fName === '' || lName === '' || emailState === '') {
      return;
    }
    setFName('');
    setLName('');
    emailState.value = '';
    messageState.value = '';
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
        <input type='email' className={!emailState.isValid ? classes.invalid : ''} placeholder="yourname@email.com" id="email" value={emailState.value} onChange={emailHandler} onBlur={validateEmailHandler}/>
        {!emailState.isValid && <span className={classes.span}>your email should include '@'</span>}
      </div>
      <div className={classes.text}>
        <label htmlFor="message">Message</label>
        <textarea className={ !messageState.isValid ?classes.invalid : ''} placeholder="Send me a message and I'll reply you as soon as possible." id="message" value={messageState.value} onBlur={validateMessageHandler} onChange={messageHandler} />
        {!messageState.isValid && <span className={classes.span}>Please enter a message</span>}
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