import React from "react";

function Icons({ images }) {
  return (
    <div className='icons'>
      <ul>
          {
          
          images.map((img,i)=>(
               
            <li key={i}>
            <img src={img.src} alt={img.alt} />
            </li>
         ))
          
          }
          </ul>
    </div>
  );
}

export default Icons;
