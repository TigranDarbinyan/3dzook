import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./Home/Home"
import About from "./About/About"

function App() {
  return <Router>
    <div className='app'>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
      </Switch>
    </div>
  </Router>
}

export default App;
