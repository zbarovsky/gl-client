import React, {useState} from 'react';
import { Form } from 'react-bootstrap'

const Contact = () => {

    return (
        <div>
            <div>
                <h3>
                    Got an idea for a piece of art? Click the button below to send us an email and we'll get back to you ASAP.
                </h3>
            </div>
            <div>
                {/* temp button until full backend built for email form */}
                <button>
                    <a href='mailto:placeholder@buttsNstuff.com' target='_blank'>Contact</a>
                </button>
            </div>
            {/* contact form here */}
            {/* <Form>
                <Form.Control type='text' placeholder='Name' />

                <Form.Label>Email Address</Form.Label>
                <Form.Control type='email' placeholder='name@example.com'/>

                <Form.Label>Text Area</Form.Label>
                <Form.Control as='textarea' rows='5' />
            </Form> */}
        </div>
    )
}

export default Contact