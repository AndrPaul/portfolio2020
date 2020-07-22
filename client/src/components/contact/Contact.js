import React from 'react';
import Hero from '../hero/Hero';
import Form from './form/Form';



const Contact = (props) => {
    return (
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <Form />
        </div>
    );

}

export default Contact;