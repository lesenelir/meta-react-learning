// 错误边界

class ErrorBoundary extends React.Component {

  state = {
    hasError: false
  }

  static getDerivedStateFromError(err) {
    return {
      hasError: true
    }
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
          <h1>this is a errorUI component</h1>
      )
    } else {
      return this.props.children // 返回子组件
    }
  }

}

export default ErrorBoundary
