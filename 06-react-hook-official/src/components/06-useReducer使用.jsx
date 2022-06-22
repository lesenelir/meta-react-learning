/**
 *  redux
 *    类中数据所有都在state ， 数据单向流原则
 *    redux 统一管理state，实现数据的更新
 *
 *  state比较大，统一的方式来更改state调用 dispatch
 *
 *  Note:
 *    useReducer 可以使用 redux 代替
 *
 */
import {useReducer} from "react";

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1}
    case 'decrement':
      return {count: state.count - 1}
    default:
      throw new Error()
  }
}


// 行为 action
function App() {
  const [state, dispatch] = useReducer(reducer, {count: 0})

  return (
      <>
        Count: {state.count}
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      </>
  )

}

export default App

