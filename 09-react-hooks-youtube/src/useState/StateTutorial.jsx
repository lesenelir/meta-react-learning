import React, {useState} from 'react'

function StateTutorial() {
  const [counter, setCounter] = useState(0)
  const [inputValue, setInputValue] = useState('Lesenelir')

  const increment = () => {
    setCounter(counter + 1)
  }

  const changeInputValue = (e) => {
    console.log(e.target.value)
    setInputValue(e.target.value)
  }

  return (
      <div>
        {counter}
        <button onClick={increment}>按钮</button>
        <br/>

        <input
            type="text"
            placeholder="请输入文本"
            // onChange={(e) => setInputValue(e.target.value)}
            onChange={changeInputValue}
        />
        {inputValue}

      </div>
  )
}

export default StateTutorial
