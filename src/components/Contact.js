import React, {useState} from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap'

const Contact = () => {

    return (
        <div>
            <Container fluid className='mb-4'>
                <Row>
                    <Col>
                        <h3>
                            Got an idea for a piece of art? Click the button below to send us an email and we'll get back to you ASAP.
                        </h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {/* temp button until full backend built for email form */}
                        <Button href='mailto:plauron1993@gmail.com' target='_blank' variant='outline-light'>Contact</Button>
                    </Col>
                </Row>
            {/* contact form here */}
            {/* <Form>
                <Form.Control type='text' placeholder='Name' />

                <Form.Label>Email Address</Form.Label>
                <Form.Control type='email' placeholder='name@example.com'/>

                <Form.Label>Text Area</Form.Label>
                <Form.Control as='textarea' rows='5' />
            </Form> */}
            </Container>
        </div>
    )
}

export default Contact;