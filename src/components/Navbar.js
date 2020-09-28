import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink, Route, Router } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Navbar sticky='top'  className='NavBar'>
                <Nav className='mr-auto NavBarList'>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/gallery'>Gallery</Nav.Link>
                    <Navbar.Text className='NavBarContact'><a href='mailto:placeholder@buttsNstuff.com' target='_blank'>Contact</a></Navbar.Text>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Navigation;