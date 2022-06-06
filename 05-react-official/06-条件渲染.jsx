/**
 *  条件渲染
 *    通过if或者条件运算符去创建元素来表现当前要渲染的状态
 *
 */
class LoginForm extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    username: '',
    password: ''
  }

  // 类组件中的箭头函数都是属于事件处理函数

  login = () => {
    // console.log(this.state)
    const {username, password} = this.state

    if (!username.length || !password.length) {
      alert('用户名或密码不能为空')
    }

    // 登录操作
    this.props.login(username, password)

  }

  handleUserNameChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handlePassWordChane = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  render() {
    return (
        <div>
          <p>
            用户名：
            <input
                type="text"
                placeholder="用户名"
                onChange={this.handleUserNameChange}
            />
          </p>
          <p>
            密码：
            <input
                type="password"
                placeholder="密码"
                onChange={this.handlePassWordChane}
            />
          </p>
          <p>
            <button onClick={this.login}>登录</button>
          </p>
        </div>
    )
  }

}

class Welcome extends React.Component {
  constructor(props) {
    super(props)
    // props 保存由父组件传递过来的一个事件处理函数
    console.log(props)
  }

  render() {
    return (
        <div>
          <h1>欢迎您，亲爱的用户</h1>
          <button onClick={this.props.logout}>退出登录</button>
        </div>
    )
  }

}

class App extends React.Component {
  // 显示页面的状态
  state = {
    logged: false
  }

  // 该事件处理函数是由welcome组件中的button调用
  // 因为该事件处理函数需要修改父组件的state，所有定义在父组件中
  // 并通过props属性传递给子组件中使用
  logout = () => {
    this.setState({
      logged: false
    })
  }

  login = (username, password) => {
    if (username !== 'admin' || password !== 'admin') {
      alert('用户名密码错误')
      return
    }
    this.setState({
      logged: true
    })
  }

  render() {
    const {logged} = this.state

    // 条件渲染
    // if (logged) {
    //   return <Welcome logout={this.logout}/>
    // } else {
    //   return <LoginForm login={this.login}/>
    // }

    // 三目表达式
    return (
        <div>
          {
            logged ? <Welcome logout={this.logout}/>
                : <LoginForm login={this.login}/>
          }
        </div>
    )

  }

}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)

// Note: render函数返回null 则不会进行渲染
