/**
 * 事件处理
 *
 */

// DOM原生事件处理 addEventListener onclick = function() {}

// React 元素也采用了类似于DOM0标准中的事件属性定义的方法 - 直接在React元素上绑定
// JSX <button onClick={ this.doSth }>


class App extends React.Component {
  constructor(props) {
    super(props)
  }

  doSth() {
    console.log('something is done')
  }

  doSth2(e) {
    // e 是 React中的事件对象， 对原生的事件对象进行重新的封装
    /**
     * SyntheticBaseEvent 合成基础事件对象 React 重新定义
     */
    console.log(e)
    e.preventDefault() // 阻止默认行为
    console.log('something2 is done')
  }

  render() {
    return (
        <div>
          {/*绑定事件处理函数*/}
          <button onClick={this.doSth}>点击</button>
          <a href="#" onClick={this.doSth2}>click</a>
        </div>
    )
  }

}


// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<App/>)


/**
 * React 为什么要将事件处理直接在React元素上绑定？
 *  - React认为事件处理跟视图是有程序上的直接关系的
 *  - 事件处理和视图卸载一起可以更加直观的表述视图与逻辑的关系，更加好维护
 */


// 类组件中的this 指向
// 绑定this 是为了在事件处理函数中使用this 为类的实例对象
class Test extends React.Component {
  constructor(props) {
    super(props)
    // 方法1
    // this.doSth = this.doSth.bind(this) // 把doSth 作为实例的一个属性
  }

  doSth1() { // doSth 本质是回调函数
    /**
     * 默认处理函数的this为undefined
     * ES6 class 模块默认不是对事件处理函数进行this的再绑定
     */
    console.log(this) // 没有绑定是：undefined
  }

  // 方法4 使用箭头函数 【推荐写法】
  doSth = (e) => {
    console.log(this)
    console.log(e)
  }

  render() {
    return (
        <div>
          <button onClick={this.doSth}>click</button>
          {/*方法2*/}
          {/*<button onClick={this.doSth.bind(this)}>click</button>*/}
          {/*方法3*/}
          {/*<button onClick={() => this.doSth()}>click</button>*/}
        </div>
    )
  }

}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Test/>)

/**
 * 解决this指向的方法：
 *  1. bind(this) => 构造器 【推荐】
 *  2. bind(this) => 视图标记
 *  3. 回调 + 箭头函数
 *    render函数每次执行的时候都会创建不同的新回调
 *  4. 事件处理函数使用箭头函数 【推荐】
 */

// Note： 类组件中的事件处理函数（回调函数）都使用箭头函数的形式编辑
