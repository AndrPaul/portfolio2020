import React , { useState , useEffect } from 'react'
import Hero from '../hero/Hero';
import axios from 'axios';
import PortItem from './portItem/PortItem';
import {motion} from "framer-motion";
import {pageTransitions, variant} from "../../pageTransitions"

const Portfolio = (props) => {
    const [state,setState] = useState({
      projects:[]
    })
   
 
    useEffect(() => {
      axios.get('/api/portItems')
      .then(res=>res)
      .then(data=>{
       // console.log(data.data)
     
       setState(prevState=>{
         return{...prevState,projects:data.data}
       })
       
      })
    },[]);
  
    return (
      
        <motion.main initial="out" animate='in' exit="out" transition={variant}  variants={pageTransitions} className="container">
        
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <PortItem item={state.projects} />
            
        </motion.main>
    );

}

export default Portfolio;
