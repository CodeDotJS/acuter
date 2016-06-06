<h1 align="center">
	<br>
	<img width="460" src="https://raw.githubusercontent.com/rishigiridotcom/rishigiri.com/gh-pages/github/4.png" alt="acuter">
	<br>
	<img src="https://travis-ci.org/CodeDotJS/acuter.svg?branch=master">
</h1>

> NodeJS API for Twitter media

## Install

```
$ npm install --save acuter
```

## Structure

```js
const acuter = require('acuter');

acuter.options('username/links').then(mediaLink => {
	console.log(mediaLink);
	// => get the URL
})
```
__Options :__ <br><code>__profile__ &nbsp;:&nbsp; username</code> <br> <code>__cover__ &nbsp;&nbsp;&nbsp;:&nbsp; username</code> <br> <code>__single__ &nbsp;&nbsp;:&nbsp; tweet's link</code> <br> <code>__preview__ &nbsp;:&nbsp; tweet's link</code> <br> <code>__gif__ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; tweet's link</code>
<br> <code>__vidPrev__ &nbsp;:&nbsp; tweet's link</code>

## Usage

<code>__There are multiple uses of ```acuter```, it extracts :__</code>

✔ <code>Profile picture's url of a twitter user : </code>

__Example :__

```js
const acuter = require('acuter');

acuter.profile('Rishi_Giri_').then(imgLink => {
	console.log(imgLink);
	// => https://pbs.twimg.com/.../Lmp-G_Vm_400x400.jpg
});
```

✔ <code>Cover image's url of a twiter user : </code>

__Example :__

```js
const acuter = require('acuter');

acuter.cover('Rishi_Giri_').then(imgLink => {
	console.log(imgLink);
	// => https://pbs.twimg.com/.../1384327436/1500x500
});
```

✔ <code>Single image's url, shared on twitter : </code>

__Example :__

```js
const acuter = require('acuter');

acuter.single('https://twitter.com/.../738792492510').then(imgLink => {
	console.log(imgLink);
	// => https://pbs.twimg.com/.../CkC32IeUYAAcZnZ.jpg
});
```

✔ <code>Preview of a __```gif```__ available on twitter : </code>

__Example :__

```js
const acuter = require('acuter');

acuter.preview('https://twitter.com/.../7340008544').then(imgLink => {
	console.log(imgLink);
	// => https://pbs.twimg.com/.../Ci-xqR8WEAAoYtK.jpg
});
```

✔ <code>Downloadable __```link```__ of __a ```gif```__ from user's tweet's url : </code>

__Example :__

```js
const acuter = require('acuter');

acuter.gif('https://twitter.com/.../734001198752544').then(gifLink => {
	console.log(gifLink);
	// => https://pbs.twimg.com/.../Ci-xqR8WEAAoYtK.mp4
});
```

✔ <code>Preview __```link```__ of a __```video```__ available on twitter : </code>

__Example :__

```js
const acuter = require('acuter');

acuter.vidPrev('https://twitter.com/video../738..028').then(gifLink => {
	console.log(gifLink);
	// => https://o.twimg.com/../proxy.jpg...SAFSDFUYY
});
```

## Related

- [twiger](https://github.com/CodeDotJS/twiger) : Download media available on twitter with an ease.

## License

MIT &copy; [Rishi Giri](http://rishigiri.com)