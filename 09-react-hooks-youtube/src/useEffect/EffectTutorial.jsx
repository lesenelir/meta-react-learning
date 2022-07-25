import React, {useEffect, useState} from 'react'
import axios from "axios";

function EffectTutorial() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState('')
  // useEffect 是一个 页面渲染render后，都会调用的函数

  // 页面重新渲染都会调用useEffect
  // 没有依赖项，则只要页面重新渲染，就执行这个useEffect
  useEffect(() => {
    console.log('render')
    axios.get('https://jsonplaceholder.typicode.com/comments').then(res => {
      // console.log(res.data[0].email)
      setData(res.data[0].email)
    })
  })
  // Note:
  //   - useEffect 首次刷新会调用两次

  // 有依赖项，但是依赖项为空，则只执行一次，即不依赖任何xx而更改
  useEffect(() => {
    console.log('有依赖项[] useEffect')
  }, [])


  return (
      <div>
        Hello World
        <br/>

        {count}
        <button onClick={() => setCount(count + 1)}>按钮</button>
        <br/>

        {data}

      </div>

  )
}

export default EffectTutorial
