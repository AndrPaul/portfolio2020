import React from 'react';
import { NavLink } from "react-router-dom";
import { AiOutlineHome, AiOutlineFolderOpen, AiOutlineSolution, AiOutlineUserAdd } from 'react-icons/ai';

const NavBar = () => {

    return (
        <div className="nav-wrap">
            <nav>

                <NavLink className="link" activeClassName="current" activeStyle={{ color: '#e79c2a' }} exact to="/">
                    <AiOutlineHome />
                </NavLink>
                <NavLink className="link" activeClassName="current" activeStyle={{ color: '#e79c2a' }} to="/portfolio">
                    <AiOutlineFolderOpen />
                </NavLink>
                <NavLink className="link" activeClassName="current" activeStyle={{ color: '#e79c2a' }} to="/cv">
                    <AiOutlineSolution />
                </NavLink>
                <NavLink className="link" activeClassName="current" activeStyle={{ color: '#e79c2a' }} to="/Contact">
                    <AiOutlineUserAdd />
                </NavLink>

            </nav>

        </div>
    )
}

export default NavBar;