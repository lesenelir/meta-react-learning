/**
 *  代码分割
 *    打包 -> 整体打包成一个bundle的一个JS文件
 *
 *    前提条件：避免搞出大体积的代码包
 *
 *    代码、模块是加载的时候不需要 -> 分割出来单独形成一个文件块 chunk
 *
 *
 *  代码分割的作用：
 *    - 帮助"懒加载"当前用户所需要的内容，提高应用性能
 *    - "懒加载"并没有减少整体应用的代码体积，但可以减少初始所需要的代码量
 *    - 有利于减少白屏事件
 *
 */

// 模块懒加载 + 减少应用的体积 + 减少加载时体积
// 代码分割 主要是为了性能

// 模块ES6Module -> import export
// import 是一个ES6的模块化关键字，不是一个函数
// import -> 静态导入 static import / 动态导入 dynamic import
// import()  动态导入模块

// static import 模块的静态导入 ， 导入并加载，导入的模块会被编译，不是按需编译

// dynamic import 模块的动态导入， 根据条件或按需的模块导入
// 动态导入应用场景：
// 1. 模块太大，使用可能性第的模块是存在的，不需要马上加载
// 2. 模块的导入占用大量的系统内存
// 3. 模块需要异步获取
// 4. 导入模块时需要动态的构建路径（说明符）
// 5. 模块中的代码需要程序触发了某些条件才运行

// Note: 不要滥用动态导入，静态导入是有利于初始化依赖的，静态的程序分析和tree shaking 静态导入会使其更好的工作

let oBtn = document.getElementById('btn')

oBtn.onclick = async function () {
  let module = await import('./12-1-module') // 动态导入 - 返回一个promise
  new module.default()

  let {plus} = await import('./12-2-module')
  console.log(plus(1, 2))
}

// import() 动态导入 返回一个promise，该promise需要resolve 一个 default export的React 组件


