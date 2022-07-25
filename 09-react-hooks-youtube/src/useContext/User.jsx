import React, {useContext} from 'react'
import {AppContext} from "./ContextTutorial"

function User(props) {
  const data = useContext(AppContext)

  return (
      <div>
        {/*<h1>User: {props.username}</h1>*/}
        <h1>User: {data.username}</h1>
      </div>
  )
}

export default User
