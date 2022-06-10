/**
 * 高阶组件 初探
 *    两个类似的组件和行为可以在外层包一层组件，让这个组件来完成数据的保存
 *
 */
import {fetchListData} from "./model"
import StudentList from "./components/StudentList"
import TeacherList from "./components/TeacherList"


class App extends React.Component {
  // App获取数据
  // 把获取的数据 暴露在与该组件无关的地方，
  // 所以要抽离 = 定义一个高阶组件，让高阶组件返回一个新的类组件，让新的类组件去处理请求数据
  state = {
    studentList: [],
    teacherList: []
  }

  async componentDidMount() {
    // fetchListData('student').then((res) => {
    //   console.log(res)
    // }).catch((err) => {
    //   console.log(err)
    // })
    const studentData = await fetchListData('student')
    const teacherData = await fetchListData('teacher')

    this.setState({
      studentList: studentData.data,
      teacherList: teacherData.data
    })
  }

  removeStudent = (id) => {
    this.setState({
      studentList: this.state.studentList.filter(item => item.id !== id)
    })
  }

  likeTeacher = (id) => {
    this.setState({
      teacherList: this.state.teacherList.map(item => {
        if (item.id === id) {
          item.like += 1
        }
        return item
      })
    })
  }

  render() {
    return (
        <div className="app">
          <StudentList
              data={this.state.studentList}
              removeStudent={this.removeStudent}
          />
          <TeacherList
              data={this.state.teacherList}
              likeTeacher={this.likeTeacher}
          />
        </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)
