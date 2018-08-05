import React, { Component } from 'react';
import axios from 'axios';
import {HashRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import PageOne from '../Views/PageOne/PageOne'
import PageTwo from '../Views/PageTwo/PageTwo'
import PageThree from '../Views/PageThree/PageThree'
import PageFour from '../Views/PageFour/PageFour'
import PageFive from '../Views/PageFive/PageFive'
import Admin from '../Views/Admin/Admin'
import '../App.css'
import {connect} from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Redirect exact from="/" to="/pageone" />
              <Route path="/pageone" component={PageOne} />
              <Route path="/pagetwo" component={PageTwo} />
              <Route path="/pagethree" component={PageThree} />
              <Route path="/pagefour" component={PageFour} />
              <Route path="/pagefive" component={PageFive} />
              <Route path="/admin" component={Admin} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState)=>{
  return reduxState
}

export default connect(mapReduxStateToProps)(App);
