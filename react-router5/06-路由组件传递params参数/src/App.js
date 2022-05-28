import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom'
// 路由组件
import Home from "./views/Home/Home"
import About from "./views/About/About"
// 一般组件
import Header from "./components/Header/Header"
import MyNavLink from "./components/MyNavLink/MyNavLink"

class App extends Component {
  render() {
    return (
        <div>
          <div>
            <div className="row">
              <div className="col-xs-offset-2 col-xs-8">
                <div className="page-header">
                  <Header a={{k: 1}}/>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-2 col-xs-offset-2">
                <div className="list-group">
                  {/* 原生HTML中通过a标签跳转页面 */}
                  {/*<a className="list-group-item" href="./about.html">About</a>*/}
                  {/*<a className="list-group-item active" href="./home.html">Home</a>*/}

                  {/* 在react中靠路由链接实现切换组件 - 编写路由链接 */}
                  {/*<NavLink activeClassName="active" className="list-group-item" to="/about">About</NavLink>*/}
                  {/*<NavLink activeClassName="active" className="list-group-item" to="/home">Home</NavLink>*/}

                  {/* 封装NavLink */}
                  <MyNavLink to="/about">About</MyNavLink>
                  <MyNavLink to="/home">Home</MyNavLink>

                </div>
              </div>
              <div className="col-xs-6">
                <div className="panel">
                  <div className="panel-body">
                    {/* 注册路由 */}
                    <Route path="/about" component={About}/>
                    <Route path="/home" component={Home}/>
                    {/* 重定向: 没有匹配的时候重定向页面 */}
                    <Redirect to="/about"/>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
    );
  }
}

export default App;
