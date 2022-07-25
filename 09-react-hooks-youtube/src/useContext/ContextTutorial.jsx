import React, {createContext, useState} from 'react'
import Login from "./Login"
import User from "./User"

export const AppContext = createContext(null)

function ContextTutorial(props) {

  // context 用来管理状态

  const [username, setUsername] = useState('')

  return (
      // provider 可以是一个对象，该对象中包含state
      <AppContext.Provider value={{username, setUsername}}>
        {/*<Login setUsername={setUsername} />*/}
        {/*<User username={username} />*/}
        <Login/>
        <User/>
      </AppContext.Provider>
  )
}

export default ContextTutorial
