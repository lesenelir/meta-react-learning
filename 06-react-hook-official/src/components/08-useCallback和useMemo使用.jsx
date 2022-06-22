/**
 *  useMemo useCallback 性能优化
 *
 *  类组件 pureComponent 属性不变则不会重新渲染
 *  函数组件 memo 类似于类组件的 pureComponent - 函数组件优化，不希望子组件重新渲染
 *
 *  useCallback(fn, deps) 相当于 useMemo(() => fn, deps)
 *
 */
import {memo, useCallback, useState} from "react";

const Foo = memo((props) => {
  return (
      <div>
        {props.count}
        <ul>{props.render()}</ul>
      </div>
  )
})

function App() {
  const [range, setRange] = useState({min: 0, max: 10000})
  const [count, setCount] = useState(0)

  // 使用useCallback 固定函数
  const render = useCallback(() => {
    let list = []
    console.log(1) // 查看此方法是否会重新渲染
    for (let i = 0; i < range.max; i++) {
      list.push(<li key={i}>{i}</li>)
    }
    return list
  }, [range])


  return (
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
        {/*<ul>*/}
        {/*  {render()}*/}
        {/*</ul>*/}

        <Foo render={render} count={count}/>
      </div>
  )

}

export default App
