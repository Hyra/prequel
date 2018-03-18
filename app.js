#!/usr/bin/env node
var prerender = require("prerender");

var server = prerender({
  chromeLocation: "/app/.apt/usr/bin/google-chrome",
  pageDoneCheckInterval: 1000
});

server.use(prerender.sendPrerenderHeader());
// server.use(prerender.blockResources());
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());

server.use(require("prerender-memory-cache"));

// server.use(prerender.s3HtmlCache());

// server.use(require('prerender-redis-cache'));
server.start();
