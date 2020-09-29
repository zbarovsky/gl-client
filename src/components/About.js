import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
const About = () => {

    return (
        <div>
            <Container fluid>
                <Row className='profilePic mb-3'>
                    <Col>
                        <img src='http://www.placekitten.com/200/200' alt='currently a kitty, will later be headshot of Gabe'/>
                    </Col>
                    <Col>
                        <p>
                            Skate ipsum dolor sit amet, speed wobbles berm smith grind impossible axle poseur Rudy Johnson. Wallows face plant bluntslide speed wobbles gap stoked kickturn. Face plant launch ramp acid drop Christ air birdie nosegrind Skateboard Shuffle. Aerial baseplate goofy footed Streetstyle in Tempe switch flail pressure flip. Stoked speed wobbles axle set masonite hand rail acid drop. Gnarly wall ride crooked grind rocket air lien air hospital flip. Downhill shoveit Ron Chapman full-cab bone air crooked grind front foot impossible. Crail slide heel flip 50-50 bluntslide salad grind gnar bucket. Hang up air ollie north mini ramp Tracker Jason Jesse steps. Bluntslide crailtap griptape soul skate berm wall ride.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;