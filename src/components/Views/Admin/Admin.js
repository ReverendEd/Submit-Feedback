import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderTwo from '../../Header/HeaderTwo';
import Button from '@material-ui/core/Button'
import axios from 'axios';
import FeedbackTable from '../../FeedbackTable/FeedbackTable';


class Admin extends Component {

    getFeedbackList = ()=>{
        axios({
            url: '/feedback',
            method: 'GET'
        })
        .then((response)=>{
            console.log(response.data);
            this.props.dispatch({type: 'SET_LIST', payload: response.data})
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    componentDidMount() {
        console.log('component mounted');
        this.getFeedbackList();
    }

    render() {
        return (
            <div>
                <HeaderTwo />
                <FeedbackTable getFeedbackList={this.getFeedbackList}/>

            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(Admin);
