#!/usr/bin/env node

var fs = require('fs');
var progress = require('stream-progressbar');
var video = require('./');

var argv = process.argv;

video(argv[2])
  .pipe(progress(':bar'))
  .pipe(fs.createWriteStream(argv[3]));
