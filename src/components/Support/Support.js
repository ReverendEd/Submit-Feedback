import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import Select from '../Select/Select'

class Support extends Component {

  handleValueChange = (value)=>{
    let pAyload = {
        name: 'support',
        value: value
    }
    this.props.getValue(pAyload)
  }

  render() {
    return (
      <div className="card">
        <div className="text">
          <h2 className="info" >Support</h2>
        </div>
        <div className="container">
        <h3>How supported do you feel?</h3>
        <span><p>Not Well Supported</p><Select handleValueChange={this.handleValueChange}/><p>Very Supported</p></span>
        </div>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState
}

export default connect(mapReduxStateToProps)(Support);