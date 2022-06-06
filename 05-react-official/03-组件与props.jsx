/**
 * 组件与props
 *  props相当于js函数中的入参
 */

// 组件

// 在前端，组件视图的片段
// 包含：视图标记、事件、数据state、逻辑、外部配置props

/**
 *  组件一般是内部管理数据集合（state）
 *  外部传入配置集合（props）
 */


// 组件类 -> 类组件
class Test extends React.Component {
  // 属性 -> 配置 -> props保存
  constructor(props) {
    super(props)
    console.log(props) // props 实质是一个对象

    // this.state = {
    //   title: this.props.title
    // }
  }

  // 保存实例的属性
  // 数据 -> 内部数据 -> state
  state = {
    title: this.props.title
  }

  // 事件处理函数
  handleBtnClick () {
    // 逻辑 - 调用setState方法
    this.setState({
      title: 'button change'
    })
  }

  render() {
    // 视图标记
    return (
        <div>
          <h1>{this.state.title}</h1>
          {/* this.handleBtnClick 的this是指向button，使用bind重新绑定this */}
          {/* 事件 */}
          <button onClick={this.handleBtnClick.bind(this)}>点击</button>
        </div>
    )
  }

}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Test title="props title" />)
