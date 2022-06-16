import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Expenses from "./routes/Expenses";
import Invoices from "./routes/Invoices";
import Invoice from "./routes/invoice";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      {/*使用BrowserRouter包裹顶层的App组件*/}
      {/*BrowserRouter 可以使得app和url相连 - 使得React控制url */}
      <BrowserRouter>
        <Routes>
          {/*定义路由*/}
          <Route path="/" element={<App/>}>
            <Route path="expenses" element={<Expenses/>}/>
            <Route path="invoices" element={<Invoices/>}>
              {/*index Route 是在父组件被渲染，但是父组件其他的子组件没有被渲染的时候渲染*/}
              {/*index Route 作为父组件的默认渲染节点*/}
              <Route
                  index
                  element={
                    <main style={{ padding: "1rem" }}>
                      <p>Select an invoice</p>
                    </main>
                  }
              />
              <Route path=":invoiceId" element={<Invoice/>}/>
            </Route>
            {/*没有匹配的路由则加载这个*/}
            <Route
                path="*"
                element={
                  <main>
                    <h1>404</h1>
                  </main>
                }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
)

/**
 * Routes 注册路由
 *    通过url的改变去渲染不同的组件页面的内容
 *
 * 为了点击不让App组件消失，则可以使用嵌套路由
 * 由于大多数的UI布局都是一种嵌套布局，所以可以使用嵌套路由的形式
 *
 */
