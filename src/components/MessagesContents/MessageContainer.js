import React from 'react';
import { Container , Card} from 'react-bootstrap';
import { GoPlusSmall } from 'react-icons/go';
import { useHistory } from 'react-router-dom';

export default function MessageContainer ({ children }) {
    const { push } = useHistory();
    return (
        <Container>  
        <Card className="text-center card_container">
         <Card.Header style={{backgroundColor:"#fff", color:"coral"}}>
             All Messages
             <button 
             onClick={() => push("/messages/create")}
             className="float-right btn" style={{color:"#fff", backgroundColor:"coral"}}><GoPlusSmall/> create new</button>
         </Card.Header>
            <Card.Body>
                { children }
            </Card.Body>
         </Card>
        </Container>    
    )
}