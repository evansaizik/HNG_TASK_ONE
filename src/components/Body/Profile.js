import React from "react";
import classes from './Profile.module.css';

const Profile = () => {
  return(
    <div 
      className={classes.profile}
    >
      <img src="https://avatars.githubusercontent.com/u/108002096?v=4" id="profile__img" alt="profile_photo"/>
      <h1 id="twitter">evansaizik</h1>
      <h1 id="slack">(slackName)</h1>
    </div>
  )
};

export default Profile;