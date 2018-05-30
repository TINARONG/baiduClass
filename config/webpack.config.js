const path = require('path');//path为node.js核心模块，用于操作文件路径

module.exports= {
    entry:{
        app: './src/main.js'
    },
    output:{
        path:path.resolve(__dirname,'../dist'),//__dirname为当前路径
        filename:'[name].js'
    },
    // module:{
    //     rules:[
    //         {test:/\.css/,use:''}
    //     ]
    // }
}