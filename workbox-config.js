module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,css,js,html,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};