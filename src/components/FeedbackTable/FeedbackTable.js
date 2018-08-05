import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableItem from '../TableItem/TableItem';

class FeedbackTable extends Component {



  render() {
    return (
      <div>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Feeling</TableCell>
                    <TableCell>Comprehension</TableCell>
                    <TableCell>Support</TableCell>
                    <TableCell>Comments</TableCell>
                    <TableCell>Delete</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableItem getFeedbackList={this.props.getFeedbackList}/>
            </TableBody>
        </Table>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState)=>{
  return reduxState
}

export default connect(mapReduxStateToProps)(FeedbackTable);