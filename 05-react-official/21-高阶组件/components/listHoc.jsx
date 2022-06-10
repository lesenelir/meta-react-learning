/**
 * HOC High Order Component
 * HOC 不是React提供的API ，是一种高级的设计模式【横向切割】
 * HOC 是一个函数，接受一个组件参数，返回一个新的组件
 * 普通组件返回一个UI，HOC返回一个新组件
 * HOC不能修改参数组件，只能传入组件所需要的props
 * HOC是一个没有副作用的纯函数
 *
 * HOC参数除了必须填写被包裹的组件参数之外，其余参数根据需求增加
 * HOC 不关心数据如何使用，包裹组件（参数）不关心数据从哪里来
 * HOC 和 包裹组件 直接唯一的契合点就是 props
 *
 * 包裹组件致力于渲染
 * 高阶组件致力于包裹组件的逻辑、数据、数据请求
 */

// 第一个参数是需要包裹的参数
function listHoc(WrapperComponent, fetchListData) {
  return class extends React.Component {
    state = {
      listData: []
    }

    removeStudent = (id) => {
      this.setState({
        listData: this.state.listData.filter(item => item.id !== id)
      })
    }

    likeTeacher = (id) => {
      this.setState({
        listData: this.state.listData.map(item => {
          if (item.id === id) {
            item.like += 1
          }
          return item
        })
      })
    }

    async componentDidMount() {
      const result = await fetchListData(this.props.field)
      this.setState({
        listData: result.data
      })
    }

    render() {
      return (
          <>
            {
              this.props.field === 'student'
              ?
              <WrapperComponent
                  data={this.state.listData}
                  removeStudent={this.removeStudent}
              />
              :
              <WrapperComponent
                data={this.state.listData}
                likeTeacher={this.likeTeacher}
              />
            }
          </>
      )
    }
  }
}

export default listHoc

/**
 * Note：
 *  HOC组件关注逻辑和状态，普通组件只关注视图的渲染
 *
 *  对参数组件本身的逻辑状态与视图的横向切割
 *  让HOC完成逻辑和状态的管理
 *  让参数组件来完成视图的渲染
 *
 *  让HOC将数据与逻辑传递到参数组件中，从而完成关注点分离
 *
 *
 */

