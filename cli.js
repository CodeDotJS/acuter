var acuter = require('./index.js');

acuter.profile('Rishi_Giri_').then(user => {
	console.log(user);
});

acuter.cover('gifs').then(user => {
	console.log(user);
});

acuter.single('https://twitter.com/yoyoha/status/738792492510760960').then(user => {
	console.log(user);
});

acuter.preview('https://twitter.com/Rishi_Giri_/status/734001198752108544').then(user => {
	console.log(user);
});

acuter.gif('https://twitter.com/Rishi_Giri_/status/734001198752108544').then(user => {
	console.log(user);
});

acuter.vidPrev('https://twitter.com/video/status/738927522717569028').then(videoURL => {
	console.log(videoURL);
	console.log('Video URL');
});
