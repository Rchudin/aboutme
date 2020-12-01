import serialize from 'serialize-javascript';

export default ({ markup, assetsByChunkName, lng, store, helmet }: any) => {
    return `<!doctype html>
<html lang="${lng}">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    ${helmet.title.toString()}
    <meta charSet="utf-8"/>
    <link rel="icon" href="/favicon.ico"/>
    <link rel="stylesheet" type="text/css" href="/${assetsByChunkName.main[0]}" />
</head>
<body>
	<div id="main">${markup}</div>
	<script>window.__PRELOADED_STATE__ = ${serialize(store.getState()).replace(/</g, '\\u003c')}</script>
	<script type="text/javascript" src="/${assetsByChunkName["vendors~main"]}"></script>
	<script type="text/javascript" src="/${assetsByChunkName.main[1]}"></script>
</body>
</html>`;
};
