import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import News from "./News/News";
import Message from "./Message/Message";
import MyNavLink from "../../components/MyNavLink/MyNavLink";

class Home extends Component {
  render() {
    return (
        <div>
          <h3>我是Home内容</h3>
          <div>
            <ul className="nav nav-tabs">
              <li>
                {/*<a className="list-group-item" href="./home-news.html">News</a>*/}
                <MyNavLink to="/home/news">News</MyNavLink>
              </li>
              <li>
                {/*<a className="list-group-item" href="./home-message.html">Message</a>*/}
                <MyNavLink to="/home/message">Message</MyNavLink>
              </li>
            </ul>
            {/* 注册路由 */}
            <Route path="/home/news" component={News}/>
            <Route path="/home/message" component={Message}/>
          </div>
        </div>
    );
  }
}

export default Home;
