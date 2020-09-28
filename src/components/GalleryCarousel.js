import React from 'react';
import { Carousel } from 'react-bootstrap'

const GalleryCarousel = (props) => {

    
    return (
        <div>
            <div className='gallerycarousel'>
                <Carousel interval='5000' pause='hover'>
                    {props.gallery.map((carousel, i) => <Carousel.Item>
                        <a href='/gallery'><img /> {carousel.img}</a>
                        <Carousel.Caption>
                            <h3>Img Title</h3>
                            <p>{carousel.desc}</p>
                        </Carousel.Caption>
                    </Carousel.Item>)}
                </Carousel>
            </div>
        </div>
    )
}
export default GalleryCarousel;