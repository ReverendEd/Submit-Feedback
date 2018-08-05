import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../Header/Header';
import Button from '@material-ui/core/Button';
import Comments from '../../Comments/Comments'
import axios from 'axios'

class PageFour extends Component {

    toDispatch = '';

    handleSubmit = () => {
        this.props.history.push('/pagefive')
        this.props.dispatch({type: 'CHANGE_VALUES', payload: this.toDispatch})
        axios({
            url: '/feedback',
            method: 'POST',
            data: this.props.feedbackReducer
        })
        .then((response)=>{
            console.log('worked',response);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    getValue = (value)=>{
        this.toDispatch = value
    }

    render() {
        return (
            <div>
                <Header />
                <Comments getValue={this.getValue}/>
                <Button variant="contained"
                    onClick={this.handleSubmit}>SUBMIT
                </Button>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(PageFour);
