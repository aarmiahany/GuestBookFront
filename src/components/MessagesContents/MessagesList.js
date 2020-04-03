import React from 'react';
import { ListGroup, Toast } from 'react-bootstrap';
import { FaRegEdit } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai' 

import '../styles/messages.css';



export default function MessagesList ({ messages = [] , _deleteMsg, _editMsg}) {
    return (
        <ListGroup>
            {
                messages && messages.length ? (
                    messages.map((m, k) => {
                        return (
                            <ListGroup.Item  key={k} className="msg_list">
                                 <div className="list_content">
                                    <Toast>
                                        <Toast.Header>
                                        <strong className="mr-auto">Message Content</strong>           
                                        </Toast.Header>
                                        <small style={{cursor:"pointer", paddingLeft:"10px"}}>replys</small>
                                        <Toast.Body>asdada</Toast.Body>
                                    </Toast>
                                 </div>
                                 <p  className="list_content" />   

                                 <p  className="list_icon">
                                     <AiOutlineDelete 
                                       onClick={_deleteMsg}
                                     size={20}/>
                                 </p>
                                 <p className="list_icon"><FaRegEdit size={20} onClick={_editMsg}/></p> 
                            </ListGroup.Item>       
                        )
                    })
                ) : null
            }
        </ListGroup>
    )
}