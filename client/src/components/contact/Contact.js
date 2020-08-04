import React from 'react';
import Hero from '../hero/Hero';
import Form from './form/Form';
import Helmet from 'react-helmet';


const Contact = (props) => {
    return (
        <main className="container">
            <Helmet>
                <title>Contact me</title>
            </Helmet>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <Form />
        </main>
    );

}

export default Contact;