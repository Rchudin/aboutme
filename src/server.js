import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import Template from './utils/template';
import AppContainer from './components/app/AppContainer';
import {I18nextProvider} from "react-i18next";


export default ({assetsByChunkName}) => {
    return (req, res, next) => {
        const context = {};


        const markup = renderToString(
            <I18nextProvider i18n={req.i18n}>
                <StaticRouter location={req.url} context={context}>
                    <AppContainer/>
                </StaticRouter>
            </I18nextProvider>
        );

        res.status(200).send(Template({
            markup,
            assetsByChunkName,
            lng: req.i18n.language
        }));
    };
}