import React, {Component} from 'react';

const data = [
  {id: '01', content: '消息1内容'},
  {id: '02', content: '消息2内容'},
  {id: '03', content: '消息3内容'}
]

class Detail extends Component {
  render() {
    // 接收params参数
    const {id, title} = this.props.match.params
    const findResult = data.find((detailObj) => {
      return detailObj.id === id
    })

    return (
        <div>
          <hr/>
          <ul>
            <li>Id:{id} </li>
            <li>Title:{title} </li>
            <li>Content: {findResult.content}</li>
          </ul>
        </div>
    );
  }
}

export default Detail;
