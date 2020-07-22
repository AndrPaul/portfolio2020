import React from "react";

const Hero =(props) => {

    return(
        <header>
            <div className="headerWrap">
            { props.title && <h1>{props.title}</h1> }
            { props.subTitle && <h3> {props.subTitle}</h3> }
          
            </div>
            
        </header>
                        
              
    );

}


export default Hero;