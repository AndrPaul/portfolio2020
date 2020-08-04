import React from "react";

const Hero =(props) => {

    return(
        <header>
            <div className="topHero">
            { props.title && <h1>{props.title}</h1> }
            
            </div>
            { props.subTitle && <h3> {props.subTitle}</h3> }
        </header>
                        
              
    );

}


export default Hero;