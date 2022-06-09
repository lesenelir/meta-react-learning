/**
 * 初识context
 *  - 提供无需要为每层组件手动添加props，就能在组件树之间进行数据传递的方法
 *  - 全局进行修改可以用context
 *  - 设计目标：共享那些对于一个组件树而言的全局数据 【避免数据通过props层层传递】
 *
 * context 上下文 容器 -> 数据
 *    数据 - 可以给程序的多个地方传递数据
 *    容器 - 上下文 - 程序在执行的时候可以访问的容器
 *
 *    react 可以通过context中的数据传递到任何地方，而不用props一层层传递
 *
 *    组件进行扁平化
 *
 */

/**
 *  ThemeContext -
 *    provider 供应方
 *    consumer 消费方
 */
import {ThemeContext} from "./context"
import Main from "./Main"

class App extends React.Component {
  // 一键切换主题 orange black red
  state = {
    theme: 'orange'
  }

  themeChange = (theme) => {
    this.setState({
      theme
    })
  }

  render() {
    return (
        // 使用context中的Provider 将当前的theme 传递给内部包裹的组件树
        // 无论多深，任何组件都可以读取这个值
        // value值是把当前这个context容器中的数据值传递下去
        // 没有value值，默认是createContext('默认值')这个API中的默认值
        <ThemeContext.Provider value={this.state.theme}>
          {/*在ThemeContext.provide的容器内都可以使用该context上下文容器的value值*/}
          <Main themeChange={this.themeChange}/>
        </ThemeContext.Provider>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)
