'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
    dev: {

        // Paths
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {
            '/mhy': {
                target: 'http://192.168.1.134:8888/', //协议域名  ；本地：端口域名
                // secure:false,   //如果协议是https，需要配置这个参数
                changeOrigin: true, //是否跨域
                pathRewrite: {
                    '^/mhy': 'http://192.168.1.134:8888/'
                }
            },
            '/wd': {
                target: 'http://192.168.1.134:8888/', //协议域名  ；本地：端口域名
                // secure:false,   //如果协议是https，需要配置这个参数
                changeOrigin: true, //是否跨域
                pathRewrite: {
                    '^/wd': 'http://192.168.1.134:8888/'
                }
            },
            '/wsz': {
                target: 'http://106.13.164.214:8000/', //协议域名  ；本地：端口域名
                // secure:false,   //如果协议是https，需要配置这个参数
                changeOrigin: true, //是否跨域
                pathRewrite: {
                '^/wsz': 'http://106.13.164.214:8000/',
                target: 'http://192.168.1.134:8888/', //协议域名  ；本地：端口域名
                // secure:false,   //如果协议是https，需要配置这个参数
                changeOrigin: true, //是否跨域
                pathRewrite: {
                    '^/wb': 'http://192.168.1.134:8888/'
                }
            }
            }
        },

        // Various Dev Server settings
        host: 'localhost', // can be overwritten by process.env.HOST
        port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        autoOpenBrowser: false,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


        /**
         * Source Maps
         */

        // https://webpack.js.org/configuration/devtool/#development
        devtool: 'cheap-module-eval-source-map',

        // If you have problems debugging vue-files in devtools,
        // set this to false - it *may* help
        // https://vue-loader.vuejs.org/en/options.html#cachebusting
        cacheBusting: true,

        cssSourceMap: true
    },

    build: {
        // Template for index.html
        index: path.resolve(__dirname, '../dist/index.html'),

        // Paths
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',

        /**
         * Source Maps
         */

        productionSourceMap: true,
        // https://webpack.js.org/configuration/devtool/#production
        devtool: '#source-map',

        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],

        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    }
 }