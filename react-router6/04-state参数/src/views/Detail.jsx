import React from "react";
// import {useParams} from "react-router-dom";
// import {useSearchParams} from "react-router-dom";
import {useLocation} from "react-router-dom";

export default function Detail() {
  // params 参数
  // console.log(useParams())
  // const {id, title} = useParams()

  // search 参数
  // console.log(useSearchParams())
  // const [search] = useSearchParams()
  // console.log(search) // search 数据是一个对象
  // const [id, title] = [search.get('id'), search.get('title')]

  // state 参数
  // console.log(useLocation())
  const {state} = useLocation()
  console.log(state)

  return (
      <ul>
        {/*<li>{id}</li>*/}
        {/*<li>{title}</li>*/}
        <li>{state.id}</li>
        <li>{state.title}</li>
      </ul>
  )
}
