import React, {useState, forwardRef, useImperativeHandle} from 'react'

const Button = forwardRef((props, ref) => {

  const [toggle, setToggle] = useState(false)

  // console.log(props, ref)

  // useImperativeHandle 复用组件
  // 当需要创建一个可复用的组件，需要从外部调用
  // 允许创建某些函数，通过ref，使得父组件调用

  useImperativeHandle(ref, () => {
    return ({
      alterToggle() {
        setToggle(!toggle)
      }
    })
  })

  return (
      <>
        <button>
          Button From Child
        </button>

        {toggle && <span>Toggle</span>}
      </>
  )
})

export default Button
