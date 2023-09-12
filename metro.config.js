const { mergeConfig } = require('metro-config')
const { getMetroConfig } = require('@tarojs/rn-supporter')
const path = require('path')
module.exports = (async function () {
	return mergeConfig(
		{
			// custom your metro config here
			// https://facebook.github.io/metro/docs/configuration
			resolver: {},
			// https://segmentfault.com/a/1190000043097675
			watchFolders: [
				path.resolve(__dirname, '../../node_modules'),
				path.resolve(__dirname, '../../packages/lib')
			]
		},
		await getMetroConfig()
	)
})()
