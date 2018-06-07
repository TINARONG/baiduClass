const path = require('path');//path为node.js核心模块，用于操作文件路径
const HtmlWebpackPlugin = require('html-webpack-plugin')//用于生成html
module.exports= {
    entry:{
        app: './src/main.js'
    },
    output:{
        path:path.resolve(__dirname,'../dist'),//__dirname为当前路径
        filename:'[name].js'
    },
    devServer: {
        contentBase: path.join(__dirname,'../dist'),// 本地服务器在哪个目录搭建页面，一般我们在当前目录即可；
        port:8080,//端口，默认8080
        // host:'0.0.0.0',//可以通过host访问
        overlay:{//在页面上显示错误
            errors:true
        },
        // hot:true,//启动热更
        // open:true,//启动webpack-dev-server时自动打开浏览器
    },
    module:{
        rules:[{
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
            }, {
                test:/\.css$/,
                use: ['style-loader','css-loader']
            }, {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',//生成html的标题
            template: 'index.html',//html的文件名默认是index.html
            inject: true,//script标签位于html的什么位置默认true,即body底部（true,body,head,false）
            // favicon:'path'//生成一个favicon，值为路径
        })
    ]
}