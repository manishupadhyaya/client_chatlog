import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './components/Home'
import GetChatLogs from './components/GetChatLogs'
import AddMessage from './components/AddMessage'
import ClearChat from './components/ClearChat'
import ClearMessage from './components/ClearMessage'

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/getChat" exact component={GetChatLogs} />
        <Route path='/addMessage' exact component={AddMessage} />
        <Route path="/clearChat" exact component={ClearChat} />
        <Route path="/clearMessage" exact component={ClearMessage} />
      </Switch>
    )
  }
}

