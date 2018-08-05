import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../App.css';
import Input from '@material-ui/core/Input'


class Comments extends Component {

    handleValueChange = (event)=>{
        let pAyload = {
            name: 'comments',
            value: event.target.value
        }
        this.props.getValue(pAyload)
    }

  render() {
    return (
        <div className="card">
        <div className="text">
          <h2 className="info" >Comments</h2>
        </div>
        <div className="container">
        <h3>Additional Comments</h3>
        <Input  placeholder="type your comments here" onChange={this.handleValueChange}/>
        </div>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState)=>{
  return reduxState
}

export default connect(mapReduxStateToProps)(Comments);