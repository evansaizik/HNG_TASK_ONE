import React from "react";
import classes from './Button.module.css';
import { Link } from "react-router-dom";

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

export const button = props => {
  return <Link to={props.to} id={props.id} className={classes.button}>{props.children}</Link>
}

export default Button;