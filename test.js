import test from 'ava';
import fn from './';

test(async t => {
	const acuterProfile = await fn.profile('Rishi_Giri_');
	const acuterCover = await fn.cover('gifs');
	const acuterSingle = await fn.single('https://twitter.com/yoyoha/status/738792492510760960');
	const acuterPreview = await fn.preview('https://twitter.com/Rishi_Giri_/status/734001198752108544');
	const acuterGifs = await fn.gif('https://twitter.com/Rishi_Giri_/status/734001198752108544');

	t.is(acuterProfile, 'https://pbs.twimg.com/profile_images/736488856397217792/Lmp-G_Vm_400x400.jpg');
	t.is(acuterCover, 'https://pbs.twimg.com/profile_banners/1019188722/1384327436/1500x500');
	t.is(acuterSingle, 'https://pbs.twimg.com/media/CkC32IeUYAAcZnZ.jpg');
	t.is(acuterPreview, 'https://pbs.twimg.com/tweet_video_thumb/Ci-xqR8WEAAoYtK.jpg');
	t.is(acuterGifs, 'https://pbs.twimg.com/tweet_video/Ci-xqR8WEAAoYtK.mp4');
});
