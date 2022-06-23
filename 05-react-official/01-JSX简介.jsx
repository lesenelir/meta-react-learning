/**
 * JSX 简介
 *
 *    - JSX 本身就是一个表达式 可以嵌入if for 语句中
 *
 *
 */

// 标签语法
const rEl = (
    <div>
      <h1 className="title">This is my first JSX experience</h1>
    </div>
)

/**
 *  JSX 是一种标签语法， JS的语法扩展， 描述UI呈现出交互的直观表现形式
 *      可以生成React元素
 */

// JSX 插值表达式
// JSX被编译以后 -> React元素 -> 普通对象 （JSX可以转换为React元素）

class MyButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openStatus: false
    }
  }

  render() {
    return (
        <div>
          <h1 className="title">视图层</h1>
        </div>
    );
  }

}

let m = new MyButton()

console.log(m.render())

// render 之前： 所有JSX都会转成字符串，所有输入的内容都会进行转义
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyButton/>)
