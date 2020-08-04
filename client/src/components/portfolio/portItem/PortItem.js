import React from "react";
import {AiOutlineGithub} from "react-icons/ai";
import {FaEye} from "react-icons/fa";

const obj = ({ item }) => {
    return (
        <div className='portItems'>

       
            {
                item.map((obj) => (
                    <div  style={{backgroundImage:`url(http://localhost:3000/images/${obj.src}.png)`}}   className='pItem' key={obj._id}>
                                         
                      
                        <h3>{obj.title}</h3>
                        <div className="btnContainer">
                        <a target="_blank" className="btn2" rel="noopener noreferrer" href={obj.gitlink}><AiOutlineGithub />&nbsp;Repository </a>
                        <a target="_blank" className="btn2" rel="noopener noreferrer" href={obj.seelink}><FaEye />&nbsp;Project </a>
                        </div>
                       
                        <p>{obj.description}</p>
                      
                        
                    </div>
                    //
                ))
            }

         
        </div>
    );
}

export default obj;