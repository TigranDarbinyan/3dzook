import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./Home/Home"
import About from "./About/About"
import Media from "./Media/Media"
import Policy from "./Policy/Policy"
import Contacts from "./Contacts/Contacts"
import TermsOfUse from "./TermsOfUse/TermsOfUse"
import Subscription from "./Subscription/Subscription"

function App() {
  console.log('V 1.1');

  return <Router>
    <div className='app'>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/terms-of-use">
          <TermsOfUse/>
        </Route>
        <Route path="/subscription">
          <Subscription/>
        </Route>
        <Route path="/media">
          <Media/>
        </Route>
        <Route path="/policy">
          <Policy/>
        </Route>
        <Route path="/contacts">
          <Contacts/>
        </Route>
      </Switch>
    </div>
  </Router>
}

export default App;
