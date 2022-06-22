import React, {createRef, forwardRef} from "react"
/**
 *  类组件中的ref
 */

// 类组件的ref可以是原生DOM，也可以是子组件
class Foo extends React.Component {
  inputFooRef = createRef()

  // 该方法是父组件通过ref来调用
  focus = () => {
    console.log('Foo focus')
    // 子组件自身的ref
    this.inputFooRef.current.focus()
  }

  render() {
    return (
        <input type="text" ref={this.inputFooRef}/>
    )
  }
}

// 函数组件通过forwardRef进行ref转发
// const FunctionFoo = forwardRef((props,ref) => {
//   return <input type="text" ref={ref}/>
// })


class App extends  React.Component{
  // 创建一个ref，这是一个对象，对象中有current属性
  inputRef= createRef()

  buttonClick = () => {
    console.log(this.inputRef)
    this.inputRef.current.focus() // 调用子组件的focus方法，
    // this.inputRef.current 是子组件
  }

  render() {
    return (
        <div>
          {/*ref 指向原生DOM，则挂载到原生DOM上*/}
          {/*<input type="text" ref={this.inputRef}/>*/}
          {/*ref 指向类组件，则挂载到子组件*/}
          <Foo ref={this.inputRef}/>

          {/*ref不能指向函数组件，但可以使用ref转发方式实现转发ref*/}
          {/*<FunctionFoo ref={this.inputRef}/>*/}

          <button onClick={this.buttonClick}>button</button>
        </div>
    )
  }

}

export default App
