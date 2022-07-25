import React, {useRef} from 'react'

function RefTutorial() {

  // useRef 是访问和操作DOM元素的最简单的方法

  // 创建一个ref
  // 通过ref 拿到真实的 DOM节点（对于HTML元素） 组件元素（组件）
  // ref.current 拿到DOM元素
  const inputRef = useRef(null)

  const buttonClick = () => {
    console.log(inputRef.current)
    inputRef.current.value = ''
  }

  // Note：
  //   - useRef 使用场景： 如果要用原生JS来操作DOM，则可能需要该hook
  //   - useRef 可以从父组件中访问子组件的信息

  return (
      <div>
        <h1>Lesenelir</h1>
        <input type="text" placeholder="Ex..." ref={inputRef} />
        <button onClick={buttonClick}>Change Name</button>
      </div>
  )
}

export default RefTutorial
