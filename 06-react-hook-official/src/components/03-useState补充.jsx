/**
 *  hook 使用在 函数组件中 - 此时函数组件有状态state
 *
 *  hook 是一个特殊的函数，可以钩入React特性, 如 useState
 *
 *  什么时候需要用hook？
 *    - 编写函数组件时，需要向函数组件内部添加一些特性时，如state...
 *
 *  多个hook渲染
 *    首先，初次渲染建立记忆单元格（状态数组），初始化state
 *    其次，每次调用useState，移动指针，下标+1
 *    最后，第二次渲染时：找到状态数组对应的下标，有初始值，则直接跳过参数初始化
 *
 *  hook书写规则
 *    - 只写在最顶层使用hook
 *    - 不要在循环、条件、嵌套函数中使用hook
 *    - 不要在普通函数中使用hook，只能在函数组件 或者 自定义hook中使用hook
 *
 *  hook注意点
 *    - 第二个参数，即修改方法的引用都是一一致的
 *    - 第一个参数没有更改的话，则不重新渲染 （通过Object.is比较）
 *      第一个参数是浅引用，即对象的话，永远不相等
 *    - 渲染更新：函数更新 和 不同的返回值的更新
 *      (上一次state值，更新的最新的state值)
 *    - 渲染时，多个setXXX 会合并为一次后渲染
 *    - 类组件返回值合并， 函数组件中不会合并
 *
 *
 *  类组件和函数组件之间的区别
 *    - 函数组件会把setXXX()中的值和useXXX的第一个参数进行用Object.is 进行浅比较
 *      false会重新渲染，true（浅比较值相等）则不会重新渲染
 *      相反，类组件设置相同的state都会进行重新渲染刷新
 *
 *
 */

const App = () => {
  // 使用多个state数据
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [, setCount] = useState({})

  const clickChange = () => {
    console.log(count2) // 上一步count2
    return setCount2(count2 + 1)
  }
  console.log(count2) // 这一步count2

  return (
      <div>
        {count1}
        <button onClick={() => setCount1(count1 + 1)}>按钮</button>
        <br/>
        {count2}
        <button onClick={clickChange}>按钮</button>
        <br/>
        <button onClick={() => setCount({})}>按钮</button>
      </div>
  )
}

export default App
