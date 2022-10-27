import React from "react";
import classes from './Social.module.css';
import slack from '../../Assets/slack.svg';
import github from '../../Assets/Icon.png';

const Social = () => {
  return (
    <div className={classes.container}>
      <div>
      <img src={slack} alt='slack_logo' />
      <img src={github} alt='github_logo' />
      </div>
    </div>
  )
};

export default Social;