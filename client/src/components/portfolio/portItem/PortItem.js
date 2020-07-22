import React from "react";
import {AiOutlineGithub} from "react-icons/ai";
import {FaEye} from "react-icons/fa";
const obj = ({ item }) => {
    return (
        <div className='portItems'>

       
            {
                item.map((obj, i) => (
                    <div  className='pItem' key={i}>
                        <img src={obj.src} alt={obj.alt} />
                        <div className="itemDesc">
                        <h3>{obj.title}</h3>
                        <p>{obj.description}</p>
                        <a target="_blank" className="btn2" rel="noopener noreferrer" href={obj.gitlink}>See repository <AiOutlineGithub /></a>
                        <a target="_blank" className="btn2" rel="noopener noreferrer" href={obj.seelink}>See project <FaEye /></a>
                        </div>
                        
                    </div>
                    //
                ))
            }

         
        </div>
    );
}

export default obj;