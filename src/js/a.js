/**
 * Created by Administrator on 2018/5/31.
 */
document.write('this is a.js');
// import System from 'systemjs'
// var System = require('systemjs');

function component() {
    var element = document.createElement('div');
    var button = document.createElement("button");
    var br = document.createElement("br");
    button.innerHTML = 'a.js按钮'

    element.innerHTML = ["Hello","webpack","a.js"].join(" ");
    element.appendChild(br);
    element.appendChild(button);


    //import()按需加载，import from无法在代码块中使用，import()可用于实现按需加载其返回一个promise对象，.then可执行模块引入之后的操作，默认传入module参数
    button.onclick = e => System.import(/* webpackChunkName: "print" */ './chunkName.js')
        .then(module => {
            var print = module.default;
            print();
        })

    return element;
}

document.body.appendChild(component());