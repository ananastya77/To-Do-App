import React, { useState, useEffect } from 'react';
import styles from './Contacts.module.css';

import emailLogo from './Pictures/email.svg'
import instaLogo from './Pictures/instagram.svg'
import vkLogo from './Pictures/vk.svg'
import ghLogo from './Pictures/github.svg'

const Contacts = () => (
  <div className={styles.wrap}>
    <h1 className={styles.title}>
      C
      <span className={styles.letter}>o</span>
      ntacts
    </h1>
    <nav className={styles.nav}>
      <a href='mailto:atolokonnikova7@gmail.com' className={styles.link}>
        <img src={emailLogo} className={styles.email__icon}></img>
        <span className={styles.link__text}>atolokonnikova7@gmail.com</span>
      </a>
      <div className={styles.socials}>
        <a href='https://github.com/ananastya77/' className={styles.socials__link}>
          <img src={ghLogo} className={styles.icon}></img>
        </a>
        <a href='https://vk.com/flamingspread/' className={styles.socials__link}>
          <img src={vkLogo} className={styles.icon}></img>
        </a>
        <a href='https://www.instagram.com/ananastya_77/' className={styles.socials__link}>
          <img src={instaLogo} className={styles.icon}></img>
        </a>
      </div>
    </nav>
  </div>
);

export default Contacts;
