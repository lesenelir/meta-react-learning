import React from "react"
import {getStorage, setStorage} from "../utils/storage"


class ClassComponent extends React.Component {

  state = {
    inputValue: '',
    list: []
  }

  componentDidMount() {
    this.setState({
      list: getStorage() || []
    })
  }

  setInputValue = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  addItem = () => {
    const {inputValue} = this.state
    this.setState({
      list: setStorage({
        id: new Date().getTime(),
        text: inputValue
      })
    })
  }

  removeItem = (id) => {
    this.setState({
      list: setStorage(null, id)
    })
  }

  render() {
    const {list} = this.state

    return (
        <div className={"wrapper"}>
          <div className={"input-box"}>
            <input
                type="text"
                placeholder={"请输入数据"}
                onChange={this.setInputValue}
            />
            <button onClick={this.addItem}>增加</button>
          </div>
          <div className={"list-box"}>
            <ul className={"list"}>
              {
                list && list.map((item, index) => {
                  return (
                      <li key={index}>
                        <span>{item.text}</span>
                        <button onClick={this.removeItem}>删除</button>
                      </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
    )
  }
}

export default ClassComponent
