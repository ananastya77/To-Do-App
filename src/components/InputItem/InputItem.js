import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './InputItem.module.css';

class InputItem extends React.Component {
  state = {
    inputValue: '',
    isError: 0,
    errorText: ''
  }

  onButtonClick = () => {
    this.setState({
      inputValue: ''
    });

    const existingItem = item => item.value === this.state.inputValue;

    if (this.state.inputValue === '') {
      this.setState ({
        isError: 1,
        errorText: 'Please, enter your task.'
      });
    }
    else if (this.props.items.some(existingItem)) {
        this.setState ({
          isError: 1,
          errorText: 'Task already exists. Please, change it.'
        });
      }
      else {
      this.setState({
      inputValue: '',
      isError: 0,
      errorText: ''
    });
    this.props.onClickAdd(this.state.inputValue);
    }
  }

  render() {
    const { items, onClickAdd } = this.props;

    return (
      <div>
        <div className={styles.wrap}>
          <input
            type="text"
            value={this.state.inputValue}
            err={this.state.isError}
            message={this.state.errorText}
            onChange={event => this.setState({ inputValue: event.target.value, isError: 0, errorText: '' })}
            className={classnames({
              [styles.input__error]: this.state.isError === 1,
              [styles.input]: this.state.isError === 0
            })}
          />
          <span className={styles.bar}></span>
          { this.state.isError ?
            <label className={styles.label__error}>
              { this.state.errorText }
            </label> :
            <label className={styles.label}>
              What needs to be done?
            </label>
          }
        </div>
        <button
          className={styles.button}
          onClick={this.onButtonClick}
        >
          <span className={styles.button__text}>Add task</span>
        </button>
      </div>
    )
  }
};

InputItem.propTypes = {
  onClickAdd: PropTypes.func.isRequired
};

export default InputItem;
