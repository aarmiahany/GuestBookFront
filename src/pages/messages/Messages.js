import React, { useEffect, useState } from 'react';
import MessageContainer from '../../components/MessagesContents/MessageContainer';
import MessagesList from '../../components/MessagesContents/MessagesList';
import swal from 'sweetalert';
import axios from 'axios';

export default function Messages () {
    let token = JSON.parse(sessionStorage.getItem("accessToken"));
    let tokenToSend = token.tokenID + ' ' + token.issuedDate;
    let [msgData, setMsgData] = useState([]);
    useEffect(() => {
        axios.get("/message", { headers: { Authorization: tokenToSend }})
        .then(res => {
            let data = JSON.parse(res.data.msg)
            setMsgData(data)
        })
        .catch(ex => {
           swal("Error", "Failed To Load Some Data", "error");
        });
    }, [tokenToSend]);

    const _editMsg = id => {
        swal({
            text: 'Enter The New Content',
            content: "input",
            button: {
              text: "Enter!",
              closeModal: false,
            },
          })
          .then(v => {
               if(v){
                 return axios({
                    url: "/message",
                    method: "PUT",
                    data: { id, content: v },
                    headers: { Authorization: tokenToSend }
                })
            }
          })
          .then(res => swal("Done", "Message Updated Succssfully", "success"))
          .catch(ex => swal("Error", "Could not Update Message", "error"))
          
    }
    const _deleteMsg = id => {
        swal("Warning!", "Are You Sure To Delete This Message","warning")
        .then(v => {
            if(v){
                 return axios({
                    url: "/message",
                    method: "DELETE",
                    data: { id },
                    headers: { Authorization: tokenToSend }
                })
            }
        })
        .then(res => swal("Done", "Message Deleted Succssfully", "success"))
        .catch(ex => swal("Error", "Could not Delete Message", "error"))
      
    }
    return  (
        <div>
            <MessageContainer>
                 <MessagesList messages={msgData} _editMsg={_editMsg} _deleteMsg={_deleteMsg}/>
            </MessageContainer>    
        </div>
    )
}