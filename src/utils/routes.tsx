import React from "react";
import { Redirect } from "react-router-dom";
import { withTitle } from "./withTitle"
import HomeContainer from "../components/home/HomeContainer";
// import Unitandzero from "../components/other/unitandzero/Unitandzero";
import WorkContainer from "../components/work/WorkContainer";
import About from "../components/about/About";
import ContactsContainer from "../components/contacts/ContactsContainer";
import FeedbackContainer from "../components/feedback/FeedbackContainer";
import CommunicationContainer from "../components/communication/CommunicationContainer";

export const HomeURL: string = "/"
export const AboutURL: string = "/about"
export const WorkURL: string = "/work"
export const ContactsURL: string = "/contacts"
export const FeedbackURL: string = "/contacts/feedback"


const HomeComponent = withTitle({ Component: HomeContainer, title: 'Home' });
const AboutComponent = withTitle({ Component: About, title: 'About' });
const ContactsComponent = withTitle({ Component: ContactsContainer, title: 'Contacts' });
const WorkComponent = withTitle({ Component: WorkContainer, title: 'Work' });

export type routeType = {
    component: any
    path?: string | null
    exact?: boolean
    routes?: routeType[]
}

const routesList: routeType[] = [
    {
        component: HomeComponent,
        path: HomeURL,
        exact: true,
        routes: undefined
    },
    {
        component: AboutComponent,
        path: AboutURL,
        exact: true
    },
    {
        component: WorkComponent,
        path: WorkURL,
        exact: false
    },
    {
        component: ContactsComponent,
        path: ContactsURL,
        exact: false,
        routes: [
            {
                component: CommunicationContainer,
                path: ContactsURL,
                exact: true,
            },
            {
                component: FeedbackContainer,
                path: FeedbackURL,
                exact: true,
            },
            {
                component: () => {
                    return <Redirect to={ContactsURL} />
                }
            }
        ]
    },
    {
        component: () => {
            return <Redirect to={HomeURL} />
        }
    }
]

export default routesList
