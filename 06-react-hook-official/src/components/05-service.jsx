import React from "react"

// 高阶组件
function widthInfo(COM) {
  return class extends React.Component {
    state = {
      info: []
    }

    componentDidMount() {
      ;(async () => {
        let res = await fetch('http://jsonplaceholder.typicode.com/users').then(res => res.json())
        this.setState({
          info: res
        })
      })()
    }

    itemTpl = (item) => {
      let tpl = ''
      for (const [key, value] of Object.entries(item)) {
        if (typeof value === 'object') {
          tpl += `<ul><li>${key}: ${this.itemTpl(value)}</li></ul>`
        } else {
          tpl += `<li>${key}: ${value}</li>`
        }
      }
      return tpl
    }

    render() {
      return (
          // 渲染传入的组件
          <COM {...this.state} />
      )
    }
  }
}

export default widthInfo
