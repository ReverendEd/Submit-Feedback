import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

const styles = {
    root: {
        color: green[600],
        '&$checked': {
            color: green[500],
        },
    },
    checked: {},
    size: {
        width: 40,
        height: 40,
    },
    sizeIcon: {
        fontSize: 20,
    },
};

class RadioButtons extends React.Component {
    state = {
        selectedValue: 'a',
    };

    handleChange = event => {
        this.setState({ selectedValue: event.target.value });
        this.props.handleValueChange(event.target.value);
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Radio
                    checked={this.state.selectedValue === '1'}
                    onChange={this.handleChange}
                    value="1"
                    color="default"
                    name="radio-button-demo"
                    aria-label="E"
                    className={classes.size}
                    icon={<RadioButtonUncheckedIcon className={classes.sizeIcon} />}
                    checkedIcon={<RadioButtonCheckedIcon className={classes.sizeIcon} />}
                />
                <Radio
                    checked={this.state.selectedValue === '2'}
                    onChange={this.handleChange}
                    value="2"
                    color="default"
                    name="radio-button-demo"
                    aria-label="E"
                    className={classes.size}
                    icon={<RadioButtonUncheckedIcon className={classes.sizeIcon} />}
                    checkedIcon={<RadioButtonCheckedIcon className={classes.sizeIcon} />}
                />
                <Radio
                    checked={this.state.selectedValue === '3'}
                    onChange={this.handleChange}
                    value="3"
                    color="default"
                    name="radio-button-demo"
                    aria-label="E"
                    className={classes.size}
                    icon={<RadioButtonUncheckedIcon className={classes.sizeIcon} />}
                    checkedIcon={<RadioButtonCheckedIcon className={classes.sizeIcon} />}
                />
                <Radio
                    checked={this.state.selectedValue === '4'}
                    onChange={this.handleChange}
                    value="4"
                    color="default"
                    name="radio-button-demo"
                    aria-label="E"
                    className={classes.size}
                    icon={<RadioButtonUncheckedIcon className={classes.sizeIcon} />}
                    checkedIcon={<RadioButtonCheckedIcon className={classes.sizeIcon} />}
                />
                <Radio
                    checked={this.state.selectedValue === '5'}
                    onChange={this.handleChange}
                    value="5"
                    color="default"
                    name="radio-button-demo"
                    aria-label="E"
                    className={classes.size}
                    icon={<RadioButtonUncheckedIcon className={classes.sizeIcon} />}
                    checkedIcon={<RadioButtonCheckedIcon className={classes.sizeIcon} />}
                />
            </div>
        );
    }
}

RadioButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtons);