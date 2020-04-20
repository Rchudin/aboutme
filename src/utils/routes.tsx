import React from "react";
import {Redirect} from "react-router-dom";
import HomeContainer from "../components/home/HomeContainer";
import Unitandzero from "../components/other/unitandzero/Unitandzero";
import About from "../components/about/About";
import ContactsContainer from "../components/contacts/ContactsContainer";
import FeedbackContainer from "../components/feedback/FeedbackContainer";
import CommunicationContainer from "../components/communication/CommunicationContainer";




export type routeType = {
    component: any
    path?: string | null
    exact?: boolean
    routes?: routeType[]
}

const routesList: routeType[] = [
    {
        component: HomeContainer,
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
    {
        component: ContactsContainer,
        path: '/contacts',
        exact: false,
        routes: [
            {
                component: CommunicationContainer,
                path: '/contacts',
                exact: true,
            },
            {
                component: FeedbackContainer,
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


export  default routesList
