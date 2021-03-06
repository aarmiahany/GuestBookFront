import React from 'react';
import Formgroup from '../../components/FormContents/Formgroup';
import { Form, Container, Card , Spinner } from 'react-bootstrap';
import Auth from '../../HOC/AuthComponent';
import { withRouter } from 'react-router-dom';

import '../styles/forms.css';

function Signup ({ _handleSubmit, _handleChange , showSpinner}) {
    return(
    <Container>  
        <Card className="text-center card_container">
         <Card.Header style={{backgroundColor:"#fff", color:"coral"}}>Create Your Account</Card.Header>
            <Card.Body>
                <Form className="form_container" onSubmit={_handleSubmit}>
                <Formgroup 
                        inputType="text"
                        placeholder="Enter Username..."
                        onChange={_handleChange}
                        name="username"
                    /> 
                    <Formgroup                  
                        inputType="email"
                        placeholder="Enter Your Email..."
                        onChange={_handleChange}
                        name="email"
                    /> 
                    <Formgroup 
                        inputType="number"
                        placeholder="Enter Your Phone..."
                        onChange={_handleChange}
                        name="phone"
                    /> 
                    <Formgroup 
                        inputType="text"
                        placeholder="Enter Your Password..."
                        onChange={_handleChange}
                        name="password"
                    /> 
                    <button  type="submit" className="btn btn_submit">
                           { showSpinner ? <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                           />: null}
                        Submit
                    </button>
                </Form>
            </Card.Body>
        </Card>
    </Container>
    )
}

export default withRouter(Auth(Signup, 'signup'));
