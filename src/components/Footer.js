import React from 'react'
import {Nav, Navbar, Container, Row, Col} from 'react-bootstrap'

const Footer = () => {
    return (
        <div>
            <Navbar sticky='bottom'  className='justify-content-end footer mt-4'>
                <Nav>
                    <Nav.Link className='copywrite' href='https://zackbarovsky.dev/' target='_blank'>© Zack Barovsky 2020</Nav.Link>
                </Nav>
                <Nav className='justify-content-end socialMediaLinks'>
                    <Nav.Link href='https://www.instagram.com/docterques/' target='_blank'>Instagram</Nav.Link>
                    <Nav.Link href='https://www.twitch.tv/docterques' target='_blank' >Twitch</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Footer;