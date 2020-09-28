import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'

const Footer = () => {
    return (
        <div>
            <div className='copywrite'>
                <a href='https://zackbarovsky.dev/' target='_blank'>© Zack Barovsky 2020</a>
            </div>
            <div className='socialMedia'>
                <ul className='footerList'>
                    <li>
                        <a href='https://www.instagram.com/docterques/' target='_blank'>Instagram</a>
                    </li>
                    <li>
                        <a href='https://www.twitch.tv/docterques' target='_blank'>Twitch</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;