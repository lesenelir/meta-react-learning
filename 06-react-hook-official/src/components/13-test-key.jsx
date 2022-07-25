import {useState} from "react";


function Test() {
  const [key, setKey] = useState(1)


  return (
      <>
        {key}
        <div key={key}>
          {key%2 === 0 ? '偶数': '奇数'}
        </div>

        <button onClick={() => setKey(key + 1)}>按钮</button>
      </>
  )
}

export default Test
