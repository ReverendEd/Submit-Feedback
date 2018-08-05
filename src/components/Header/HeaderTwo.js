import React, { Component } from 'react';
import {connect} from 'react-redux'

class HeaderTwo extends Component {
  render() {
    return (
      <div>
        <h1>Feedback Results</h1>

        
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState)=>{
  return reduxState
}

export default connect(mapReduxStateToProps)(HeaderTwo);
