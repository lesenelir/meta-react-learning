  /**
 * 高阶组件 初探
 *  - 高阶组件是一个函数
 *    两个类似的组件和行为可以在外层包一层组件，让这个组件来完成数据的保存
 *  高阶组件是一种高级的设计模式
 *    一个函数返回一个组件中去渲染这个参数的组件
 *
   *
   *    高阶组件(HOC)是一个函数，该函数的参数是一个组件，返回值也是一个组件
   *    高阶组件作用：
   *      - 将组件转换为另一个组件
   *
   *
   *    总结：
   *      - 高阶组件是对组件的一种抽象，把一些雷同、能统一管理的东西进行抽象管理
   *      - 使用包裹组件的时，把要用的数据或事件处理函数传递给包裹组件
   *      - 包裹组件致力于视图的渲染
   *      - 包裹组件就是参数组件
   *
   *    React高阶组件特点
   *    1. HOC不是React提供的API，是一种高级设计模式
   *    2. HOC是一个函数，参数是一个组件，返回也是一个组件
   *    3. 普通组件返回的是UI，HOC返回的是一个新组件
   *    4. HOC不能修改自身函数参数的组件，只能通过传入组件所需要的props
   *    5. HOC是一个没有副作用的纯函数
   *    6. HOC函数的参数除了必须包裹的一个组件参数以外，其余参数根据需求增加
   *    8. HOC不关心数据如何使用（只负责请求处理数据），被包裹组件不关心数据从哪里来（只负责渲染）
   *    9. HOC和被包裹的组件唯一的契合点就是props
   *
   *
 */

import {fetchListData} from "./model"
import listHoc from "./components/listHoc"
import StudentList from "./components/StudentList"
import TeacherList from "./components/TeacherList"

// 高阶组件
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
