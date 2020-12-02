import * as React from "react";
import { Helmet } from 'react-helmet-async';
import {useTranslation} from "react-i18next";

export interface HelmetComponentProps {
    title: string
}

export default (props: HelmetComponentProps) => {
    const {t} = useTranslation();

    const defaultTitle: string = 'Ruslan Chudin';
    return (
        <Helmet>
            <title>{props.title ? t(props.title) : defaultTitle}</title>

            {/*
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta name="description" content="Web site" />
            <link rel="apple-touch-icon" href="/logo192.png" />
             <link rel="manifest" href="/manifest.json"/>
            */}
        </Helmet>
    );
};
