/**
 * Created by Administrator on 2018/5/29.
 */
const baseConfig = require('./webpack.config');
const merge = require('webpack-merge')
const webpack = require('webpack');

module.exports = merge(baseConfig,{
    mode: 'development',//全局变量：可代替如下
    // plugins:[
    //     new webpack.DefinePlugin({
    //         "process.env.NODE_ENV": JSON.stringify('development')
    //     })
    // ]
})
