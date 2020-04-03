import React from 'react';
import MessageContainer from '../../components/MessagesContents/MessageContainer';
import MessagesList from '../../components/MessagesContents/MessagesList';
import swal from 'sweetalert';

export default function Messages () {
    const _editMsg = _ => {
        swal({
            content: 'input'
        });
    }
    return  (
        <div>
            <MessageContainer>
                 <MessagesList messages={[1,2,3,4,5,6]} _editMsg={_editMsg}/>
            </MessageContainer>    
        </div>
    )
}