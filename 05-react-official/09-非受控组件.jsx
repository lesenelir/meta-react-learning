/**
 * 非受控组件
 *  - 表单数据不受控于state，使用React ref从DOM节点中获取表单数据的原组件
 *
 *  受控组件和非受控组件：
 *    - 都是针对表单数据而言
 *    - 受控组件是由state控制；非受控组件是直接有ref从DOM节点中获取表单的DOM节点 （跟创建Refs有关）
 *    - 表单数据一般都使用受控组件；非受控组件用的较少，简单的数据提交可以使用
 *
 */

class App extends React.Component {
  constructor(props) {
    super(props)
    // 先创建Ref集合中的元素
    this.usernameRef = React.createRef()
    this.passwordRef = React.createRef()
    this.genderRef = React.createRef()
    this.fileRef = React.createRef()
  }


  // 事件处理函数
  handleSubmitClick = (e) => {
    e.preventDefault()
    // console.log(this.refs) // this.refs是一个集合
    console.log(this.usernameRef)
  }

  handleResetClick = (e) => {
    e.preventDefault()
    // ref节点的引用对象的值存在于 current这个属性中
    // this.refs.usernameRef.value = ''
    // this.refs.passwordRef.value = ''
    this.usernameRef.current.value = ''
    this.passwordRef.current.value = ''
    this.genderRef.current.value = ''
    this.fileRef.current.value = ''
  }

  render() {
    return (
        <div>
          <form action="">
            <p>
              用户名：
              <input
                  type="text"
                  placeholder="用户名"
                  // ref="usernameRef"
                  ref={this.usernameRef}
              />
            </p>
            <p>
              密码：
              <input
                  type="password"
                  placeholder="密码"
                  // ref="passwordRef"
                  ref={this.passwordRef}
              />
            </p>
            <p>
              <select
                  name="" id=""
                  defaultChecked="female"
                  ref={this.genderRef}
              >
                <option value="male">男</option>
                <option value="female">女</option>
              </select>
            </p>
            <p>
              {/*
                文件上传是典型的非受控组件的元素，
                因为文件上传只能是由用户设置，而不是通过代码控制
              */}
              <input type="file" ref={this.fileRef}/>
            </p>
            <p>
              <button onClick={this.handleSubmitClick}>登录</button>
            </p>
            <p>
              <button onClick={this.handleResetClick}>重置</button>
            </p>
          </form>
        </div>
    )
  }

}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)

// 非受控组件的input 和 传统HTML的input 类似

/**
 * 受控组件与非受控组件的选择问题：
 *
 *  适合于非受控组件：
 *    1. 一次性获取值 - 不需要通过事件处理函数去修改值，则适合非受控组件
 *    2. 提交表单验证合法性
 */
