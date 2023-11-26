import React from "react";
import { Link } from 'react-scroll';

const Header =() => {
  return (
    <section id="header">
      <div className="headerContent">
        <span className="hello">Front-End React Developer</span>
        <p className="headerText">Hi. I'm Wiktor Leszkowicz. A begginer React developer basen in Wroclaw, Poland.</p>
        <Link className='btn'><img src=""/>Hire Me.</Link>
      </div>
      
    </section>
  )
}

export default Header