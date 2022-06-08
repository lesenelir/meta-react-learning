/**
 *  代码分割（动态加载组件） + 错误边界（识别可能出错的组件重新渲染UI）
 *
 *    错误边界组件 -包裹- React.Suspense内置组件 -包裹- React.lazy懒加载组件
 *
 */
import Loading from "./15-loading"
import ErrorBoundary from "./15-ErrorBoundary"

// 动态加载组件
const TestComponent = React.lazy(() => import('./15-module'))


class App extends React.Component {
  render() {
    return (
        <div>
          <p>123456</p>
          <ErrorBoundary>
            <React.Suspense fallback={<Loading/>}>
              <TestComponent/>
            </React.Suspense>
          </ErrorBoundary>
        </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)

