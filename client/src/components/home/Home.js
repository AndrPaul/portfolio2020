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
    <main  className="container">
    
      <div className="topContainer">
        <h1><span className="green">Hello,</span></h1>
        <h1>my name is Paul<span className="green">.</span></h1>
        <h2>I'm a<span className="green"> web developer</span></h2>
        <h2>based in <span className="green">Belgium</span>.</h2>
        <div className="btnContainer">
          <Link className="btn" to="/portfolio">See my <span className="green">portfolio</span></Link>
          <Link className="btn" to="/CV">Download <span className="green">CV</span></Link>
        </div>

        <Icons images={images} />
      </div>
    </main>
  );
};

export default Home;
