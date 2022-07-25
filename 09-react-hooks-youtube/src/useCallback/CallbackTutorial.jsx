import React, {useCallback, useState} from 'react'
import Child from "./Child";

function CallbackTutorial(props) {
  const [toggle, setToggle] = useState(false)
  const [data, setData] = useState('Yo, pls sub to the channel!')

  // c传递给子组件，
  // useMemo 可以存储从函数获取的记忆值
  // useCallback 不需要存储从函数返回的值，而是存储整个函数本身
  // useCallback(fn, deps) 相当于 useMemo(() => fn, deps)
  const returnComment = useCallback( (name) => {
    return data + name
  }, [data])

  return (
      <div>
        <Child returnComment={returnComment}/>

        <button onClick={() => setToggle(!toggle)}>Toggle</button>
        {toggle && <h1>toggle</h1>}
      </div>
  )
}

export default CallbackTutorial
