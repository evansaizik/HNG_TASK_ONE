import React from "react";
import classes from './Button.module.css';

const Button = (props) => {
  return (
    <a 
      id={props.id}
      href={props.href}
      className={classes.button} 
      >{props.children}
    </a>
  )
};

export default Button;