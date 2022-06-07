/**
 * 受控组件
 *    - 处理表单数据的问题
 */

// 受控组件： 表单数据是受控于state数据池的 + 表单事件处理函数可以修改state
// 非受控组件： 表单数据是只读的，非受控于state


class App extends React.Component {

  // 1. state是表单的唯一数据源
  state = {
    username: '',
    password: '',
    intro: ''
  }

  // 2. 控制表单操作并且同步state
  handleUserNameChange = (e) => {
    // e.target
    this.setState({
      username: e.target.value
    }, () => {
      console.log(this.state.username)
    })
  }

  handlePassWordChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleIntroChange = (e) => {
    this.setState({
      intro: e.target.value
    })
  }

  handleSubmitClick = (e) => {
    e.preventDefault() // 提交表单会刷新所以要阻止默认行为
    const {username, password, intro} = this.state
    console.log(username, password, intro)
  }

  render() {

    const {username, password, intro} = this.state

    return (
        <div>
          <form action="">
            <p>
              用户名：
              <input
                  type="text"
                  placeholder="用户名"
                  value={username}
                  onChange={this.handleUserNameChange}
              />
            </p>
            <p>
              密码：
              <input
                  type="password"
                  placeholder="密码"
                  value={password}
                  onChange={this.handlePassWordChange}
              />
            </p>
            <p>
              <textarea
                  name="" id="" cols="30" rows="10"
                  placeholder="自我介绍"
                  value={intro}
                  onChange={this.handleIntroChange}
              />
            </p>
            <p>
              <button onClick={this.handleSubmitClick}>登录</button>
            </p>
          </form>
        </div>
    );
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)

// 由state 决定表单内部的数据、由表单的事件处理函数更改state变化视图所绑定的值

// 对于受控组件：输入的值始终都是由React的state驱动
// 受控组件的麻烦：数据的每种变化方式都需要编写事件处理函数，并通过一个React组件传递所有的输入state

// checkbox 和 radio 比较适合用于受控组件

// 受控组件： 只要给表单元素设置了value，并且该value值是绑定state的就是受控于state
