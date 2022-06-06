import React from "react";
import {useParams} from "react-router-dom";

export default function Detail() {
  // console.log(useParams())
  const {id, title} = useParams()

  return (
      <ul>
        <li>{id}</li>
        <li>{title}</li>
      </ul>
  )
}
