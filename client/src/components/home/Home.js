import React from "react";
import { Link } from "react-router-dom";
import Icons from "./icons/Icons";

import reactLogo from "./icons/logos/react.svg";
import nodejsLogo from "./icons/logos/nodejs.svg";
import htmlLogo from "./icons/logos/html.svg";
import cssLogo from "./icons/logos/css.svg";
import jsLogo from "./icons/logos/javascript.svg";
import sassLogo from "./icons/logos/sass.svg";
import mongoDbLogo from "./icons/logos/mongoDb.svg";
import bootstrapLogo from "./icons/logos/bootstrap.svg";

const Home = () => {
  const images = [
    { src: jsLogo, alt: "javascript" },
    { src: htmlLogo, alt: "HTML5" },
    { src: cssLogo, alt: "CSS3" },
    { src: bootstrapLogo, alt: "Bootstrap" },
    { src: sassLogo, alt: "Sass" },
    { src: reactLogo, alt: "React" },
    { src: nodejsLogo, alt: "Node.js" },
    { src: mongoDbLogo, alt: "MongoDB" },
  ];
  return (
    <div className="homepage">
      <div className="topContainer">
        <h1> <span className="orange">Hello,</span></h1>
        <h1>my name is Paul<span className="orange">.</span></h1>
      </div>
      <h2>I'm a<span className="orange"> web developer</span>.</h2>
      <div className="btnContainer">
        <Link className="btn"  to="/portfolio">See my portfolio</Link>
        <Link className="btn"  to="/CV">Download my CV</Link>
      </div>

      <Icons images={images} />
    </div>
  );
};

export default Home;
