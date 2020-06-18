import React  from 'react';
import { NavLink } from "react-router-dom";
import { AiOutlineHome, AiOutlineFolderOpen, AiOutlineSolution, AiOutlineUserAdd } from 'react-icons/ai';

const NavBar = () => {
    
        return (
            <div className="nav-wrap">
                <nav>
                    <ul>
                    <NavLink className="link" activeClassName="current" to="/">
                    <li> <AiOutlineHome /> </li>
                    </NavLink>
                    <NavLink className="link" activeClassName="current" to="/portfolio">
                    <li> <AiOutlineFolderOpen/></li>
                    </NavLink>
                    <NavLink className="link" activeClassName="current" to="/cv">
                    <li> <AiOutlineSolution/></li>
                    </NavLink>
                    <NavLink className="link" activeClassName="current" to="/Contact">
                    <li> <AiOutlineUserAdd/> </li>
                    </NavLink>
                    </ul>
                </nav>
               
            </div>
        )
    }

export default NavBar;