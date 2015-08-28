var video = require('./');
var ffmpeg = require('fluent-ffmpeg');

ffmpeg(video('http://video.weibo.com/show?fid=1034:56cf9418a34dfb34292c0ede3a4ea9a5'))
  .seekInput('00:34')
  .duration('14')
  .output('output.mp4')
  .run();
