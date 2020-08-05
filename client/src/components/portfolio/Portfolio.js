import React , { useState , useEffect } from 'react'
import Hero from '../hero/Hero';
import axios from 'axios';
import PortItem from './portItem/PortItem';
//import Helmet from 'react-helmet';

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
        <main className="container">
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <PortItem item={state.projects} />
            
        </main>
    );

}

export default Portfolio;
