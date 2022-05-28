import React from 'react';
import {useNavigate} from 'react-router-dom'

function Header(props) {
  // 编程式路由导航
  const navigate = useNavigate()

  function back() {
    navigate(-1)
  }

  function forward() {
    navigate(1)
  }

  return (
      <div className="col-xs-offset-2 col-xs-8">
        <div className="page-header">
          <h3>Header React Router Demo</h3>
          <button onClick={back}> ⬅️后退</button>
          <button onClick={forward}> ➡️前进</button>
        </div>
      </div>
  );
}

export default Header;
