import React from 'react';
// 引入antd 组件库
import {Button, DatePicker} from "antd";
import {WechatOutlined} from '@ant-design/icons'
import 'antd/dist/antd.min.css'

function App(props) {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
      <div>
        App
        <Button type="primary">Primary Button</Button>
        <WechatOutlined />
        <DatePicker onChange={onChange} />
      </div>
  );
}

export default App;
