import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../Header/Header';
import Button from '@material-ui/core/Button'

class PageFive extends Component {

    handleNext = () => {
        this.props.history.push('/pageone')
    }

    render() {
        return (
            <div>
                <Header />
                <div>
                    <div className="text">
                        <h2 className="info" >Thank you for your Feedback!</h2>
                    </div>
                </div>
                <Button variant="contained"
                    onClick={this.handleNext}>New Feedback?
                </Button>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(PageFive);
