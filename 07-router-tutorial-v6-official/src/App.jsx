import React from "react"
import {Link, Outlet} from "react-router-dom"


class App extends React.Component {
  render() {
    return (
        <div className="app-box">
          123
          {/*<Link to="home">asd</Link>*/}
          {/* Link 标签作用是在url后面拼接一个地址 */}
          <nav>
            <Link to="/invoices">Invoices</Link>
            <br/>
            <Link to="/expenses">Expenses</Link>
          </nav>
          <Outlet/>
        </div>
    )
  }
}

export default App

/**
 *
 * Link 标签可以在url后面进行拼接，并且是在页面不重新加载的情况下修改url
 *
 *  Routes 是进行注册路由组件
 *  Outlet 作为某组件的子组件渲染出口  - 存在嵌套路由 就需要有 Outlet标签
 *
 *  子路由匹配时，将嵌套共享布局UI组件
 *
 */
