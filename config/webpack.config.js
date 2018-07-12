const path = require('path');//path为node.js核心模块，用于操作文件路径
const webpack = require("webpack");//启动热更必须
const HtmlWebpackPlugin = require('html-webpack-plugin')//用于生成html
const { VueLoaderPlugin } = require('vue-loader');
const ConsoleLogPlugin = require("./plugin/console-log-plugin");

module.exports= {
    entry: {
        app: './src/main.js',
        // vendor: './src/vender.js'//获取生产环境依赖的库
    },
    output:{
        path:path.resolve(__dirname,'../dist'),//__dirname为当前路径
        // chunkFilename: '[name].bundle.js',//拆分按需加载的文件名,[name]指向require.ensure定义的第三个参数;未被列在entry中，但有些场景需要被打包出来的文件命名配置
        // publicPath: '/chunk/',// 输出解析文件的目录，url 相对于 HTML 页面就是按需加载单独打包出来的chunk是以publicPath会基准来存放的
        filename:'[name]_[hash].js'
    },
    devServer: {
        contentBase: path.join(__dirname,'../dist'),// 本地服务器在哪个目录搭建页面，一般我们在当前目录即可；
        port:8080,//端口，默认8080
        // host:'0.0.0.0',//可以通过host访问
        overlay:{//在页面上显示错误
            errors:true
        },
        // hot:true,//启动热更,它允许在运行时更新各种模块，而无需进行完全刷新。不适用于生产环境
        // open:true,//启动webpack-dev-server时自动打开浏览器
    },
    //用于帮助找到模块的绝对路径。
    resolve: {//配置模块如何解析。例如，当在 ES2015 中调用 import "lodash"，resolve 选项能够对 webpack 查找 "lodash" 的方式去做修改
        alias: {//创建 import 或 require 的别名，来确保模块引入变得更简单。
            'vue': 'vue/dist/vue.esm.js'//webpack在node_modules取文件时的目录,当你想import时，路径只需写vue即可，不需要写长串路径了；
        }
    },
    module:{
        rules:[ { test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader" },
            {
                test:/\.css$/,
                // use: ['style-loader','css-loader'],
                loader: 'style-loader!css-loader',
            },{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(woff2?|woff|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
            },
        ]
    },
    //webpack 插件是一个具有 apply 属性的 JavaScript 对象。apply 属性会被 webpack compiler 调用，并且 compiler 对象可在整个编译生命周期访问。
    plugins:[
        //这是来生成html文件的，它通过template选项来读取指定的模板index.ejs,然后输出到filename指定的文件
        new HtmlWebpackPlugin({
            filename: 'index.html',//生成html的标题
            template: 'index.html',//html的文件名默认是index.html
            inject: true,//script标签位于html的什么位置默认true,即body底部（true,body,head,false）
            // favicon:'path'//生成一个favicon，值为路径
        }),
        new VueLoaderPlugin(),
        new ConsoleLogPlugin(),
        // new webpack.HotModuleReplacementPlugin(),//热更


    ],

}
console.log(process.env.NODE_ENV )