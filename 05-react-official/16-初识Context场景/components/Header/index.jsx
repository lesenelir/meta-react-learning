import './index.css'

// 导入context容器
import {ThemeContext} from "../../context"

class Header extends React.Component{
  render() {
    return (
        <ThemeContext.Consumer>
          {/*context容器的接受方*/}
          {
            // 箭头函数内的参数 是该contextProvider提供方传递的参数
            (theme) => {
              console.log(theme)
              return <header className={`header ${theme}`}>{this.props.children}</header>
            }
          }
        </ThemeContext.Consumer>
    )
  }

}

export default Header
