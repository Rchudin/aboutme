import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import Template from './utils/template';
import AppContainer from './components/app/AppContainer';


export default ({assetsByChunkName}) => {
    return (req, res, next) => {
        const context = {};
        const markup = renderToString(
            <StaticRouter location={req.url} context={context}>
                <AppContainer/>
            </StaticRouter>
        );
        
        res.status(200).send(Template({
            markup,
            assetsByChunkName,
        }));
    };
}