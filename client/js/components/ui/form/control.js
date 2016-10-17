import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class Control extends Component {
    state = {
        focused: false
    };

    handleFocus() {
        this.setState({
            focused: true
        });
    }

    handleBlur() {
        this.setState({
            focused: false
        });
    }

    getClassName(controlName) {
        return classnames(controlName, {
            [`${controlName}_disabled`]: this.props.disabled
        });
    }

    render() {
        const { name, label } = this.props;
        const fieldClasses = classnames('form__field', {
            'form__field_focused': this.state.focused
        });

        return (
            <div className={ fieldClasses }>
                <label htmlFor={ name } className="form__field-label">{ label }</label>
                { this.renderControl() }
            </div>
        );
    }
}

Control.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};

export default Control;