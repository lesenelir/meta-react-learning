/**
 * Refs转发机制
 *  - 通过ref 使得 父组件拿到子组件的元素上的ref
 *  - 组件的转发机制是一种破坏组件的方式
 *
 *  如何将子节点的ref暴露给父组件
 *   - Refs转发
 *   - 将ref自动的通过组件传递给子组件
 *
 */

// React

// 子组件
// class MyInput extends React.Component {
//   render() {
//     return (
//         <input type="text" placeholder="请填写..."/>
//     )
//   }
// }

// 转发
// React.forwardRef((props, ref) => {return React组件元素})

// 3. 通过forwardRef想input转发ref属性
const MyInput = React.forwardRef((props, ref) => {
  return (
      // ref 参数 只能用forwardRef定义的组件内可接收
      <input type="text" ref={ref} placeholder={props.placeholder}/>
  )
})

class App extends React.Component {
  constructor(props) {
    super(props)
    // 1. 创建ref对象
    this.myInputRef = React.createRef()
  }

  componentDidMount() {
    // 该生命周期函数可以拿到ref元素
    // 4. myInputRef.current 通过 转发机制 获得子组件中的某个展示DOM节点
    console.log(this.myInputRef)
  }

  inputOperate = () => {
    // 要拿到子组件的input真实DOM节点
    const oInput = this.myInputRef.current
    oInput.value = ''
    oInput.focus()
  }

  render() {
    return (
        <div>
          {/*2. 给组件赋值ref */}
          {/* 此处不想ref为组件实例，而是子组件的某个真实DOM，所以创建子组件的时候要用Refs的转发机制 */}
          <MyInput ref={this.myInputRef} placeHolder="请填写..."/>
          <button onClick={this.inputOperate}>Click</button>
        </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)

