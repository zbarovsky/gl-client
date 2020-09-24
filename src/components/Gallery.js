import React from 'react';

const Gallery = (props) => {

    // TODO: Map over all art pieces and include an img + description
    // single ex given below

    return (
        <div>
            <div className='gallery'>
               <ul>
                   {props.gallery.map((gal, i) => <li key={i}><img className='galleryImg'/>{gal.img} <p className='galleryDesc'>{gal.desc}</p></li>)}
               </ul>
            </div>
        </div>
    )
}

export default Gallery;