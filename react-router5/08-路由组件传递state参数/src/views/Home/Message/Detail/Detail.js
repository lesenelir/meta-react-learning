import React, {Component} from 'react';
// import qs from 'query-string'

const data = [
  {id: '01', content: '消息1内容'},
  {id: '02', content: '消息2内容'},
  {id: '03', content: '消息3内容'}
]

class Detail extends Component {
  render() {
    // 接收params参数
    // const {id, title} = this.props.match.params

    // 接收search参数
    // console.log(this.props.location.search)
    // const {search} = this.props.location
    // const {id, title} = qs.parse(search.slice(1))

    // 接收state参数
    console.log(this.props.location.state)
    const {id, title} = this.props.location.state || {}


    const findResult = data.find((detailObj) => {
      return detailObj.id === id
    }) || {}

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
