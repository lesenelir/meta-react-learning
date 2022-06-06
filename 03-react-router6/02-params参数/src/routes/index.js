import React from "react";
import {Navigate} from "react-router-dom";
import About from "../views/About";
import Home from "../views/Home";
import Message from "../views/Message";
import News from "../views/News";
import Detail from "../views/Detail";


export default [
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/home',
    element: <Home/>,
    children: [
      {
        path: 'news',
        element: <News/>
      },
      {
        path: 'message',
        element: <Message/>,
        children: [
          {
            path: 'detail/:id/:title',
            element: <Detail/>
          }
        ]
      }
    ]
  },
  {
    path: '/',
    element: <Navigate to="/about"/>
  }
]

