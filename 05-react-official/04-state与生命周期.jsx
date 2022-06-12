/**
 * State
 *  react核心 -> 状态 -> 数据池 -> 组件数据池 pool
 *
 *  修改state注意事项：
 *   1. 不要直接修改state，应该使用setState()
 *   2. state 更新有可能是异步的 （React会把多个setState调用合并为一个调用）
 *      setState((state, props) => {}) 接收函数而不是一个对象
 *      state是上一个state  props是此次更新时的props
 *   3. 操作setState中的引用变量， 要赋值一个新的引用
 */

class Title extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <h1>{this.props.title}</h1>
    )
  }
}

class DateTime extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    dateTime: new Date().toString()
  }

  // 组件已经被渲染到DOM中运行
  // 组件已经被挂载到真实DOM中后，运行的函数
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        dateTime: new Date().toString()
      })
    }, 1000)
  }

  // 组件即将被卸载时运行
  componentWillUnmount() {
    clearInterval(this.timer)
    this.timer = null
  }

  render() {
    return (
        <h2 id="dateTime">{this.state.dateTime}</h2>
    )
  }
}

class Board extends React.Component {
  render() {
    return (
        <div>
          <Title title="Welcome to my board"/>
          <DateTime/>
        </div>
    )
  }
}

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<Board/>)

/**
 * Note:
 *  1. 如果想使用组件的时候，传入数据 - props 组件配置
 *  2. 如果是组件内部使用的数据 - state 私有数据 （状态）
 */

/**
 * sate使用的注意事项：
 *  1. 必须使用setState更改state
 *  2. 多个setState是会合并调用
 *  3. props和state更新数据要谨慎，尽量避免直接以来她们，有可能是在异步程序中更新
 *    this.setState({
 *      result: this.state.result + this.props.content
 *    })
 *
 *    // 【关键】：如果需要用this.props 或者 this.state 则使用回调函数的方式
 *                因为this.props 或者 this.state 有可能是异步更新
 *                所以setState 参数接收一个函数
 *
 *
 *    this.setState((state, props) => {
 *      // state 是上一个state
 *      // props 是此次更新时被使用的props
 *      return {
 *        result: state.result + props.content
 *      }
 *    })
 *  4. setState 操作合并的原理： 浅合并
 *    对于state中的引用变量 要赋值一个新的引用
 *
 *    this.setState({
 *      arr: [...this.state.arr, 5]
 *    })
 *
 */


// 组件无论如何都不知道其他组件是否有状态；也不关心其他组件是函数组件还是类组件
// state是组件内部特有的数据封装
// 其他组件是无法通过读写修改该组件的state
// 【关键】组件可以通过其他组件调用时候的props来传递state的值（props传递了父组件的state，且子组件不能修改该值）
//        组件的state的可以通过props传递给子组件，但只能传递给自己组件的子组件，不能影响组件的外部（state安全影响范围）



class Son extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        // 父组件的state 通过 props 传递给子组件访问
        <h1>{this.props.name}</h1>
    )
  }
}

class Father extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    name: 'father Name'
  }

  render() {
    return (
        <div>
          <Son name={this.state.name}/>
        </div>
    )
  }

}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Father/>)


/**
 * 数据流向 React 和 Vue 都是 单向数据流
 * 数据绑定 Vue 是双向数据绑定
 *
 *  数据（状态） 由父到子，由上而下传递的方式叫做 【单向数据流】=> 父组件的state作为props向下传递
 *    - 单向向下的数据流动
 *    - 单向数据流动 也是为了满足 props的只读性
 *
 *  Vue 中也是单向数据流 ， 但有 v-model  双向数据绑定
 *  React中没有 v-model 没法通过视图更新数据
 *
 */

