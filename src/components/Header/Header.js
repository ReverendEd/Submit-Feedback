import React, { Component } from 'react';
import {connect} from 'react-redux'

class Header extends Component {
  render() {
    return (
      <div>
        <h1>Feedback!</h1>

        
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState)=>{
  return reduxState
}

export default connect(mapReduxStateToProps)(Header);
