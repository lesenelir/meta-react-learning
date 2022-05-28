import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class MyNavLink extends Component {
  render() {
    console.log(this.props)
    return (
        <div>
          {/*<NavLink {...this.props}>{this.props.children}</NavLink>*/}
          <NavLink activeClassName="active" className="list-group-item" {...this.props} />
        </div>
    );
  }
}

export default MyNavLink;

