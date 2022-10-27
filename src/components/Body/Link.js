import React from "react";
import classes from './Link.module.css';
import Button from "../Button";

const Links = () => {
  return (
    <div className={classes.link}>
      <Button id='Links'><a href="https://twitter.com/evansaizik">Twitter</a></Button>
      <Button id='btn__zuri'><a href="https://training.zuri.team/">Zuri Team</a></Button>
      <Button id='books'><a href="http://books.zuri.team">Zuri Books</a></Button>
      <Button id='book__python'><a href="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>">Python Books</a></Button>
      <Button id='pitch'><a href="https://background.zuri.team">Background Check for Coders</a></Button>
      <Button id='book__design'><a href="https://books.zuri.team/design-rules">Design Books</a></Button>
    </div>
  )
}

export default Links;