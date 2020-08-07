import React from 'react';
import Hero from '../hero/Hero';
import Form from './form/Form';
import {motion} from "framer-motion";
import {pageTransitions, variant} from "../../pageTransitions"

const Contact = (props) => {
    return (
        <motion.main transition={variant} initial="out" animate='in' exit="out"  variants={pageTransitions} className="container">
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <Form />
        </motion.main>
    );

}

export default Contact;
