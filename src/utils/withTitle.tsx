import React from "react";
import TitleComponent from '../components/helmet/HelmetComponent';

export interface WithTitle {
    Component: any
    title: string
}

export const withTitle = (withTitle: WithTitle) => (props: any) => {
    const { title, Component } = withTitle

    return (
        <React.Fragment>
            <TitleComponent title={title} />
            <Component {...props} />
        </React.Fragment>
    )
};
