import React from "react";
import {Redirect} from "react-router-dom";
import Home from "../components/home/HomeContainer";
import Unitandzero from "../components/other/unitandzero/Unitandzero";
import About from "../components/about/About";

// import Unitandzero from "../components/unit_and_zero/Unitandzero"
// import Home from "../components/home/Home";
// import Contacts from "../components/contacts/Contacts";
// import About from "../components/about/About";
// import InfoContacts from "../components/contacts/InfoContacts";
// import SendMessageContainer from "../components/send_message/SendMessageContainer";

export type routeType = {
    component: any
    path?: string | null
    exact?: boolean
    routes?: routeType[]
}

const routesList: routeType[] = [
    {
        component: Home,
        path: '/',
        exact: true,
        routes: undefined
    },
    {
        component: About,
        path: '/about',
        exact: true
    },
    {
        component: Unitandzero,
        path: '/projects',
        exact: true
    },
    // {
    //     component: Contacts,
    //     path: '/contacts',
    //     exact: false,
    //     routes: [
    //         {
    //             component: InfoContacts,
    //             path: '/contacts',
    //             exact: true,
    //         },
    //         {
    //             component: SendMessageContainer,
    //             path: '/contacts/feedback',
    //             exact: true,
    //         },
    //         {
    //             component: () => {
    //                 return <Redirect to='/contacts'/>
    //             }
    //         }
    //     ]
    // },
    {
        component: () => {
            return <Redirect to='/'/>
        }
    }
]


export  default routesList
