import React from 'react';
import Contact from './Contact';
import {Container, Row, Col} from 'react-bootstrap'

const Gallery = (props) => {

    return (
        <div>
            <Container fluid className='my-5'>
                <div>
                    {props.gallery.map((gal,i)=>
                        <div className='mb-3'>
                            <Row>
                                <Col>
                                    <img className='galleryImg' />{gal.img}
                                </Col>
                                <Col>
                                    <p className='galleryDesc'>{gal.desc}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>{gal.price}</p>
                                </Col>
                            </Row>
                        </div> 
                    )}
                </div>
            </Container>
            <Contact />
        </div>
    )
}

export default Gallery;