import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../App.css';
import Select from '../Select/Select'

class Feelings extends Component {

    handleValueChange = (value)=>{
        let pAyload = {
            name: 'feeling',
            value: value
        }
        this.props.getValue(pAyload)
    }

  render() {
    return (
        <div className="card">
        <div className="text">
          <h2 className="info" >Feelings</h2>
        </div>
        <div className="container">
            <h3>How are you feeling today?</h3>
            <span><p>Bad</p><Select handleValueChange={this.handleValueChange}/><p>Good</p></span>
        </div>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState)=>{
  return reduxState
}

export default connect(mapReduxStateToProps)(Feelings);