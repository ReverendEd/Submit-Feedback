import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../Header/Header';
import Button from '@material-ui/core/Button';
import Feelings from '../../Feelings/Feelings';

class PageOne extends Component {

    toDispatch = '';

    handleNext = () => {
        this.props.history.push('/pagetwo')
        this.props.dispatch({type: 'CHANGE_VALUES', payload: this.toDispatch})
    }

    getValue = (value)=>{
        this.toDispatch = value
    }

    render() {
        return (
            <div>
                <Header />
                <Feelings getValue={this.getValue}/>
                <Button variant="contained"
                    onClick={this.handleNext}>Next
                </Button>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(PageOne);
