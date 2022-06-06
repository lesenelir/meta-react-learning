/**
 * 列表渲染
 *  转换为元素列表的过程
 *  React 和 vue 区别： React是用js语句表达式组合而成视图进行渲染，vue没有相应的指令
 *
 */
// JSX -> map 方法

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    arr: [
      {id: 1, name: 'lee1'},
      {id: 2, name: 'lee2'},
      {id: 3, name: 'lee3'}
    ]
  }

  render() {
    return (
        <div>
          <table border='1'>
            <thead>
            <tr>
              <th>ID</th>
              <th>名字</th>
            </tr>
            </thead>
            <tbody>
            {
              this.state.arr.map((item) => {
                return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                    </tr>
                )
              })
            }
            </tbody>
          </table>
        </div>
    )
  }

}


// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<App/>)

/**
 * 列表中每一个子元素都必须有一个唯一的key属性值
 *  key是React查看元素是否改变的一个唯一表示
 *  key必须在兄弟节点中唯一，确定的
 *
 *
 * 不建议使用index作为key值原因：
 *   - 该情况建立在列表项顺序改变、元素增删的情况下
 *   - 列表项增删或顺序改变了，index的对应项就会发生改变
 *
 */

// key 赋值的正确姿势

class ItemTitle extends React.Component {
  render() {
    return (
        <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
        </thead>
    )
  }
}


class ListItem extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    const {item} = this.props

    return (
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
        </tr>
    );
  }
}

class ListTable extends React.Component {
  state = {
    arr: [
      {id: 1, name: 'lee1'},
      {id: 2, name: 'lee2'},
      {id: 3, name: 'lee3'}
    ]
  }

  render() {
    return (
        <table border="1">
          <ItemTitle/>
          <tbody>
          {
            this.state.arr.map((item) => {
              {/*注意此处key的赋值，key 一般都是在map函数中指定*/}
              return (
                  <ListItem
                      item={item}
                      key={item.id}
                  />
              )
            })
          }
          </tbody>
        </table>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<ListTable/>)

// Note: 【好的经验】 key存放的位置一般而言都是在map()方法中指定key属性
