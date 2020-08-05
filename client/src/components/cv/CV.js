import React from 'react';
import DownloadCV from "./DownloadCV/DownloadCV"

import Hero from '../hero/Hero';
//import Helmet from 'react-helmet';


const CV = (props) => {

    return (
        <main className="container">
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <DownloadCV />

        </main>
    );

}

export default CV;
