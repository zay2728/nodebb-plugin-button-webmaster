"use strict";

var plugin = {};

plugin.parse = function(postContent, callback) {

	//console.log(postContent);

	postContent = postContent
			//Handle line breaks inside a paragraph.
			.replace(/[^\S](\n)/g, "<br>")
			//Text align left
			.replace(/<a href="(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)<\/a>/g, '<iframe class="youtube-plugin" width="640" height="360" src="http://www.youtube.com/embed/$1" frameborder="0" allowfullscreen></iframe>');
			//Text align center
			.replace(/<p>-&gt;([^-]*(?:(?!-&gt;+|&lt;-)*)*)&lt;-<\/p>/gm,'<p class="text-center">$1</p>')
			//Text align right
			.replace(/<p>-&gt;([^-]*(?:(?!-&gt;+|-&gt;)*)*)-&gt;<\/p>/gm,'<p class="text-right">$1</p>')
			//Text align center
			.replace(/<p>=&gt;([^=]*(?:(?!=&gt;+|&lt;=)*)*)&lt;=<\/p>/gm,'<p class="text-justify">$1</p>')
			//Underlined text.
			.replace(/~([\S\s]*?)~/g, "<u>$1</u>");

	callback(null, postContent);
};

module.exports = plugin;