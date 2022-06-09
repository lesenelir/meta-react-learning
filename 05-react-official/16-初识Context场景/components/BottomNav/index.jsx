import NavItem from "./NavItem"
import './index.css'

class BottomNav extends React.Component {
  render() {
    return (
        <div className="bottom-nav">
          {
            this.props.data.map((item, index) => {
              return (
                  <NavItem
                      item={item}
                      index={index}
                      key={index}
                  />
              )
            })
          }
        </div>
    )
  }

}

export default BottomNav
