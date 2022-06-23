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
    /**
     *  如果没有绑定this，则this为undefined
     *  如果有绑定this，则this 为 类组件实例
     */
    console.log(this)
  }

  render() {
    return (
        <div>
          {/*
            render 中的this是组件实例， 因为render函数是组件实例调用 - root.render
            而事件处理函数如果没有绑定this，则是类中的方法去调用类中的方法，此时this 为 undefined
          */}
          {/*{console.log(this)}*/}
          {/*绑定事件处理函数*/}
          <button onClick={this.doSth}>点击</button>
          <a href="#" onClick={this.doSth2.bind(this)}>click</a>
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
// 绑定this 实质就是为了让 函数 挂载到 某一个对象上执行，从而调用方式为 对象.方法 的形式来调用
class Test extends React.Component {
  constructor(props) {
    super(props)
    // 方法1
    // this.doSth1 = this.doSth1.bind(this) // 把doSth 作为实例的一个属性
  }

  doSth1(e) { // doSth 本质是回调函数
    /**
     * 默认处理函数的this为undefined
     * ES6 class 模块默认不是对事件处理函数进行this的再绑定
     */
    console.log(this) // 没有绑定是：undefined
    console.log(e)
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
          {/*<button onClick={this.doSth1.bind(this)}>click</button>*/}
          {/*方法3*/}
          {/*
            此方法绑定this的原因是：
            render中的this是类组件的实例对象，因为是实例对象调用render
            箭头函数中的this是上一层函数作用域中的this，即render
            把doSth1 绑定到this对象上执行，所以doSth1中的this是实例对象
          */}
          {/*
            通过回调函数的方式，每次渲染都会创建不同的回调函数；
            一般没有事情，但是如果回调函数作为props传递给子组件时，这些组件可能需要进行重新渲染
          */}
          {/*
            事件处理程序中传递参数
            通过回调方式如果需要用到事件对象时，则需要使用参数方式进行传递
          */}
          <button onClick={(e) => this.doSth1(e)}>click</button>
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
 *      （回调函数：某个函数某个任务之后，回调函数执行，js中的回调函数，是把回调函数作为一个函数的参数）
 *    render函数每次执行的时候都会创建不同的新回调
 *  4. 事件处理函数使用箭头函数 【推荐】
 */

// Note： 类组件中的事件处理函数（回调函数）都使用箭头函数的形式编辑
