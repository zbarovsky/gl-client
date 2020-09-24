import React from 'react';
// import { Navbar } from 'react-bootstrap';
import { NavLink, Route, Router } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div>
                <div>
                    <ul>
                        <li>
                            <NavLink exact to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/gallery'>Gallery</NavLink>
                        </li>
                        <li>
                            <NavLink to='/shop'>Shop</NavLink>
                        </li>
                        <li>
                            <a href='mailto:placeholder@buttsNstuff.com' target='_blank'>Contact</a>
                        </li>
                        <li>
                            <NavLink to='/cart'>Cart</NavLink>
                        </li>
                    </ul>
                </div> 
            </div>
        </nav>
    )
}

export default Navbar;