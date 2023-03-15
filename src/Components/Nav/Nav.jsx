import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Nav.module.css';

const Nav = () => {
  const setActive = ({ isActive }) => (isActive ? styles.activeLink : '');

  return (
    <nav>
      <ul className={styles.lists}>
        <li className={styles.list}>
          <NavLink to="/new" className={setActive}>
            NEW
          </NavLink>
        </li>
        <li className={styles.list}>
          <NavLink to="/catalog" className={setActive}>
            Каталог
          </NavLink>
        </li>
        <li className={styles.list}>
          <NavLink to="/about" className={setActive}>
            О нас
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
