import React from 'react';
import Formgroup from '../../components/FormContents/Formgroup';
import { Form, Container, Card, Spinner } from 'react-bootstrap';
import Auth from '../../HOC/AuthComponent';
import { withRouter } from 'react-router-dom';

import '../styles/forms.css';

function Signin ({ _handleSubmit, _handleChange , showSpinner}) {
    return(
    <Container>  
        <Card className="text-center card_container">
         <Card.Header style={{backgroundColor:"#fff", color:"coral"}}>Hello Again</Card.Header>
            <Card.Body>
                <Form className="form_container" onSubmit={_handleSubmit}>
                    <Formgroup                  
                        inputType="email"
                        placeholder="Enter Your Email..."
                        onChange={_handleChange}
                        name="email"
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
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                           />: null}
                        Login
                    </button>
                </Form>
            </Card.Body>
        </Card>
    </Container>
    )
}

export default withRouter(Auth(Signin, 'signin'));