'use strict';

var got = require('got');
var cheerio = require('cheerio');
var Promise = require('pinkie-promise');
var isURL = require('is-url');

function matchRegEx(backURL) {
	var regPar = /(?:\(['"]?)(.*?)(?:['"]?\))/;
	return regPar.exec(backURL)[1];
}

function convertImageToVideo(imageURL) {
	return imageURL.replace('tweet_video_thumb', 'tweet_video').replace('.jpg', '.mp4');
}

function profileImage(username) {
	if (typeof username !== 'string') {
		return Promise.reject(new Error('username required'));
	}
	var url = 'https://twitter.com/' + username;
	return got(url).then(function (res) {
		var $ = cheerio.load(res.body);
		return $('.ProfileAvatar-image').attr('src') || null;
	}).catch(function (err) {
		if (err.statusCode === 404) {
			err.message = 'not a twitter user';
		}
		throw err;
	});
}

function coverImage(username) {
	if (typeof username !== 'string') {
		return Promise.reject(new Error('username required'));
	}
	var url = 'https://twitter.com/' + username;
	return got(url).then(function (res) {
		var $ = cheerio.load(res.body);
		return $('.ProfileCanopy-headerBg img').attr('src') || null;
	}).catch(function (err) {
		if (err.statusCode === 404) {
			err.message = 'not a twitter user';
		}
		throw err;
	});
}

function singleImage(mediaURL) {
	if (typeof mediaURL !== 'string' && isURL(mediaURL) === false) {
		return Promise.reject(new Error('url required'));
	}
	var url = mediaURL;
	return got(url).then(function (res) {
		var $ = cheerio.load(res.body);
		return $('.AdaptiveMedia-singlePhoto .AdaptiveMedia-photoContainer img').attr('src') || null;
	}).catch(function (err) {
		if (err.statusCode === 404) {
			err.message = 'Link do not contain any image file';
		}
	});
}

function gifPreview(getURL) {
	if (typeof getURL !== 'string' && isURL(getURL) === false) {
		return Promise.reject(new Error('url required'));
	}
	var url = getURL;
	return got(url).then(function (res) {
		var $ = cheerio.load(res.body);
		return matchRegEx(($('.PlayableMedia-player').attr('style'))) || null;
	}).catch(function (err) {
		if (err.statusCode === 404) {
			err.message = 'Link do not contain any gif preivew';
		}
	});
}

function gifLink(getURL) {
	if (typeof getURL !== 'string' && isURL(getURL) === false) {
		return Promise.reject(new Error('url required'));
	}
	var url = getURL;
	return got(url).then(function (res) {
		var $ = cheerio.load(res.body);
		var getMediaLink = matchRegEx(($('.PlayableMedia-player').attr('style'))) || null;
		return convertImageToVideo(getMediaLink);
	}).catch(function (err) {
		if (err.statusCode === 404) {
			err.message = 'Link do not contain any gif media';
		}
		throw err;
	});
}

exports.profile = profileImage;
exports.cover = coverImage;
exports.single = singleImage;
exports.preview = gifPreview;
exports.gif = gifLink;
