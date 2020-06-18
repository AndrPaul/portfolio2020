import React from "react";

function Hero(props) {

    return(
        <header>
            { props.title && <h1>{props.title}</h1> }
            { props.subTitle && <h3> {props.subTitle}</h3> }
            { props.text && <h3>{props.text}</h3> }
        </header>
                        
              
    );

}


export default Hero;