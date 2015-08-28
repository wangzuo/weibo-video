var PassThrough = require('stream').PassThrough;
var url = require('url');
var fs = require('fs');
var request = require('request');

function Video(link) {
  var stream = new PassThrough();

  var self = this;
  request(link, function(err, res, html) {
    var m = html.match(/flashvars="list=(.*)" \/>/);
    var videoUrl = decodeURIComponent(m[1]);
    var props = url.parse(videoUrl);

    request(videoUrl, function(err, res, contents) {
      var playlist = contents.split('\n').filter(function(file) {
        return !file.match(/#EXT/);
      });

      var videoUrl = [
        props.protocol,
        '//',
        props.host,
        '/',
        playlist[0]
      ].join('');
      request(videoUrl).pipe(stream);
    });
  });

  return stream;
}

module.exports = Video;
