# weibo-video
weibo video downloader
### Command line usage
``` sh
npm install weibo-video -g
weibo-video http://video.weibo.com/show?fid=1034:56cf9418a34dfb34292c0ede3a4ea9a5 output.mp4
```
### Node stream usage
``` sh
npm install weibo-video
```
``` javascript
var fs = require('fs');
var video = require('weibo-video');
video('http://video.weibo.com/show?fid=1034:56cf9418a34dfb34292c0ede3a4ea9a5').pipe(fs.createWriteStream('ouput.mp4'));
```

### Sample usage with ffmpeg
``` javascript
var video = require('weibo-video');
var ffmpeg = require('fluent-ffmpeg');

ffmpeg(video('http://video.weibo.com/show?fid=1034:56cf9418a34dfb34292c0ede3a4ea9a5'))
  .seekInput('00:34')
  .duration('14')
  .output('output.mp4')
  .run();
```
### License
MIT
