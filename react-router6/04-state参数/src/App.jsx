import React from 'react';
import {NavLink, useRoutes} from "react-router-dom";
import routes from "./routes";
import Header from "./components/Header";

function App(props) {
  // 根据路由表生成对应的路由规则
  const elements = useRoutes(routes)

  return (
      <div>
        <div className="row">
          {/*  */}
          <Header/>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/*<a className="list-group-item active" href="./about.html">About</a>*/}
              {/*<a className="list-group-item" href="./home.html">Home</a>*/}
              {/* 路由链接 */}
              <NavLink className="list-group-item" to="/about">About</NavLink>
              <NavLink className="list-group-item" to="/home">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                {/*<Routes>*/}
                {/*  /!*Routes 匹配到组件后，还可以继续进行匹配操作*!/*/}
                {/*  <Route path="/about" element={<About/>}/>*/}
                {/*  <Route path="/home" element={<Home/>}/>*/}
                {/*  <Route path="/" element={<Navigate to="/about/"/>}/>*/}
                {/*</Routes>*/}

                {/* 使用路由表来注册路由 */}
                {elements}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
