import React from "react";
import classes from './Container.module.css';
import Profile from "./Profile";
import Link from "./Link";
// import Social from "./Social";
// import share from '../../Assets/shareLogo.svg';


const Container = () => {
  return (
    <div className={classes.layout}>
      <div className={classes.container}>
        <Profile />
        <Link />
        {/* <Social /> */}
      </div>
    </div>
  )
};

export default Container;