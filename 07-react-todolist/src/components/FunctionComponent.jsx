/**
 *  hook 钩子函数 实现某个功能
 *
 *  副作用： 与外部进行交互
 *  componentsDidMount
 *  ajax请求
 *  操作DOM
 *  localStorage
 *
 *  useEffect hook的环境执行副作用
 *
 */
import React, {useEffect, useState} from "react"

import {getStorage, setStorage} from "../utils/storage"

function FunctionComponent() {
  const [list, setList] = useState([]),
        [inputValue, setInputValue] = useState('')


  useEffect(() => {
    setList(getStorage() || [])
  }, [])

  function addItem() {
    setList(setStorage({
      id: new Date().getTime(),
      text: inputValue
    }))
  }

  function removeItem(id) {
    setList(setStorage(null, id))
  }

  return (
      <div className={"wrapper"}>
        <div className={"input-box"}>
          {/*函数组件绑定事件要传入参数可以通过外层事件回调绑定一个函数*/}
          <input
              type="text"
              placeholder={"请输入数据"}
              onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={addItem}>增加</button>
        </div>
        <div className={"list-box"}>
          <ul className={"list"}>
            {
              list && list.map((item, index) => {
                return (
                    <li key={index}>
                      <span>{item.text}</span>
                      <button onClick={() => removeItem(item.id)}>删除</button>
                    </li>
                )
              })
            }
          </ul>
        </div>
      </div>
  )
}

export default FunctionComponent
