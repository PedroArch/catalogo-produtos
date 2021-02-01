import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <NavLink
            to="/"
            activeClassName={styles.active}
            className={styles.link}
            end
          >
            Produtos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contatos"
            activeClassName={styles.active}
            className={styles.link}
          >
            Contatos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
