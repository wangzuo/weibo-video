var fs = require('fs');
var video = require('./');
video('http://video.weibo.com/show?fid=1034:5d5ac38b9049d5d7a08fda4378f7b26c').pipe(fs.createWriteStream('tmp.mp4'));
