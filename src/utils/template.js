
export default ({ markup, assetsByChunkName, lng}) => {
    return `<!doctype html>
<html lang="${lng}">
<head>
    <meta charset="utf-8">
    <link rel="icon" href="/favicon.ico">
    <title>Ruslan Chudin</title>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="theme-color" content="#000000">
    <meta name="description" content="Web site">
    <link rel="apple-touch-icon" href="/logo192.png">
    <link rel="manifest" href="/manifest.json">
	<link rel="stylesheet" type="text/css" href="/${assetsByChunkName.main[0]}" />
</head>
<body>
	<div id="root">${markup}</div>
	<script type="text/javascript" src="/${assetsByChunkName["vendors~main"]}"></script>
	<script type="text/javascript" src="/${assetsByChunkName.main[1]}"></script>
</body>
</html>`;
};