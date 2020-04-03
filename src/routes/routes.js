import React from 'react';
import Signup from '../pages/signup';
import Signin from '../pages/signin';
import Messages from '../pages/messages';
import CreateNewMessage from '../pages/createNewMessage';

let routes = [
    {
        name:"signup" , path: "/signup", component: <Signup />, exact: true
    },
    {
        name:"signin" , path: "/signin", component: <Signin />, exact: true
    },
    {
        name:"messages" , path: "/messages", component: <Messages />, exact: true
    },
    {
        name:"createNewMessahe" , path: "/messages/create", component: <CreateNewMessage />, exact: true
    }
];

export default routes;

