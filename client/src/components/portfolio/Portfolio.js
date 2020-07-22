import React , { useState , useEffect } from 'react'
import Hero from '../hero/Hero';
import axios from 'axios';
import PortItem from './portItem/PortItem';


const Portfolio = (props) => {
    const [state,setState] = useState({
      projects:[]
    })
   
 
    useEffect(() => {
      axios.get('http://localhost:8080/api/portItems')
      .then(res=>res)
      .then(data=>{
       // console.log(data.data)
     
       setState(prevState=>{
         return{...prevState,projects:data.data}
       })
       
      })
    },[]);
  
    return (
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <PortItem item={state.projects} />
            
        </div>
    );

}

export default Portfolio;