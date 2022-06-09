/**
 * Context API
 *
 *  React.createContext
 *    创建一个指定的Context对象
 *    组件会找离自己最近的Provider，获取其value
 *    如果没有匹配到Provider（BContest.Provider中的value）就使用default value（React.createContext中的值）
 *    如果Provider中的value为null或者undefined时，context中的default value 不会生效
 *
 *
 *  Context.Provider
 *    通过React.createContext -> 上下文对象里的一个组件
 *    Provider组件可以插入其他组件 -> 订阅这个Context
 *    通过Provider的value属性来将数据传递给Consumer组件
 *    value变化，插入Provider的组件都会重新渲染
 *
 *  class.contentType
 *    static contextType = MyContext （类中写法）
 *    MyClass.contextType = MyContext （类外写法）
 *    此属性可以让你使用this.context获取最近的Context上的值
 *
 *  Context.Consumer
 *     <MyContext.Consumer>{value => // 基于context进行渲染 }</MyContext.Consumer>
 *     此方法需要一个函数作为子元素，该函数接受当前的context，并返回一个React节点
 *     该函数的参数的值 是 Provider 传递过来的value值，如果没有，则为context的default值
 *
 *  Context.displayName
 *    修改React Dev Tools 中的context名字内容
 *
 */

// 创建一个存放数据的Context容器
const AContext = React.createContext('default a')
const BContest = React.createContext('default b')

// 针对ReactChrome插件设计名称
AContext.displayName = 'MyAContext'

class App extends React.Component {

  state = {
    a: 'a context',
    b: 'b context'
  }

  render() {
    return (
        // value = {null / undefined}
        <BContest.Provider value={this.state.b}>
          <AContext.Provider value={this.state.a}>
            <Test/>
          </AContext.Provider>
        </BContest.Provider>
    )
  }
}


class Test extends React.Component {
  render() {
    return (
        <BContest.Consumer>
          {
            /**
             *
             * Consumer -> 使用 -> Provider -> value
             * 订阅context的变更
             * Consumer内部使用函数作为子元素 -> function as a child
             * 函数接受context最近的Provider提供的value
             *
             *
             */
                (valueB) => {
              return (
                  <AContext.Consumer>
                    {
                      (valueA) => {
                        return (
                            <div>
                              {/*如果箭头函数的参数值一样，则找最近的context的值*/}
                              {/*如果不一样，则可以都获取，context可进行嵌套*/}
                              {valueB} + {valueA}
                            </div>
                        )
                      }
                    }
                  </AContext.Consumer>
              )
            }
          }
        </BContest.Consumer>
    )
  }

}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)

