import React from 'react'
import Hero from '../hero/Hero';
function CV(props) {

    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            
        </div>
    );

}

export default CV;