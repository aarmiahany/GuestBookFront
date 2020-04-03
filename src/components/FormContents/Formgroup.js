import React from 'react';
import { Form } from 'react-bootstrap';

export default function Formgroup ({ inputType, placeholder, onChange, name }) {
    return (
        <Form.Group controlId={`formBasic${inputType}`} style={{marginBottom:"30px"}}>
            <Form.Control 
            type={inputType} 
            placeholder={placeholder} 
            name={name}
            onChange={onChange}
            />
        </Form.Group>
    )
}