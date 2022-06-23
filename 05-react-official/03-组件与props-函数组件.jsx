/**
 * 函数组件与props
 *
 */

// 函数组件 props hook版本
function Test(props) {
  const [title, setTitle] = React.useState(props.title)

  return (
      <div>
        <h1>{title}</h1>
        {/*
          修改hooks的值 setXXX 一定要放入回调函数中，setXXX会自动执行，所以需要放入回调函数中
          回调函数：等点击之后才执行回调函数中的内容，即执行回调函数中的setTitle
        */}
        <button onClick={() => setTitle('button change')}>点击</button>
      </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Test title="function props title"/>)

/**
 * 组件渲染的过程：
 *  1. React 主动调用Test组件
 *  2. 将外部添加的属性集合转换为props对象
 *  3. 将对象作为props参数传入组件
 *  4. 替换jsx中的props或state中的变量 （内部使用props对象）
 *  5. ReactDOM最终将React元素通过一系列操作转换为真实DOM进行渲染
 */

// 组合组件 + 嵌套组件
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

class Author extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <p>{this.props.author}</p>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  // 定义实例的属性
  state = {
    title: 'App Title',
    author: 'App Author'
  }

  render() {
    return (
        <div>
          {/*把父组件的state传给子组件*/}
          <Title title={this.state.title}/>
          <Author author={this.state.author}/>
        </div>
    )
  }
}

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<App/>)


/**
 * 属性props 与 状态state 区别
 *  1. state => 数据池 组件内部的管理数据的容器
 *    组件内部可写可读
 *  2. props => 属性池 外部调用组件时传入的属性集合
 *    组件内部可读不可写
 *    组件外部的数据 -> 组件内部没有权限修改
 */


// 【保证】React组件一定要是一个纯函数
// 纯函数能保证组件的绝对复用性
// 但随着UI动态渲染，可以使用state，让React组件随用户操作、网络响应而动态变化

// 纯函数概念：
//  1. 相同的入参，保证返回相同的结果
//  2. 纯函数不可以修改入参


// 纯函数
function test1(a, b) {
  return a + b
}

// 不是纯函数
function test2(a, b) {
  // 修改了函数的入参
  a += 1
  b += 1
  return a + b
}
