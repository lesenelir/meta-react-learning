import React, {useEffect} from 'react'

function Child(props) {

  useEffect(() => {
    console.log('Function was called')
  }, [props.returnComment])

  return (
      <div>
        {props.returnComment('Lesenelir')}
      </div>
  )
}

export default Child
