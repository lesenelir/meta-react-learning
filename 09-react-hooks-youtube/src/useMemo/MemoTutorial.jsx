import React, {useEffect, useMemo, useState} from 'react'
import axios from "axios";

function MemoTutorial(props) {
  // useMemo hook 可以提高性能，减少应用程序的大量计算的延迟
  // useMemo 应用场景： 当需要大规模数据库中的大量数据，可以考虑吧这个hook

  const [data, setData] = useState(null)
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
          setData(response.data)
        })
  }, [])


  // 该函数在重新渲染时会重新调用，则又会进行大量的计算
  const findLongestName = (comments) => {
    if (!comments) return null

    let longestName = ""
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name
      if (currentName.length > longestName.length) {
        longestName = currentName
      }
    }

    console.log("THIS WAS COMPUTED")

    return longestName
  }

  // useMemo 依赖项，当需要重新调用计算时，
  const getLongestName = useMemo(() => {
    return findLongestName(data)
  }, [toggle])


  return (
      <div>
        {/*{findLongestName(data)}*/}
        {getLongestName}
        <button
            onClick={() => {
              setToggle(!toggle)
            }}
        >Toggle</button>
        {toggle && <h1> toggle </h1>}
      </div>
  )
}

export default MemoTutorial
