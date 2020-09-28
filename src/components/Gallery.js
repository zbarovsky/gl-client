import React from 'react';
import Contact from './Contact';

const Gallery = (props) => {

    return (
        <div>
            <div className='gallery'>
               <ul>
                   {props.gallery.map((gal, i) => <li key={i}><img className='galleryImg' />{gal.img} <p className='galleryDesc'>{gal.desc}</p></li>)}
               </ul>
            </div>
            <div>
                <Contact />
            </div>
        </div>
    )
}

export default Gallery;