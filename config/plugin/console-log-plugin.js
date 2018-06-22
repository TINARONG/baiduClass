/**
 * Created by Administrator on 2018/6/22.
 */
function ConsoleLogPlugin(options) {
    // options是配置文件，你可以在这里进行一些与options相关的工作
}
ConsoleLogPlugin.prototype.apply = function (compiler) {
    console.log("this is ConsoleLogPlugin");
    //Compiler:在开始打包时就进行实例化，实例对象里面装着与打包相关的环境和参数，包括options、plugins和loaders等。
    //Compilation在每次文件变化重新打包时都进行一次实例化，它继承自Compiler，其实例对象里装着和modules及chunks相关的信息。
    compiler.plugin("run", function (compiler, callback) {
        console.log("webpack 构建开始");
        callback();
    })
}


module.exports = ConsoleLogPlugin;



