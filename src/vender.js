/**
 * Created by Administrator on 2018/6/11.
 */
//这里import第三方库资源
import printMe from "./js/print.js";

function component() {
    let element = document.createElement('div');
    let btn = document.createElement("button");
    
    element.innerHTML = 'hello webpack'
    btn.onclick = printMe;
    element.appendChild(btn);
    return element
}

let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);
console.log(module.hot)
//判定开启了热更
if(module.hot){
    //当print.js的printMe方法修改后，触发以下方法；
    // 问题：如果你继续点击示例页面上的按钮，你会发现控制台仍在打印这旧的 printMe 功能。
    // 这是因为按钮的 onclick 事件仍然绑定在旧的 printMe 函数上。
    //为了让它与 HRM 正常工作，我们需要使用 module.hot.accept 更新绑定到新的 printMe 函数上
    module.hot.accept('./js/print.js', function (){
        console.log('Accepting the updated printMe module!');
        document.body.removeChild(element);
        element = component(); // 重新渲染页面后，component 更新 click 事件处理
        document.body.appendChild(element);
        debugger
        printMe();
    })
}