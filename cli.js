#!/usr/bin/env node
var fs = require('fs');
var video = require('./');
var argv = process.argv;

video(argv[2]).pipe(fs.createWriteStream(argv[3]));
