import React from "react";
import {Redirect} from "react-router-dom";
import Home from "./components/home/Home";
import Contacts from "./components/contacts/Contacts";

export default [
    {
        component: Home,
        path: '/',
        exact: true
    },
    {
        component: Contacts,
        path: '/contacts',
        exact: true
    },
    {
        component: () => {
            return <Redirect to='/'/>
        }
    }
]