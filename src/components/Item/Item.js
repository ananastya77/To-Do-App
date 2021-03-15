import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './Item.module.css';

class Item extends React.Component {
  render() {
    const { value, isDone, id, onClickDone, onClickDelete } = this.props;

    return (
      <span className={classnames({
        [styles.item]: true,
        [styles.done]: isDone
      })
      }>
        <span className={styles.task}>
          <Checkbox
            checked={isDone}
            color="default"
            className={
              classnames(styles.root, styles.checked)
            }
            onClick={() => onClickDone(id)}
          />
          {value}
        </span>
        <IconButton
          aria-label="delete"
          onClick={() => onClickDelete(id)}
        >
          <DeleteIcon
            fontSize="small"
            className={styles.label}
          />
          </IconButton>
      </span>);
  }
};

Item.defaultProps = {
  isDone: false
};

Item.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  isDone: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired
};

export default Item;
