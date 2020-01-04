import React from 'react';
import express from 'express';
import {renderToString} from 'react-dom/server';
import AppContainer from "./components/app/AppContainer";

const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.static('dist/static'));

app.get('/*', (req, res) => {
    const context = {};
    // eslint-disable-next-line no-shadow
    const app = renderToString(
            <AppContainer/>
    );

    const indexFile = path.resolve('dist/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Something went wrong:', err);
            return res.status(500).send('Oops, better luck next time!');
        }

        if (context.status === 404) {
            res.status(404);
        }

        return res.send(
            data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
        );
    });
});


// Loadable.preloadAll().then(() => {
app.listen(PORT, () => {
    console.log(` Server is listening on port ${PORT}`);
});
// });