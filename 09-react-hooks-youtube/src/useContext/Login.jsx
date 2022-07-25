import React, {useContext} from 'react'
import {AppContext} from './ContextTutorial'

function Login(props) {

  // 可以通过input 来绑定一个state 和 setState 来实现页面的双向绑定
  const {setUsername} = useContext(AppContext)

  return (
      <div>
        {/*<input type="text" onChange={(e) => props.setUsername(e.target.value)} />*/}
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
      </div>
  )
}

export default Login
