#!/usr/bin/env node
var download = require('./');
var argv = process.argv;

download(argv[2], argv[3]);
