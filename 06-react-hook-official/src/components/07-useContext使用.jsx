/**
 * useContext 是进行深层次数据传递的使用方法
 *
 */
import React, {createContext, useContext} from "react"

// 创建context容器
// 一般而言整个APP中只有一个Context
const AppContext = createContext()

class Foo extends React.Component {
  render() {
    return (
        // Consumer 容器包裹
        <AppContext.Consumer>
          {value => {
            return <div>{value}</div>
          }}
        </AppContext.Consumer>
    )
  }
}

class Bar extends React.Component {
  // 类组件context 优雅写法
  // 使用该API，可以使用 this.context 获取值
  static contextType = AppContext

  render() {
    const value = this.context
    return (
        <div>
          {value}
        </div>
    )
  }

}

const Baz = (props) => {
  const value = useContext(AppContext)

  return (
      <div>
        {value}
      </div>
  )
}

const Middle = (props) => {
  return (
      <div>
        <Foo/>
        <Bar/>
        <Baz/>
      </div>
  )
}


function App() {
  return (
      <AppContext.Provider value={"lesenelir"}>
        <Middle/>
      </AppContext.Provider>
  )
}

export default App
