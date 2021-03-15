import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

class ItemList extends React.Component {
  render () {
    const { items, id, onClickDone, onClickDelete } = this.props;

    return (
      <ul className={styles.list}>
          {items.map(item => <li key={item.id} className={styles.item}>
            <Item
              value={item.value}
              isDone={item.isDone}
              id={item.id}
              onClickDone={onClickDone}
              onClickDelete={onClickDelete}
            />
          </li>)}
      </ul>
    )
  }
};

ItemList.propTypes = {
  items: PropTypes.array,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired
};

export default ItemList;
