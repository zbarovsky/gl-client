import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'

const Logo = () => {

    return (
        <div>
            <Container fluid className='my-3 logo'>
                <Row>
                    <Col>
                        <img src='http://www.placekitten.com/600/200' alt='currently a thiccc kitty, later will be drawn logo from Gabe'/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Logo;