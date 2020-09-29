import React from 'react';
import { Carousel, Container } from 'react-bootstrap'

const GalleryCarousel = (props) => {

    
    return (
        <div>
            <Container className='gallerycarousel'>
                <Carousel interval='5000'>
                    {props.gallery.map((carousel, i) => <Carousel.Item className='carouselImg'>
                        <a href='/gallery'><img />{carousel.img}</a>
                        <Carousel.Caption className='carouselCaption'>
                            <h3>Img Title</h3>
                            <p>{carousel.desc}</p>
                        </Carousel.Caption>
                    </Carousel.Item>)}
                </Carousel>
            </Container>
        </div>
    )
}
export default GalleryCarousel;