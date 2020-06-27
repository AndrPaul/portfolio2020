import React , { useState , useEffect } from 'react'
import Hero from '../hero/Hero';
import axios from 'axios';
import PortItem from './portItem/PortItem';


function Portfolio(props) {

    const items = [
        {
            src: '', 
            alt: '',
            title: '',
            description: '',
            gitlink: '',
            seelink: ''
        },
    ]
    useEffect(() => {
        getBlogPost();   
    });
    getBlogPost = () => {
        axios.get('/api')
          .then((response) => {
            const data = response.data;
            this.setState({ posts: data });
            console.log('Data has been received!!');
          })
          .catch(() => {
            alert('Error retrieving data!!!');
          });
      }
    return (
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <PortItem item={items} />
        </div>
    );

}

export default Portfolio;