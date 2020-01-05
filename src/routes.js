import React from "react";
import {Redirect} from "react-router-dom";
import Home from "./components/home/Home";
import Contacts from "./components/contacts/Contacts";
import About from "./components/about/About";

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
        exact: true
    },
    {
        component: () => {
            return <Redirect to='/'/>
        }
    }
]