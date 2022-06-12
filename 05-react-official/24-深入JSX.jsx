/**
 * JSX 深入
 *    => JSX实际上仅仅只是React.createElement(component, props, ...children)函数的语法糖
 *    => JSX会编译为React.createElement的调用形式
 *    => JSX 覆盖的范围 通常是 组件return 之后的内容 （渲染内容）
 *
 *  JSX 其实是React.createElement函数调用的语法糖
 *  JSX -> 编译 -> React.createElement 调用形式
 *
 *   React.createElement(参数1，参数2，参数3)
 *      参数1 - 标签名
 *      参数2 - 标签属性
 *      参数3 - 标签的子元素
 *
 *   React元素类型
 *      MyButton -> React元素 -> React元素类型
 *      组件 -> JSX -> 这个组件必须存在在当前模块的作用域中
 *      React会去编译为JSX  =>  React.createElement 调用形式
 *
 *      React 创建的createElement -> 让React库存在于当前模块（文件）的模块作用域中
 *      import React from 'react'
 *
 *      index.html -> script src -> React cdn
 *      不需要import React； React挂载到全局
 *
 *
 *   如何在JSX中使用.语法（访问对象）
 *      模块中导出许多的React组件
 *
 *   运行时选择类型
 *      如果想用通用表达式（动态）决定元素类型，需要先赋值给大写字母开头的变量
 */


/**
 * JSX书写规范
 *  1. 小写字母开头代表HTML内置组件， 标签直接转换为React.createElement第一个参数
 *        <div> -> 'div'     <h1> -> 'h1'
 *      大写字母开头代表自定义组件 <MyButton />
 *        编译 React.createElement(MyButton)
 */

/**
 * JSX中的props属性
 *  JSX 大括号 {} 里面可以传入JS的表达式
 *  非表达式 可以在JSX的外面使用
 */

/**
 * JSX中的子元素
 *
 *  字符串字面量 [不转义]
 *    <button>
 *      // 字符串字面量子元素内容书写位置
 *    </button>
 *    1. 去掉首尾空格换行
 *    2. 字符串之间的多个空格压缩为一个空格(&nbsp;)
 *    3. 字符串之间的换行会压缩为一个空格(<br/>)
 *
 *
 * JSX作为子元素
 *
 *
 */



// MyButton 是React的一种元素， 是React的元素类型
class MyButton extends React.Component {
  render() {
    return (
        <button>Click</button>
    )
  }
}


// 在React中通过使用.语法
const colorSystem = {
  'primary': 'blue',
  'success': 'green',
  'warning': 'orange',
  'danger': 'red'
}

// MyUI是一个集合对象，该集合是一个对象，属性值是一个React组件
// 模块中导出许多的React组件
const MyUI = {
  Button: class extends React.Component {
    render() {
      return (
          <button
              style={{
                color: '#fff',
                backgroundColor: colorSystem[this.props.type]
              }}
          >
            {this.props.children}
          </button>
      )
    }
  },
  Input: function (props) {
    return (
        <input
            type="text"
            placeholder={props.placeholder}
            onChange={(e) => props.onValueInput(e)}
        />
    )
  }

}


function MyTitle(props) {
  const {title, author} = props

  return (
      <div>
        <h1>{title}</h1>
        <p>{author}</p>
      </div>
  )
}


class App extends React.Component {

  state = {
    mainTitle: 'This is a main title',
    subTitle: 'This is a sub title',
    titleShow: 'subTitle'
  }


  onValueInput = (e) => {
    console.log(e.target.value)
  }

  render() {

    // {}只存放表达式，非表达式放在{}外部使用
    let title = ''
    // if (this.state.titleShow === 'sub') {
    //   title = <h2>{this.state.subTitle}</h2>
    // } else {
    //   title = <h1>{this.state.mainTitle}</h1>
    // }
    switch (this.state.titleShow) {
      case "main":
        title = <h1>{this.state.mainTitle}</h1>
        break
      case "sub":
        title = <h2>{this.state.subTitle}</h2>
        break
      default:
        title = <p>There is no title</p>
        break
    }


    const {abc, ...others} = this.props

    return (
        // 语法糖果写法
        // <div className="box" id="J_Box">
        //   <h1 className="title">
        //     This is a <span>TITLE</span>
        //   </h1>
        // </div>

        // React.createElement 写法
        // React.createElement(
        //     'div',
        //     {
        //       className: 'box',
        //       id: 'J_Box'
        //     },
        //     React.createElement(
        //         'h1',
        //         {
        //           className: 'title'
        //         },
        //         'This is a ',
        //         React.createElement(
        //             'span',
        //             null,
        //             'TITLE'
        //         )
        //     )
        // )
        <div>
          <MyButton/>
          {/*在MyUI集合下去访问其中一个组件*/}
          <MyUI.Button type="primary">Click</MyUI.Button>
          {/*在集合（对象）中访问函数组件*/}
          <MyUI.Input placeholder="请填写..." onValueInput={this.onValueInput}/>

          <MyTitle
              title={`${this.state.mainTitle} - ${this.state.subTitle}`}
              author="lesenelir"
          />

          {/*语句赋值变量后的标签*/}
          {title}

          {/* 字符字面量 - 以下两者相同 */}
          <MyTitle title={'title1'} author={'author1'}/>
          <MyTitle title='title2' author='author2'/>

          {/* 属性展开操作 */}
          <MyTitle
              // title={this.props.title}
              // author={this.props.author}
              // {...this.props}
              {...others}
          />


        </div>
    )
  }

}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <App
        title={'from App title'}
        author={'app author'}
        abc={'abc'}  // abc props是其余不要的属性，MyTitle 要排除这个属性
    /> // JSX 大写字母开头的标签代表自定义组件
    // React.createElement(App)
)
