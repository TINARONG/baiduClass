/**
 * Created by Administrator on 2018/5/29.
 */
const baseConfig = require('./webpack.config');
const merge = require('webpack-merge')
const webpack = require('webpack');

module.exports = merge(baseConfig,{
    mode: 'production',
})

// console.log(process.env.NODE_ENV)