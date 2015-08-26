var url = require('url');
var fs = require('fs');
var request = require('request');

function download(_url, output) {
  request(_url, function(err, res, html) {
    var m = html.match(/flashvars="list=(.*)" \/>/);
    var videoUrl = decodeURIComponent(m[1]);
    var props = url.parse(videoUrl);

    request(videoUrl, function(err, res, contents) {
      var playlist = contents.split('\n').filter(function(file) {
        return !file.match(/#EXT/);
      });

      var dUrl = [
        props.protocol,
        '//',
        props.host,
        '/',
        playlist[0]
      ].join('');

      request(dUrl).pipe(fs.createWriteStream(output));
    });
  });
}

module.exports = download;
