import React from "react"
import widthInfo from "./05-service"


class List extends React.Component {
  render() {
    let {info, render} = this.props
    return (
        <ul
            dangerouslySetInnerHTML={{
              __html: info.map(item => render(item))
            }}
        >
        </ul>
    )
  }
}

class widthInfoApp extends React.Component{

  itemTpl = (item) => {
    // let tpl = ''
    // for (const [key, value] of Object.entries(item)) {
    //   if (typeof value === 'object') {
    //     tpl += `<ul><li>${key}: ${this.itemTpl(value)}</li></ul>`
    //   } else {
    //     tpl += `<li>${key}: ${value}</li>`
    //   }
    // }
    // return tpl
    return Object.entries(item).reduce((pre, [key, value]) => {
      if (typeof value === 'object') {
        pre += `<ul><li>${key}: ${this.itemTpl(value)}</li></ul>`
      } else {
        pre += `<li>${key}: ${value}</li>`
      }
      return pre
    }, '')

  }

  render() {
    const {info} = this.props
    return (
        <div>
          <List {...this.props} render={this.itemTpl} />
        </div>
    )
  }

}

const App = widthInfo(widthInfoApp)

export default App
