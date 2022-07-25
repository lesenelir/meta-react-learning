// Effect Hook 可以在函数组件中执行副作用操作
import {useEffect, useState} from "react";

/**
 *  纯函数：
 *    - 定义：相同的输入 -> 相同的输出 （不和外部变量进行交互的操作）
 *    - 引用外部变量、调用外部函数 则不是纯函数
 *
 *  组件副作用：(组件渲染依赖了外部变量)
 *    - 组件渲染除了依赖自身state和自身变量外，还要拿别的外部配置则都是组件的副作用
 *    - 如：修改DOM、修改全局变量、AJAX请求、计时器、localStorage等存储相关
 *
 *    - 【useEffect 可以在函数组件中执行副作用操作】
 *
 *
 *  useEffect执行的时间
 *    - render 是 构建虚拟节点树
 *    - 首先真实DOM的渲染时机：componentDidMount 和 componentDidUpdate之后才会发生真实DOM渲染(didMount \ didUpdate)
 *    - useEffect 是发生在真实DOM渲染之后才会执行useEffect
 *    - componentDidMount 和 componentDidUpdate 是在真实DOM构建之前执行
 *    - 具体而言：
 *      useEffect 在组件渲染后都会执行
 *      useEffect执行是在真实DOM构建完成以后才执行 - 可以执行组件渲染后执行某些操作
 *      而，componentDidMount 和 componentDidUpdate是在真实DOM构建之前完成，真实DOM会根据这两个函数构建真实DOM
 *    - useEffect 执行方式是异步的
 *    - useEffect 在每一次真实DOM构建时都会执行
 *
 *
 *  useEffect
 *    - 第二个参数是当前effect函数所需要的依赖项
 *    - 依赖是[] 在DidMount初次渲染 和  WillUnmount卸载的时候执行
 *      - [] 不检测任何数据的更新，一般都在这个依赖项中做数据的请求
 *    - 有依赖项，并且依赖项不一致的时候 会重新执行useEffect
 *      - [num] 检测num数据的更新则调用useEffect
 *      - 不写第二个参数：数组中任何数据的更新都会触发useEffect调用
 *    - useEffect中return 一个函数 则会在组件卸载时会触发该callback的函数
 *
 *
 *
 *  React组件有两种副作用操作：需要清除的副作用 和 不需要清除的副作用
 *    - callback中清除一些残余的数据
 *    - 清除副作用的好处：放置内存泄漏
 *    - 如果useEffect 返回了一个函数，则React在执行清除操作的时候会执行该函数（effect可以返回一个清除函数）
 *    - 清除副作用： useEffect中要return 一个函数
 *      流程：render + useEffect => render + 清除函数 + useEffect
 *    - 清除函数: 在componentWillUnmount执行
 *
 *
 *  useEffect 可以实现关注点分离 （配合自定义hook）
 *    - useEffect会根据调用顺序依次执行
 *    - useEffect会根据自定义hook调用顺序 依次执行
 *
 */

const App = () => {

  const [count, setCount] = useState(0)
  // console.log('render')

  /**
   * 先执行componentDidMount、componentDidUpdate，再构建真实DOM，再执行useEffect
   * useEffect是在真实DOM构建之后才执行
   *
   */

  // 异步
  useEffect(() => {
    // document.title = `You clicked ${count} times`
    // console.log('effect') // 首次渲染会更新两次，因为mount 和 update 都会重新渲染

    let timer = setInterval(() => {
      setCount(count + 1)
    }, 1000)
    // 清除副作用函数 component
    return () => { // 上一次渲染的时候执行
      console.log('clear')
      clearInterval(timer) // 闭包清理函数 删除上一次的timer
    }

  }, [count])

  return (
      <div>
        <p>{count}</p>
        {/*事件处理函数以回调方式执行*/}
        <button onClick={() => setCount(count + 1)}>Click</button>
      </div>
  )

}

export default App
