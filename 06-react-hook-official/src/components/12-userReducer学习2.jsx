import React, {useReducer} from 'react';

const initialState = {count: 0}

/**
 * state 和 action 都是对象
 */
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


function Counter(props) {

  // (state, action) => newState
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
      <div>
        Count: {state.count}
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
      </div>
  )
}

export default Counter
