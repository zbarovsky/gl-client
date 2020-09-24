import React from 'react';
// import { Navbar } from 'react-bootstrap';
import { Route, Router } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className='container'>
                <div className='nav'>
                    <ul>
                        <li>
                            <Route exact to='/'>Home</Route>
                        </li>
                        <li>
                            <Route to='/gallery'>Gallery</Route>
                        </li>
                        <li>
                            <Route to='/shop'>Shop</Route>
                        </li>
                        <li>
                            <a href='mailto:placeholder@buttsNstuff.com'>Contact</a>
                        </li>
                        <li>
                            <Route to='/cart'>Cart</Route>
                        </li>
                    </ul>
                </div> 
            </div>
        </nav>
    )
}

export default Navbar;