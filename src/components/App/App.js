import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Todo from '../Todo/Todo';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';

import logo from './Pictures/WHSlogo.svg';
import styles from './App.module.css';

const App = () => (
  <Router>
    <div className={styles.wrap}>
      <nav className={styles.menu}>
        <Link to='/'>
          <button className={styles.menu__item}>
            Ab
            <span className={styles.letter}>o</span>
            ut
          </button>
        </Link>
        <Link to='/todo'>
          <button className={styles.menu__item}>
            T
            <span className={styles.letter}>o</span>
            d
            <span className={styles.letter}>o</span>
          </button>
        </Link>
        <Link to='/contacts'>
          <button className={styles.menu__item}>
            C
            <span className={styles.letter}>o</span>
            ntacts
          </button>
        </Link>
        <img src={logo} className={styles.logo}></img>
      </nav>
      <div className={styles.container}>
        <Route path='/' exact component={About} />
        <Route path='/todo' component={Todo} />
        <Route path='/contacts' component={Contacts} />
      </div>
    </div>
  </Router>
);

export default App;
