// React.lazy 方法 - 动态加载组件方法  （只会在组件首次渲染时进行自动导入组件的包）
// React.Suspense 组件【内置组件】，挂载到React

/**
 *  React.lazy 是React提供的懒（动态）加载组件的方法 React.lazy() - import 的懒加载模式
 *    参数只有一个：函数 -> 参数接收【动态导入】组件 import()  （必须支持promise）
 *    减少打包体积、对初次渲染不适应的组件延迟加载
 *    React.lazy 依赖 Suspense【内置组件】，包裹lazy组件，可以在等待lazy组件时做到优雅降级（Loading组件）
 */

import Loading from "./13-loading"

/**
 * lazy 接收一个动态导入组件的函数
 * 该函数返回一个promise
 * Promise 会 resolve一个默认导出的React组件 export default
 *
 * @type {React.LazyExoticComponent<React.ComponentType<any>>}
 */

// 使用之前： import Main from './13-main.jsx'
const MainComponent = React.lazy(() => import('./13-main.jsx'))

class App extends React.Component {
  render() {
    console.log(MainComponent)
    return (
        <div>
          {/*fallback属性：接受任何在组件加载过程中想要展示的React组件元素*/}
          <React.Suspense fallback={<Loading/>}>
            <div>
              {/*通过React.lazy的懒加载组件的方法外部需要内置组件React.Suspense包裹渲染lazy组件*/}
              <MainComponent/>
            </div>
          </React.Suspense>
        </div>
    );
  }

}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)

