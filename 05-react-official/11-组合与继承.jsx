/**
 * 组合与继承
 *  - 推荐使用组合的方式而不是继承来实现组件间的代码重用
 *
 */

// 包含组合
// children

// css module css模块化
import style from './11-index.module.css'

class Container extends React.Component {
  render() {
    console.log(this.props)
    /**
     * children 元素
     *    {props.children} 相当于 Vue中的插槽
     * 1. 如果Container内部有内容（Container双标签，且双标签内有内容）
     * 2. 如果Container内部有非元素内容，则children： 非元素内容
     * 3. 如果Container内部有单个元素内容，则children： React元素内容
     * 4. 如果Container内部有多个元素内容，则children： [...React元素对象]
     *
     */
    // return (
    //     <div className="container">
    //       {this.props.children}
    //     </div>
    // )

    return (
        // 接收props的属性值是React组件元素（视图）
        <div className={style.container}>
          <div className={style.header}>
            {this.props.header}
          </div>
          <div className={style.sidebar}>
            {this.props.sidebar}
          </div>
          <div className={style.main}>
            {this.props.main}
          </div>
        </div>
    )

  }
}

class Header extends React.Component {
  render() {
    return (
        <p>Header</p>
    )
  }
}
class Sidebar extends React.Component {
  render() {
    return (
        <p>Sidebar</p>
    )
  }
}
class Main extends React.Component {
  render() {
    return (
        <p>Main</p>
    )
  }
}



class App extends React.Component {
  render() {
    return (
        // <div>
        //   <Container>
        //     {/*1*/}
        //     {/*<h1>1</h1>*/}
        //     <h1>1</h1>
        //     <p>2</p>
        //   </Container>
        // </div>

        <div>
          {/*通过props传递React组件*/}
          <Container
              header={<Header/>}
              sidebar={<Sidebar/>}
              main={<Main/>}
          />
        </div>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)

/**
 * 为什么JSX可以通过props传递视图元素 React元素？
 *  - JSX本质上都会转换成React元素（对象 object）
 *  - 视图通过props传递的机制类似于vue的插槽
 *  - 但是React的没有插槽的定义，但是可以通过props属性的方式传递视图，实现插槽
 *  - React允许通过props传递任何类型的数据（包含React组件视图）传递给子组件 - 所以React不提供插槽
 *
 */




// 多层组合




// 继承问题
/**
 * 目前React目前还没有发现有需要组件继承的需求
 *   - 因为通过children 或者是传递视图React元素的方式可以完全解决组件组合的问题
 *   - props可以传递任何类型的数据，所以组合方式可以完全替代继承方案
 *
 *
 * 逻辑部分需要继承
 *   - 这个需求自己写逻辑抽离的模块、函数、类，单独进行模块导入使用
 *   - React 只管view层
 *
 */
