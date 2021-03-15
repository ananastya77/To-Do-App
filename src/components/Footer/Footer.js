import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './Footer.module.css';

class Footer extends React.Component {
  render () {
    const { count, filter, onClickFilter, onClickDeleteAll } = this.props;

    return (
      <div className={styles.footer}>
        <span className={styles.counter}>{ count } ITEMS LEFT</span>
        <div className={styles.button__wrap}>
          <div className={styles.filter}>
            <button
              className={classnames(styles.button, styles.filter__button)}
              onClick={() => onClickFilter('all')}
            >
              All
            </button>
            <button
              className={classnames({
                [styles.selected]: filter === 'active',
                [styles.button]: true,
                [styles.filter__button]: true
              })}
              onClick={() => onClickFilter('active')}
            >
              Active
            </button>
            <button
              className={classnames({
                [styles.selected]: filter === 'finished',
                [styles.button]: true,
                [styles.filter__button]: true
              })}
              onClick={() => onClickFilter('finished')}
            >
              Completed
            </button>
          </div>
          <button
            className={classnames(styles.button, styles.delete__button)}
            onClick={() => onClickDeleteAll()}
          >
            Delete All
          </button>
        </div>
      </div>
    )
  }
};

Footer.defaultProps = {
    count: 0
};

Footer.propTypes = {
  count: PropTypes.number.isRequired
};

export default Footer;
