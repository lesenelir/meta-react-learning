// 引入context的某一个容器
import {ThemeContext} from "../../context"

class NavItem extends React.Component {

  render() {
    const {index, item} = this.props

    return (
        <ThemeContext.Consumer>
          {
            // context接受方中的容器内返回一个箭头函数，该函数参数是context提供者的value
            (theme) => {
              return <div className={!index ? `item active-${theme}`: 'item'}>{item}</div>
            }
          }
        </ThemeContext.Consumer>
    )
  }

}

export default NavItem
