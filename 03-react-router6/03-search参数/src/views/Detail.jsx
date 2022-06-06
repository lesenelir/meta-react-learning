import React from "react";
// import {useParams} from "react-router-dom";
import {useSearchParams} from "react-router-dom";

export default function Detail() {
  // params 参数
  // console.log(useParams())
  // const {id, title} = useParams()

  // search 参数
  console.log(useSearchParams())
  const [search] = useSearchParams()
  console.log(search) // search 数据是一个对象
  const [id, title] = [search.get('id'), search.get('title')]

  return (
      <ul>
        <li>{id}</li>
        <li>{title}</li>
      </ul>
  )
}
