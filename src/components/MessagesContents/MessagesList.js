import React from 'react';
import { ListGroup, Toast } from 'react-bootstrap';
import { FaRegEdit } from 'react-icons/fa';
import { MdReply } from 'react-icons/md' 
import { AiOutlineDelete } from 'react-icons/ai' 
import axios from 'axios';
import swal from 'sweetalert';

import '../styles/messages.css';


export default function MessagesList ({ messages = [] , _deleteMsg, _editMsg}) {
    let token = JSON.parse(sessionStorage.getItem("accessToken"));
    let tokenToSend = token.tokenID + ' ' + token.issuedDate;
    const _showInput = id => {
        swal({
            text: 'Reply..',
            content: "input",
            button: {
              text: "Enter!",
              closeModal: false,
            },
          })
          .then(v => {
               if(v){
                 return axios({
                    url: "/message/reply",
                    method: "POST",
                    data: { id, content: v },
                    headers: { Authorization: tokenToSend }
                })
            }
          })
          .then(res => swal("Done", "You Replyed To Message Sucessfully", "success"))
          .catch(ex => swal("Error", "Could not Reply To Message", "error"))
    }
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
                                        <strong className="mr-auto">{m.content}</strong>  
                                        <small>By: {m.author}</small>
                                        </Toast.Header>
                                        <Toast.Body>
                                       <div className="d-flex justify-content-start">     
                                        <p className="text-muted">replys:</p>
                                        <p style={{flexGrow:1}}></p>
                                        <p style={{color:"coral", cursor:"pointer"}}
                                         onClick={() => _showInput(m._id)}><MdReply size={18}/> </p>
                                      </div>  
                                            {
                                                m.replies && m.replies.length ? m.replies.map((r, k) => {
                                                    return (<React.Fragment key={k}>                                                      
                                                        <small 
                                                        style={{display:"block", 
                                                        padding:"6px",
                                                        borderBottom:"1px solid coral",
                                                        fontSize:"16px"}}>{r.content}</small>                                  
                                                        </React.Fragment>
                                                    )
                                                })
                                                 : null                                           
                                            }
                                        </Toast.Body>
                                    </Toast>
                                 </div>
                                 <p  className="list_content" />   

                                 <p  className="list_icon">
                                     <AiOutlineDelete 
                                       onClick={() => _deleteMsg(m._id)}
                                     size={20}/>
                                 </p>
                                 <p className="list_icon"><FaRegEdit size={20} onClick={() => _editMsg(m._id)}/></p> 
                            </ListGroup.Item>       
                        )
                    })
                ) : null
            }
        </ListGroup>
    )
}