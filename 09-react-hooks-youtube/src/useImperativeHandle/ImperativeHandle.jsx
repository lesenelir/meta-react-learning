import React, {useRef} from 'react'
import Button from "./Button"

function ImperativeHandle() {

  // useImperativeHandle 获取真正的组件，通过ref去调用子组件内部的函数

  // useRef  +  forwardRef（允许函数组件接收来自父级的引用）

  // 当需要用useRef 来标识子组件，可以在子组件中使用forwardRef

  // useImperativeHandle 可以使得 父组件操作子组件的函数

  const buttonRef = useRef(null)

  return (
      <div>
        <button onClick={() => buttonRef.current.alterToggle()}>Button From Parent</button>
        <Button ref={buttonRef} />
      </div>
  )
}

export default ImperativeHandle
