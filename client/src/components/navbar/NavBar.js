import React from 'react';
import { NavLink } from "react-router-dom";
import { AiOutlineMail,AiOutlineHome, AiOutlineFolderOpen, AiOutlineSolution } from 'react-icons/ai';

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
                <NavLink className="link" activeClassName="current" activeStyle={{ color: color }} to="/cv">
                    <AiOutlineSolution />
                </NavLink>
                <NavLink className="link" activeClassName="current" activeStyle={{ color: color }} to="/Contact">
                    <AiOutlineMail />
                </NavLink>

            </nav>

        </div>
    )
}

export default NavBar;