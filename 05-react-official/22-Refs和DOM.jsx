/**
 * Refs
 *  允许访问真实DOM
 *
 *  React数据流 -> 通过props来实现父子组件的交互
 *  Refs允许我们强制修改子组件
 *
 *  【重要】先考虑状态state能不能完成逻辑，如果不能则用ref来处理
 *
 *  ref使用方案有如下几种：
 *    管理焦点，文本选择或媒体播放
 *    触发强制动画
 *    集成第三方DOM库
 */

// 1. 管理input的焦点
//    通过一个按钮，1.清空 input value, 2. input聚焦

class MyInput extends React.Component {
  constructor(props) {
    super(props)
    // 创建一个池子，该池子存放属性
    this.inputRef = React.createRef()
  }

  inputOperation = () => {
    console.log(this.inputRef)

    const oInput = this.inputRef.current // input 真实节点
    oInput.value = ''
    oInput.focus()
  }

  render() {
    return (
        <div>
          <input type="text" ref={this.inputRef}/>
          <button onClick={this.inputOperation}>操作input</button>
        </div>
    )
  }
}


// 2. 媒体管理
// 直接获取DOM元素本身
class MyVideo extends React.Component {
  constructor(props) {
    super(props)
    this.videoRef = React.createRef()
  }

  videoPlay = () => {
    this.videoRef.current.play()
  }

  videoPause = () => {
    this.videoPlay.current.pause()
  }

  render() {
    return (
        <div>
          <video src="./123.mp4" controls/>
          <button onClick={this.videoPlay}>Play</button>
          <button onClick={this.videoPause}>Pause</button>
        </div>
    )
  }
}


// 3. 强制动画
// 直接获取DOM操作动画

class MyBox extends React.Component {
  constructor(props) {
    super(props)
    this.boxRef = React.createRef()
  }

  boxExtend = () => {
    const oBox = this.boxRef.current  // 获取绑定boxRef的ref原生对象
    oBox.style.width = '500px'
    oBox.style.height = '500px'
  }

  render() {
    return (
        <>
          <div
              style={{
                width: 200 + 'px',
                height: 200 + 'px',
                backgroundColor: 'orange',
                transition: 'all 1s'
              }}
              ref = {this.boxRef}
          >
          </div>
          <button onClick={this.boxExtend}>Extend</button>
        </>
    )
  }
}


// 4. 模态框打开关闭
class Modal extends React.Component {

  constructor(props) {
    super(props)
    this.modalRef = React.createRef()
  }

  open = () => {
    this.modalRef.current.style.display = 'block'
  }

  close = () => {
    this.modalRef.current.style.display = 'none'
  }

  render() {
    return (
        <div
            style={{
              width: 300 + 'px',
              border: '1px solid #000',
              display: 'none'
            }}
            ref = {this.modalRef}
        >
          <h1> This is a Modal </h1>
          <p> This is a super Modal </p>
        </div>
    )
  }

}


/**
 *
 * React.createRef -> React中的方法，
 *
 *  通过createRef -> 可以创建ref对象
 *  通过元素的ref属性可以附加到React元素上 在constructor中编写
 *  一般通过构造器中给this上的属性赋值一个ref，方便整个组件使用
 *  ref只要传递到React元素中，就可以使用ref对象的current属性访问该真实DOM节点
 *  【ref是在componentDidMount 和 componentDidUpdate触发前更新】
 *  useEffect 是在真实DOM渲染完之后执行
 *
 */

/**
 * ref有不同的使用方式
 *  1. ref 放在html元素上 -> current属性指向真实DOM节点
 *  2. ref 放在class组件上 -> current属性指向 组件实例
 *  3. ref 放在function组件 -> createRef 附加不到组件上（函数组件不能使用ref属性）
 *
 *
 */

class Test extends React.Component {
  constructor(props) {
    super(props)
    this.divRef = React.createRef()
    console.log(this.divRef) // null 此时ref对象中的属性值还没有更新
  }

  componentDidMount() {
    console.log(this.divRef)
  }

  componentDidUpdate() {
    console.log(this.divRef)
  }

  render() {
    return (
        <div ref={this.divRef}>{this.props.children}</div>
    )
  }
}

// 函数组件
function Test2(props) {
  const divRef = React.useRef(null)

  React.useEffect(() => {
    console.log(divRef)
  }, [])

  return (
      <div ref={divRef}>
        Hello, Function Ref
      </div>
  )
}


class App extends React.Component {
  constructor(props) {
    super(props)
    this.testRef = React.createRef()
  }

  state = {
    text: 'Hello, Ref'
  }

  componentDidMount() {
    // ref 放在class组件上指代组件实例
    console.log(this.testRef)

    setTimeout(() => {
      this.setState({
        text: 'Hello, lee'
      })
    }, 1000)
  }

  render() {
    return (
        <div>
          {/*<MyInput/>*/}
          <Test ref={this.testRef}>{this.state.text}</Test>
        </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)
