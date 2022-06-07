/**
 * 状态提升：
 *  - 解决组件与组件之间状态共享的问题
 *  - 需求： 多个组件反映相同的变化数据，则把该数据提升到最近的父组件中，并有props传递
 */

// 状态提升： 两个组件（无父子关系）共享一个数据，并且数据是同步变化的

// 方案： 状态由父组件管理，并将状态传递给多个子组件，让子组件共享数据

// 子组件中的状态state由父组件来管理，并由props属性传递给子组件
// 子组件只需要读取父组件传递过来的数据，并且只需要执行相关的方法

class Info extends React.Component {
  render() {
    return (
        <div>
          <h3>第{this.props.inputNum}个</h3>
          <p>输入长度: {this.props.username.length}</p>
          <p>提示：{
            this.props.username.length < 6 ? '长度必须大于等于6'
                : (
                    this.props.username.length >= 6 &&
                    this.props.username.length <= 12 ? '长度合法'
                        : '长度必须小于12'
                )
          }</p>
        </div>
    )
  }
}

// 类组件调用 实例化， 组件内部的状态state是唯一且独立的
class UserNameInfo extends React.Component {
  // 子组件状态state 由父组件来管理
  // state = {
  //   username: ''
  // }
  //
  // changeUserName = (e) => {
  //   this.setState({
  //     username: e.target.value
  //   })
  // }

  render() {
    return (
        <div>
          <Info username={this.props.username} inputNum={this.props.inputNum}/>
          <div>
            {/*事件处理*/}
            <input type="text" value={this.props.username}
                   {/*在事件处理的回调函数中写箭头函数*/}
                   onChange={(e) => this.props.usernameChange(e)}
            />
          </div>
        </div>
    )
  }
}

// 单向数据流 - 通过props 向下传递
// props是只读数据 - props对应的数据操作由父组件来完成 -> 数据由父组件来管理
// 状态提升： 本应该是自组件的状态state -> 父组件来管理 -> 通过props传递给子组件
class App extends React.Component {
  state = {
    username: ''
  }

  // changeUserName = (e) => {
  //   this.setState({
  //     username: e.target.value
  //   })
  // }
  usernameChange(e) {
    console.log(this)
    this.setState({
      username: e.target.value
    })
  }


  render() {
    return (
        <div>
          <UserNameInfo
              inputNum={1}
              username={this.state.username}
              usernameChange={this.usernameChange.bind(this)}
          />
          <UserNameInfo
              inputNum={2}
              username={this.state.username}
              usernameChange={this.usernameChange.bind(this)}
          />
        </div>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)

// 类组件和函数组件 都是可以相互嵌套调用的（最后都形成了React元素）
