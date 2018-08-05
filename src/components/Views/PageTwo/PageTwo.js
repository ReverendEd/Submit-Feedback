import React, { Component } from 'react';
import { connect } from 'react-redux'
import Header from '../../Header/Header';
import Button from '@material-ui/core/Button'
import Understanding from '../../Understanding/Understanding'

class PageTwo extends Component {

    toDispatch = '';

    handleNext = () => {
        this.props.history.push('/pagethree')
        this.props.dispatch({type: 'CHANGE_VALUES', payload: this.toDispatch})
    }

    getValue = (value)=>{
        this.toDispatch = value
    }

    render() {
        return (
            <div>
                <Header />
                <Understanding getValue={this.getValue}/>
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

export default connect(mapReduxStateToProps)(PageTwo);
