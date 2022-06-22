/**
 * hook 钩子  -> 别人做好的东西，你直接拿来用
 *
 *  setState 中可以直接修改state，也可以使用回调函数的方式修改state，回调函数的第一个参数是preState
 */
import {useState} from "react"

function App() {
  console.log('组件重新渲染调用')
  const [title, setTitle] = useState('React')
  //     state  setState     hook     initialState

  // 重新渲染问题 用 Object.is 来比较
  // 如果更新函数返回值和当前的state值完全相同，则不会重新渲染
  // React可能仍需要在跳过渲染前渲染该组件，但不会对组件树的"深层"节点进行渲染
  const [info, setInfo] = useState({
    a: 1
  })
  function changeInfo() {
    setInfo({
      a: 1
    })
  }

  const obj = {
    a: 2
  }
  const [info2, setInfo2] = useState(obj)
  function changeInfo2() {
    setInfo2(obj)
  }

  // 函数组件不会自动合并对象，可以使用函数式setState和展开运算符来更新对象
  const [person, setPerson] = useState({
    name: 'lesenelir',
    age: 18
  })
  function changePerson() {
    setPerson((preItem) => {
      const newPerson = {
        name: 'lesenelir_s',
        age: 18,
        hobby: 'Travel'
      }
      // 合并对象是把原先没有的属性添加，原先有的属性进行复制新属性值
      // 类似于Object.assign
      // return {...preItem, ...newPerson}
      // Object.assign 的第一个参数是目标对象，将第二参数复制到第一个目标参数中
      return Object.assign(newPerson, preItem)
    })
  }


  // 惰性初始化state
  function getScoreClass(score) {
    let scoreClass = ''
    if (score <= 100 && score >= 90) {
      scoreClass = 'A'
    } else if (score < 90 && score >= 80) {
      scoreClass = 'B'
    }
    return scoreClass
  }
  // 当useState中有比较复杂的操作时，可以添加一个回调函数，里面可以进行复杂操作
  const [scoreClass, setScoreClass] = useState(() => {
    return getScoreClass(88)
  })


  return (
      <>
        <h1>{title}</h1>
        {/*函数组件绑定事件处理函数的方法：*/}
        <button onClick={() => setTitle('React hooks')}>change</button>
        {/* 新的state需要重新计算先前的state，则可以将函数传递给setState*/}
        {/* pre是上一次的state值 */}
        <button onClick={() => setTitle((pre) => pre + ' Change2')}>Change Second</button>

        {/*重新渲染问题：*/}
        <br/>
        {/*引用不同，会重新渲染APP组件*/}
        <h1>{info.a}</h1>
        <button onClick={changeInfo}>Change</button>
        <br/>
        {/*引用相同，不会重新渲染组件*/}
        <h1>{info2.a}</h1>
        <button onClick={changeInfo2}>Change</button>

        {/* 合并 */}
        {/*<br/>*/}
        <h1>{person.name}</h1>
        <button onClick={changePerson}>change</button>

        {/* 惰性初始化State */}
        <h1>等级是:{scoreClass}</h1>

      </>
  )

}


export default App
