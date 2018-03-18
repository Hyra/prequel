#!/usr/bin/env node
var prerender = require('prerender');

var server = prerender({
    chromeLocation: '/app/.apt/usr/bin/google-chrome'
});

server.use(prerender.sendPrerenderHeader());
// server.use(prerender.blockResources());
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());
server.use(prerender.inMemoryHtmlCache());
// server.use(prerender.s3HtmlCache());

// server.use(require('prerender-redis-cache'));
server.start();