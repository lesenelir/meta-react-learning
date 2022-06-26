/**
 * 横切关注点问题：
 *    - 之前是用mixin
 *
 *  对参数组件本身的逻辑状态与视图的横向切割
 *  让HOC来完成逻辑和状态的管理
 *  让参数组件来完成视图的渲染
 *
 *  让HOC将数据与逻辑传递到参数组件中
 *  从而完成关注点分离
 *
 *  HOC返回的组件是一个高度复用的组件
 *
 *  总结：
 *    - HOC更加关注逻辑与状态的管理，参数组件的逻辑
 *    - 参数组件基本只需要关注视图的渲染
 *
 */

// 包裹组件
class MyInput extends React.Component {
  render() {
    return (
      <div>
        {/*此处的props是由InputHOC高阶函数返回的组件得来*/}
        <h1>{this.props.inputValue}</h1>
        <p>总计: {this.props.b + this.props.c}</p>
        <input
            type="text"
            placeholder={"请填写"}
            value={this.props.inputValue}
            onChange={this.props.valueInput}
        />
      </div>
    )
  }
}

// 函数组件作为包裹组件（高阶组件的参数）
function MyInputFn(props) {
  React.useEffect(() => {
    console.log('包裹组件是函数组件')
  }, [props.inputValue])

  return (
      <div>
        {/*此处的props是由InputHOC高阶函数返回的组件得来*/}
        <h1>{props.inputValue}</h1>
        <p>总计: {props.b + props.c}</p>
        <input
            type="text"
            placeholder={"请填写"}
            value={props.inputValue}
            onChange={props.valueInput}
        />
      </div>
  )
}


function InputHoc(WrapperComponent) {
  return class extends React.Component {
    // 高阶组件返回的组件 不能修改 包裹组件(参数组件)
    // 因为如果修改，有可能会导致参数组件内部的逻辑执行失效

    state = {
      inputValue: ''
    }

    valueInput = (e) => {
      this.setState({
        inputValue: e.target.value
      })
    }

    render() {
      // 用...剩余参数来排除组件不需要的属性
      const {a, ...props} = this.props

      return (
          <WrapperComponent
              inputValue = {this.state.inputValue}
              valueInput = {this.valueInput}
              {...props}
          />
      )
    }
  }
}

// 创建由高阶组件（函数）返回的组件
const MyInputHoc = InputHoc(MyInput)
// 创建高阶组件的参数组件 是一个函数组件
const MyInputFnHoc = InputHoc(MyInputFn)

class App extends React.Component {
  state = {
    a: 1,
    b: 2,
    c: 3
  }

  render() {
    return (
        <div>
          <MyInputHoc {...this.state}/>
          <MyInputFnHoc {...this.state}/>
        </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)
