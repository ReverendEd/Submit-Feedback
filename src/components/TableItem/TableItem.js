import React, { Component } from 'react';
import {connect} from 'react-redux';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import AlertDialogue from '../AlertDialogue/AlertDialogue';

class TableItem extends Component {
    constructor(props){
        super(props)
    }

    deleteThisFeedback = (id)=>{
        console.log(id);

        axios({
            url: `/feedback/${id}`,
            method: 'DELETE'
        })
        .then((response)=>{
            console.log('feedback was deleted');
            this.props.getFeedbackList()
        })
        .catch((error)=>{
            console.log(error);
        })
    }

  render() {
    
    let feedbackItemArray = this.props.feedbackListReducer.map((feedback, index)=>{
        return(
            <TableRow key={index}>
                <TableCell>{feedback.feeling}</TableCell>
                <TableCell>{feedback.understanding}</TableCell>
                <TableCell>{feedback.support}</TableCell>
                <TableCell>{feedback.comments}</TableCell>
                <TableCell><AlertDialogue deleteFeedback={this.deleteThisFeedback} id={feedback.id}/></TableCell>
            </TableRow>
        )
    })

    return (
      feedbackItemArray
    );
  }
}

const mapReduxStateToProps = (reduxState)=>{
  return reduxState
}

export default connect(mapReduxStateToProps)(TableItem);
