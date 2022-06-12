/**
 * render 元素渲染
 *    - 元素不是组件，组件是由元素构成
 *    - 元素是UI视图，是通过return 之后的语句 - 它包含了标签
 *    - 组件是class 或者 function
 */
// html 中的div 叫做根节点
// 根节点内的所有的内容都是由ReactDOM进行管理
// 一个React应用只有一个根节点
// ReactDOM.createRoot().render() 创建根节点并进行元素渲染

// 创建React元素 - 不可变对象
const rEl = <h1>This is a title</h1>
console.log(rEl)

class Title extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
        <div>
          <h1>{new Date().toString()}</h1>
        </div>
    )
  }
}

// 更新渲染函数
function update() {
  root.render(new Title().render())
}
setInterval(update, 1000)
// Note： 虽然每一秒都会新建一个整棵UI树，但React DOM只更新实际改变了的内容（虚拟节点diff算法）


// 进行渲染
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Title/>)


/**
 *  观察element 中节点的更新
 *  虚拟节点的对比
 *  render 会深度对比新旧元素的状态，只会做必要的真实DOM更新
 *
 *
 */

// 渲染之前 -> 每个React元素组成一个虚拟DOM的对象结构 -> 渲染
// 更新之前 -> 形成新的虚拟DOM的对象结构 -> 对比新旧虚拟DOM节点 -> 分析出两者的不同 ->
//            形成一个DOM更新的补丁 -> 操作真实DOM

