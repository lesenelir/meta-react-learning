import React from 'react';
import {NavLink, Routes, Route} from "react-router-dom";
import About from "./views/About";
import Home from "./views/Home";

function App(props) {
  return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
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
                <Routes>
                  {/*Routes 匹配到组件后，还可以继续进行匹配操作*/}
                  <Route path="/about" element={<About/>}/>
                  <Route path="/home" element={<Home/>}/>
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
