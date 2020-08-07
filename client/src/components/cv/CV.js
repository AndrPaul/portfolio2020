import React from 'react';
import DownloadCV from "./DownloadCV/DownloadCV"
import Hero from '../hero/Hero';
import {motion} from "framer-motion";
import {pageTransitions, variant} from "../../pageTransitions"
const CV = (props) => {

    return (
        <motion.main initial="out" animate='in' exit="out"  variants={pageTransitions} transition={variant} className="container">
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <DownloadCV />

        </motion.main>
    );

}

export default CV;
