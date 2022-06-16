import React from "react";
import {Link, Route, Routes} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
        <div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        </div>
    )
  }
}

class Home extends React.Component {
  render() {
    return (
        <>
          <main>
            <h1>Home Page</h1>
          </main>
          <nav>
            <Link to="/about">About</Link>
          </nav>
        </>
    )
  }
}

class About extends React.Component {
  render() {
    return (
        <>
          <main>
            <h1>About Page</h1>
          </main>
          <nav>
            <Link to="/">Home</Link>
          </nav>
        </>
    )
  }
}

export default App
