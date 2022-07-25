import React, {useReducer} from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1, showText: state.showText}
    case 'toggleShowText':
      return {count: state.count, showText: !state.showText}
    default:
      return state
  }
}

function ReducerTutorial() {
  // 如何使用useReducer 这个 hook
  // useReducer 是 useState 的替代品，和useState所做的事情有相似之处
  // useState 创建一个变量，当这个变量发生改变时，页面将re-render显示这些新值
  // useReducer使用场景:
  //      - 当一个触发器会触发多个useState中的setXXX方法，可以考虑用useState
  //      - 用一个state状态 去 替代 多个useState状态

  /*
  const [count, setCount] = useState(0)
  const [showText, setShowText] = useState(true)


  return (
      <div>
        <h1>{count}</h1>
        <button onClick={() => {
          setCount(count + 1)
          setShowText(!showText)
        }}>
          按钮
        </button>

        {showText && <p>This is show Page</p>}

      </div>
  )
  */

  // 用一个state状态变量去包含多个状态，所以该state变量是一个"对象"
  //   state集合   修改state函数     hook  管理状态改变函数      初始值
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true
  })

  return (
      <div>
        <h1>{state.count}</h1>

        <button
            onClick={() => {
              dispatch({type: 'increment'})
              dispatch({type: 'toggleShowText'})
            }}
        >
          按钮
        </button>

        {state.showText && <p>This is show Page</p>}
      </div>
  )
}

export default ReducerTutorial
