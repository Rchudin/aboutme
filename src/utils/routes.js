import React from "react";
import {Redirect} from "react-router-dom";
import Home from "../components/home/Home";
import Contacts from "../components/contacts/Contacts";
import About from "../components/about/About";
import InfoContacts from "../components/contacts/InfoContacts";
import SendMessageContainer from "../components/send_message/SendMessageContainer";

export default [
    {
        component: Home,
        path: '/',
        exact: true
    },
    {
        component: About,
        path: '/about',
        exact: true
    },
    {
        component: Contacts,
        path: '/contacts',
        exact: false,
        routes: [
            {
                component: InfoContacts,
                path: '/contacts',
                exact: true,
            },
            {
                component: SendMessageContainer,
                path: '/contacts/feedback',
                exact: true,
            },
            {
                component: () => {
                    return <Redirect to='/contacts'/>
                }
            }
        ]
    },
    {
        component: () => {
            return <Redirect to='/'/>
        }
    }
]