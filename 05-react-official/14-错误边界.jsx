/**
 * 错误边界
 *  - 为了防止某个组件的UI渲染错误（通常都是JS错误）导致整个应用崩溃情况的发生
 *    子组件发生JS错误，有备用的渲染UI
 *    错误边界 其实是一个组件 -> 只能用class组件来写
 */


/**
 *  错误边界重新渲染UI组件只能是类组件
 *  作用：渲染备用UI
 *  渲染阶段调用：不允许出现副作用 setTimeout
 *
 *   state = {
       hasError: false
     }
 *
 *   static getDerivedStateFromError() {
       return {hasError: true}
     }
 *    该函数 是错误边界组件的一个类方法， 返回值是一个新的state
 *
 *  错误边界组件无法捕获的场景：
 *    - 事件处理函数
 *    - 异步代码 ajax setTimeout
 *    - 服务端渲染
 *    - 错误边界组件内部有错误
 *
 */


/**
 * componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo)
   }
 *  边界错误组件捕获异常，并进行后序处理
 *  作用：错误信息获取，运行副作用
 *  在组件抛出错误后调用
 *
 *  参数：
 *    error：抛出错误
 *    info：组件引发错误相关的信息 组件栈
 *
 */


// Note：
//  1. 错误边界捕获错误的时机：渲染时、生命周期函数中、组件树的构建函数中
//  2. 如果多个嵌套错误边界组件 -> 则从最里面错误出发 向上冒泡触发捕获


// 错误边界组件 （类组件中有 static getDerivedStateFromError 或 componentDIdCatch 方法）
// 只有类中有   static getDerivedStateFromError 或 componentDIdCatch 一个，则该类就是错误边界组件
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    hasError: false
  }

  // 参数：子组件抛出的错误
  // 返回值：新的state - 获取捕获到的错误状态 修改错误状态
  // 作用：渲染备用UI
  static getDerivedStateFromError(error) {
    console.log(error)
    return {hasError: true}
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
          <h1>原先组件出错，渲染错误边界组件</h1>
      )
    } else {
      return this.props.children // 渲染ErrorBoundary标签包裹的信息（插槽）
    }
  }

}

class Test extends React.Component {
  render() {
    return (
        <div>
          {/*出现错误的地方，Test是发生错误的组件*/}
          {data.title}
        </div>
    )
  }
}

// 正常没有出错的组件
class Sub extends React.Component {
  render() {
    return (
        <div>
          <p>This is content</p>
        </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
        <div>
          <Sub/>
          {/*错误边界组件包裹可能出错的React组件*/}
          <ErrorBoundary>
            {/*显示UI渲染，但是会报错，提示错误*/}
            <Test/>
          </ErrorBoundary>
        </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)

// 错误边界组件可以捕获其子组件的错误，但是不能捕获自身的错误
// 如果错误边界无法渲染错误信息，则错误会冒泡至最近的上层错误边界 类似于 catch{}
