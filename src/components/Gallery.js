import React from 'react';
import Contact from './Contact';

const Gallery = (props) => {

    // TODO: Map over all art pieces and include an img + description
    // single ex given below

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