import React from 'react';
import { NavLink, Link } from "react-router-dom";
import { AiOutlineMail,AiOutlineHome, AiOutlineFolderOpen} from 'react-icons/ai';
import {FiLinkedin ,FiGithub} from 'react-icons/fi';


const NavBar = () => {

    const color = '#13aa52'

    return (
        <div className="nav-wrap">
            <nav>
            
                <NavLink className="link" activeClassName="current" activeStyle={{ color: color }} exact to="/">
                    <AiOutlineHome />
                </NavLink>
                <NavLink className="link" activeClassName="current" activeStyle={{ color: color }} to="/portfolio">
                    <AiOutlineFolderOpen />
                </NavLink>
                <NavLink className="link" activeClassName="current" activeStyle={{ color: color }} to="/Contact">
                    <AiOutlineMail />
                </NavLink>
                <a rel="noopener noreferrer" href="https://www.linkedin.com/in/paul-andrica/" className="link linkedIn" target="_blank"><FiLinkedin/></a>
                <a rel="noopener noreferrer" href="https://github.com/AndrPaul" className="link github" target="_blank"><FiGithub/></a>
                
                   
                

            </nav>

        </div>
    )
}

export default NavBar;