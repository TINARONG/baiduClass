/**
 * Created by Administrator on 2018/5/29.
 */
const baseConfig = require('./webpack.config');
const merge = require('webpack-merge')
const webpack = require('webpack');

module.exports = merge(baseConfig,{
    mode: 'development',//全局变量：可代替如下
    devtool: 'inline-source-map',//source map功能用于更好的定位错误位置，source map选项很多，这里使用inline-source-map
    // plugins:[
    //     new webpack.DefinePlugin({
    //         "process.env.NODE_ENV": JSON.stringify('development')
    //     })
    // ]
})
