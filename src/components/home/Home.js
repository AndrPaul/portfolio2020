import React from 'react'
import Hero from '../hero/Hero';
function Home(props) {

    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            
        </div>
    );

}

export default Home;