/**
 *  函数组件中使用ref 用hook
 *
 *  函数组件中既可以用createRef 也可以用 useRef
 *  但是，useRef性能更好
 *
 *  Note：
 *    ref不能指向函数组件
 *    所以子函数组件绑定的ref（36行）时，需要子组件通过forward转发包裹传入ref（18行），重新绑定子组件的原生DOM上
 *
 */
import {forwardRef, useRef} from "react";


// 函数组件通过ref转发
// forwardRef 可以包裹一个函数组件
// 回调函数第一个参数是props，第二个参数是ref
const Foo = forwardRef((props, ref) => {
  return (
      <input type="text" ref={ref}/>
  )
})


function App() {
  // const inputRef = createRef()
  const inputRef = useRef()

  const buttonClick = () => {
    console.log(inputRef.current) // ref函数组件中的原生DOM - 拿到子函数组件中的原生DOM
    inputRef.current.focus() // 调用ref
  }

  return (
      <div>
        <Foo ref={inputRef}/>
        <button onClick={buttonClick}>button</button>
      </div>
  )

}

export default App
