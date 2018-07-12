/**
 * Created by Administrator on 2018/5/29.
 */
const baseConfig = require('./webpack.config');
const merge = require('webpack-merge')
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(baseConfig,{
    mode: 'production',
    plugins:[
            new webpack.DefinePlugin({//运行 webpack -p (或者 --define process.env.NODE_ENV="'production'") 会通过如下方式调
                "process.env.NODE_ENV": JSON.stringify('production')
            }),
        //webpack4.x下，压缩代码不在webpack.config.js中写plugins: [ new webpack.optimize.UglifyJsPlugin() ],
        // 用npm安装uglifyjs-webpack-plugin插件;
        // 将其引入：var uglifyjsPlugin=require('uglifyjs-webpack-plugin');
        // 删除以前的写法，将optimization的JS压缩写在plugins中
        // new webpack.optimize.UglifyJsPlugin({//它运行 UglifyJS 来压缩输出文件/webpack4.x作废
        //     sourceMap: options.devtool && (options.devtool.indexOf("sourcemap") >= 0 || options.devtool.indexOf("source-map") >= 0)
        // })
        new UglifyJsPlugin(),//压缩JS
        //webpack4.0移除了CommonsChunkPlugin
        // new webpack.optimize.CommonsChunkPlugin({
        //     name:'vender', // 可以是已经存在的chunk（一般指入口文件）对应的name，那么就会把公共模块代码合并到这个chunk上；否则，会创建名字为name的commons chunk进行合并。
        //     filename: 'vender_[hash].js',//filename就是打包出来的公共模块的实际名称
        //     minChunks: 2,//minChunks可以设置为数字、函数和Infinity，默认值是2
        //     //数字：模块被多少个chunk公共引用才被抽取出来成为commons chunk
        //     //函数：接受 (module, count) 两个参数，返回一个布尔值，你可以在函数内进行你规定好的逻辑来决定某个模块是否提取成为commons chunk
        //     //Infinity：只有当入口文件（entry chunks） >= 3 才生效，用来在第三方库中分离自定义的公共模块
        // })

    ],
    optimization: {
        runtimeChunk: {
            name: "page/manifest"
        },
        splitChunks: {//代码拆分,按依赖提取js
            chunks: 'initial', // 只对入口文件处理,initial（初始块），async（按需加载的异步块），all（所有块）
            cacheGroups: {//名字叫做缓存组，其实就是存放分离代码块的规则的对象，叫做cacheGroup的原因是webpack会将规则放置在cache流中，为对应的块文件匹配对应的流，从而生成分离后的块。cacheGroup中priority 为分离规则的优先级，优先级越高，则优先匹配。
                vendorsplit: {
                    test: /[\\/]node_modules[\\/]/,//用于规定缓存组匹配的文件位置，这里/node_modules/  即为匹配相应文件夹下的模块node_modules`目录下被打包的代码到 `page/vendor.js && .css` 没找到可打包文件的话，则没有。css需要依赖 `ExtractTextPlugin`
                    name:'page/vendor',
                    priority: 10,//缓存优先级权重
                },
                common: {
                    test:/js\//,
                    name: "page/commons",
                    minChunks: 2,
                    minSize: 30000
                },
            }
        }
    }

})

