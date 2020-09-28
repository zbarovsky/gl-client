import React, {useState} from 'react';
import { Form } from 'react-bootstrap'

const Contact = () => {

    return (
        <div>
            <div>
                <h3>
                    Got an idea for a piece of art? Fill out the below and we'll get back to you ASAP.
                </h3>
            </div>
            {/* contact form goes here */}
            <Form>
                <Form.Control type='text' placeholder='Name' />

                <Form.Label>Email Address</Form.Label>
                <Form.Control type='email' placeholder='name@example.com'/>

                <Form.Label>Text Area</Form.Label>
                <Form.Control as='textarea' rows='5' />
            </Form>
        </div>
    )
}

export default Contact