import React, {useState} from 'react';
import {Link, Outlet} from "react-router-dom";

function Message(props) {
  const [messages] = useState([
    {id: '01', title: '消息1'},
    {id: '02', title: '消息2'},
    {id: '03', title: '消息3'}
  ])

  return (
      <div>
        <ul>
          {
            messages.map((m) => {
              return (
                  <li key={m.id}>
                    {/*<Link to="detail">{m.title}</Link>*/}

                    {/* params 参数 */}
                    {/*<Link to={`detail/${m.id}/${m.title}`}>{m.title}</Link>*/}

                    {/* search 参数 */}
                    <Link to={`detail/?id=${m.id}&title=${m.title}`}>{m.title}</Link>

                  </li>
              )
            })
          }
        </ul>
        <hr/>
        {/* 指定路由组件的展示位置 */}
        <Outlet/>
      </div>
  );
}

export default Message;
