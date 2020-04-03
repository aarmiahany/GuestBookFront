import React, { useState } from 'react';
import { Container, Card, Form} from 'react-bootstrap';
import Formgroup from '../../components/FormContents/Formgroup';
import swal from 'sweetalert';

export default function CreateNewMessage() {
   const [msgData, setMsgData] = useState({});

   const _handleChange = evt => {
         setMsgData({...msgData,  [evt.target.name]: evt.target.value });
    }

  const _handleSubmit = evt => {
        evt.preventDefault();

        // validate user inputs
        const { content, author } = msgData;
        if(!content || !author ){
            return swal("Could not create message", "Enter All Required Data", "error");
        }

    }

    return (
        <Container>  
        <Card className="text-center card_container">
         <Card.Header style={{backgroundColor:"#fff", color:"coral"}}>Create New Message</Card.Header>
            <Card.Body>
                <Form className="form_container" onSubmit={_handleSubmit}>
                <Formgroup 
                        inputType="text"
                        placeholder="Enter Message Content..."
                        onChange={_handleChange}
                        name="content"
                    /> 
                    <Formgroup                  
                        inputType="text"
                        placeholder="Enter Your Name..."
                        onChange={_handleChange}
                        name="author"
                    />  
                    <button  type="submit" className="btn btn_submit">
                        Enter
                    </button>
                </Form>
            </Card.Body>
        </Card>
    </Container>
    )
}
