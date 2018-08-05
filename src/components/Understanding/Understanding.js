import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../App.css';
import Select from '../Select/Select'

class Understanding extends Component {

  handleValueChange = (value)=>{
    let pAyload = {
        name: 'understanding',
        value: value
    }
    this.props.getValue(pAyload)
  }

  render() {
    return (
      <div className="card">
        <div className="text">
          <h2 className="info" >Understanding</h2>
        </div>
        <div className="container">
        <h3>How well do you understand the material?</h3>
        <span><p>Not Well</p><Select handleValueChange={this.handleValueChange}/><p>Well</p></span>
        </div>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState)=>{
  return reduxState
}

export default connect(mapReduxStateToProps)(Understanding);