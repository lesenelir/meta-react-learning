import {useState} from "react"

function Child(props) {
  return (
      <>
        <h2>This is a {props.title} Function Component </h2>
      </>
  )
}


function App() {
  const [title, setTitle] = useState('Child')

  function changeTitle() {
    setTitle('Change-Title2')
  }

  return (
      <div>

        <h1>This is a Function Component</h1>
        <Child title={title}/>
        {/*函数组件事件处理函数的绑定可以直接修改setXXX*/}
        {/*通过回调函数返回setTitle*/}
        <button onClick={() => setTitle('Change-Title')}>Change</button>
        {/*函数组件的第二种事件回调的方式*/}
        <button onClick={changeTitle}>Change2</button>

      </div>
  )

}

export default App
