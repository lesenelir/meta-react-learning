/**
 * Fragment -> React下的一个组件
 *  document.createDocumentFragment() 原生创建文档碎片
 *
 *  React => 组件需要一个根节点 => 有时候不需要根节点时 -> React.Fragment
 *
 *  React中一个组件返回多个元素，如果不需要根标签div，则可以使用Fragment
 *    Fragment允许将子列表分组，无需向DOM添加额外节点
 *
 */


class App extends React.Component {
  render() {
    return (
        <Table/>
    )
  }
}

class Table extends React.Component {
  state = {
    headers: [
      'Name',
      'ID',
      'Age'
    ],
    info: [
      'Lesenelir',
      '01',
      '18'
    ]
  }

  render() {
    return (
        <table border="1">
          <caption>Private Information</caption>
          <thead>
          <tr>
            {/*不能有根节点所以下面这个组件不能有div根节点，要创建文档碎片*/}
            <TableHeaders headers={this.state.headers}/>
          </tr>
          </thead>
          <tbody>
          <tr>
            <TableCells info={this.state.info}/>
          </tr>
          </tbody>
        </table>
    )
  }
}

class TableHeaders extends React.Component {
  render() {
    return (
        // 创建 React组件中的文档碎片
        // 解决了没有跟节点的问题
        // Fragment 除了key属性，不支持其他任何属性
        <React.Fragment>
          {
            // 此处table不能有根标签，所以会报错
            this.props.headers.map((item, index) => {
              return <th key={index}>{item}</th>
            })
          }
        </React.Fragment>
    )
  }
}

class TableCells extends React.Component {
  render() {
    return (
        // 短语法: <> </> 效果类似于<React.Fragment> 创建一个空的节点
        // 断于法不支持key
        <>
          {
            this.props.info.map((item, index) => {
              return <td key={index}>{item}</td>
            })
          }
        </>
    )
  }

}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)

