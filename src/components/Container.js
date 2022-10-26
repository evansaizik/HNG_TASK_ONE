import React from "react";
import classes from './Container.module.css';

const Container = () => {
  return (
    <div className={classes.layout}>
      <div className={classes.container}>
        <div className={classes.one}></div>
        <div className={classes.two}></div>
      </div>
    </div>
  )
};

export default Container;