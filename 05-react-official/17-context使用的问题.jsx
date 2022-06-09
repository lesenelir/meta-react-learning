// Context 给整个组件树共享全局的数据
// 主要应用场景：很多不同层级的组件需要访问同一的数据

// 问题： - 污染  - 复用性变差（该组件只针对当前的业务）

// 创建Context容器
const CityContext = React.createContext({
  name: 'beijingu',
  text: '北京'
})

class App extends React.Component {
  state = {
    cityInfo: {
      name: 'beijing',
      text: '北京'
    }
  }

  changeCity = (cityInfo) => {
    this.setState({
      cityInfo
    })
  }

  render() {
    return (
        <CityContext.Provider value={this.state.cityInfo}>
          <Header changeCity={this.changeCity}/>
          <span>{this.state.cityInfo.text}</span>
        </CityContext.Provider>
    )
  }

}

class Header extends React.Component {
  render() {
    return (
        <Selector changeCity={this.props.changeCity}/>
    )
  }
}

class Selector extends React.Component {
  // 将上下文的类型指定为CityContext
  // this.context -> cityInfo
  // 向上找最近的CityContext的Provider，并且取值 cityInfo

  // 指定contextType 读取当前的 theme context
  // 之后就可以使用 {this.context} 读取context中的value值
  static contextType = CityContext

  render() {
    return (
        <select
            name="" id=""
            value={this.context.name}
            onChange={(e) => {
              return this.props.changeCity({
                name: e.target.value,
                text: e.target[e.target.selectedIndex].text
              })
            }}
        >
          <option value="beijing">北京</option>
          <option value="hangzhou">杭州</option>
          <option value="shanghai">上海</option>
        </select>

    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)


/**
 * Context 容器最适合的场景：
 *  1.杂乱五张的组件都需要同一些数据
 *    单纯为了不层层传递属性的化，Context实际上不合适的 （不能保存组件的纯度，纯组件）
 *
 * Context 弱点：
 *  弱化以及污染组件的纯度(污染组件的复用性)，导致组件复用性降低
 */

