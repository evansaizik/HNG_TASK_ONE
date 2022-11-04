import React from "react";
import classes from './Link.module.css';
import Button from "../Button";
import { button as BUTTON } from "../Button";
import Social from './Social'

const Links = () => {
  return (
    <div className={classes.link}>
      <Button id='Links' href="https://twitter.com/evansaizik">Twitter</Button>
      <Button id='btn__zuri' href="https://training.zuri.team/">Zuri Team</Button>
      <Button id='books'href="http://books.zuri.team">Zuri Books</Button>
      <Button id='book__python' href="https://books.zuri.team/python-for-beginners?ref_id=Evans_Isaiah">Python Books</Button>
      <Button id='pitch' href="https://background.zuri.team">Background Check for Coders</Button>
      <Button id='book__design' href="https://books.zuri.team/design-rules">Design Books</Button>
      <BUTTON id='contact' to='/contact'>Contact Me</BUTTON>
      <Social />
    </div>
  )
}

export default Links;