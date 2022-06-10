/**
 * 高阶组件 初探
 *  - 高阶组件是一个函数
 *    两个类似的组件和行为可以在外层包一层组件，让这个组件来完成数据的保存
 *  高阶组件是一种高级的设计模式
 *    一个函数返回一个组件中去渲染这个参数的组件
 */
import {fetchListData} from "./model"
import listHoc from "./components/listHoc"
import StudentList from "./components/StudentList"
import TeacherList from "./components/TeacherList"

const StudentListHoc = listHoc(StudentList, fetchListData)
const TeacherListHoc = listHoc(TeacherList, fetchListData)

class App extends React.Component {
  render() {
    return (
        <div className="app">
          <StudentListHoc field="student"/>
          <TeacherListHoc field="teacher"/>
        </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)
