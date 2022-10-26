import React from "react";
import classes from './Container.module.css';
import Profile from "./Profile";
import Link from "./Link";

const Container = () => {
  return (
    <div className={classes.layout}>
      <div className={classes.container}>
        <Profile />
        <Link />
      </div>
    </div>
  )
};

export default Container;