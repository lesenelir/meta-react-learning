/**
 *  useEffect 是在真实DOM渲染以后执行
 *
 *  useLayoutEffect 和 useEffect 调用时机不同
 *
 *  useLayoutEffect 和 componentDidMount、componentDidUpdate里调用的阶段是一致的，都是在DOM渲染之前调用
 *
 */
import {useEffect, useLayoutEffect, useRef, useState} from "react";

function App() {
  const ref = useRef()
  const [, setCount] = useState({})

  let styleObj = {
    width: '100px',
    height: '100px',
    backgroundColor: 'orange '
  }

  useLayoutEffect(() => { // 和useEffect进行比较
    ref.current.style.transform = 'translate(500px)'
    ref.current.style.transition = 'all .5s'
  })
  // useLayoutEffect 是在盒子渲染之前执行，也就是说初始位置是500

  return (
      <div>
        <div style={styleObj} ref={ref}/>
        <button onClick={() => setCount({})}>button</button>
      </div>
  )

}

export default App
