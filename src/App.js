import React, {useEffect, useState} from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./Home/Home"
import About from "./About/About"
import Media from "./Media/Media"
import Policy from "./Policy/Policy"
import Contacts from "./Contacts/Contacts"
import TermsOfUse from "./TermsOfUse/TermsOfUse"
import Subscription from "./Subscription/Subscription"
import {SETTINGS_LIST, SETTINGS_LIST_EVENT} from "./Services/RequestData";
import RequestManager from "./Services/RequestManager";
import './App.scss'

function App() {
  const [webSetting, setWebSettings] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    sendSettingsRequest();
  }, []);

  const sendSettingsRequest = () => {
    window.addEventListener(SETTINGS_LIST_EVENT, data => initSettingsList(data['detail']), {once: true});
    RequestManager.getInstance().sendRequest(SETTINGS_LIST, 'GET', '/settings', {});
  }

  const initSettingsList = response => {
    const settingsList = response['data'];
    const data = [];

    if (settingsList) {
      Object.keys(settingsList).map(key => {
        if (key !== 'report_texts' && key !== 'text_settings_key') {
          data.push({title: key, content: settingsList[key]});
        }
      })
    }

    setWebSettings([...data]);
    setDataLoaded(true);
  }

  return dataLoaded
    ? <Router>
      <div className='app'>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About data={webSetting.filter(item => item.title === "page_content_about_us")}/>
          </Route>
          <Route path="/terms-of-use">
            <TermsOfUse data={webSetting.filter(item => item.title === "page_content_terms_of_use")}/>
          </Route>
          <Route path="/subscription">
            <Subscription data={webSetting.filter(item => item.title === "page_content_subscription")}/>
          </Route>
          <Route path="/media">
            <Media data={webSetting.filter(item => item.title === "page_content_about_media")}/>
          </Route>
          <Route path="/policy">
            <Policy data={webSetting.filter(item => item.title === "page_content_privacy_policy")}/>
          </Route>
          <Route path="/contacts">
            <Contacts/>
          </Route>
        </Switch>
      </div>
    </Router>
    : <div className='website-loader'>Loading...</div>
}

export default App;
