#!/usr/bin/env node

var fs = require('fs');
var ProgressBar = require('progress');
var PassThrough = require('stream').PassThrough;
var video = require('./');

var argv = process.argv;

var progress = new PassThrough();

progress.on('pipe', function(stream) {
  stream.on('response', function(res) {
    var total = parseInt(res.headers['content-length'], 10);
    var bar = new ProgressBar(':bar', {total: total});

    progress.on('data', function(chunk) {
      bar.tick(chunk.length);
    });
  });
});

video(argv[2]).pipe(progress).pipe(fs.createWriteStream(argv[3]));