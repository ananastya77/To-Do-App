import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';

const Todo = () => {
  const initialState = {
    items: JSON.parse(localStorage.getItem('items')) || [],
    count: 0,
    filter: 'all',
    filteredItems: []
  };

  const [items, setItems] = useState(initialState.items);
  const [count, setCount] = useState(initialState.count);
  const [filteredItems, setFilteredItems] = useState(initialState.filteredItems);
  const [filter, setFilter] = useState(initialState.filter);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  });

  useEffect(() => {
    setFilteredItems(items);
  }, []);

  useEffect(() => {
    onClickFilter(filter);
  }, [items]);

  const onClickDone = id => {
    const newItemList = items.map(item => {
      const newItem = { ...item };

      if (item.id === id) {
        newItem.isDone = !item.isDone
      }

      return newItem;
    });

    setItems(newItemList);
  };

  const onClickDelete = id => {
    const newItemList = items.filter(item => item.id !== id);

    setItems(newItemList);
    setCount(count => count - 1);
  };

  const onClickAdd = value => {
    const newItems = [
      ...items,
      {
        value,
        isDone: false,
        id: count + 1
      }
    ];
    setItems(newItems);
    setCount(count => count + 1);
  };

  const onClickFilter = filter => {
    let newItemList = [];
    switch (filter) {
      case 'all':
        newItemList = items;
        break;
      case 'active':
        newItemList = items.filter(item => !item.isDone);
        break;
      case 'finished':
        newItemList = items.filter(item => item.isDone);
        break;
      default:
        newItemList = items;
    };
    setFilteredItems(newItemList);
    setFilter(filter);
  };

  const onClickDeleteAll = () => {
    const newItemList = [];
    setItems(newItemList);
    setCount(count => 0);
  };

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Y
        <span className={styles.letter}>O</span>
        UR T
        <span className={styles.letter}>O</span>
        D
        <span className={styles.letter}>O</span>
        S
      </h1>
      <InputItem onClickAdd={onClickAdd} items={filteredItems} />
      <ItemList
        items={filteredItems}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
      />
      <Footer
        count={items.filter(item => !item.isDone).length}
        onClickFilter={onClickFilter}
        onClickDeleteAll={onClickDeleteAll}
      />
    </div>
  )
};

Todo.defaultProps = {
  isDone: false,
  count: 0
};

export default Todo;
