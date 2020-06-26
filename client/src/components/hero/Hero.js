import React from "react";

function Hero(props) {

    return(
        <header>
            <div className="headerWrap">
            { props.title && <h1>{props.title}</h1> }
            { props.subTitle && <h3> {props.subTitle}</h3> }
            { props.text && <h3>{props.text}</h3> }
            </div>
            
        </header>
                        
              
    );

}


export default Hero;