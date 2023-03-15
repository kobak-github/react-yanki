import React from 'react';

import styles from './Search.module.css';

const Search = () => {
  return (
    <div className={styles.search}>
      <svg
        className={styles.svg}
        width="18"
        height="18"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19.729 17.9888L25 23.2586L23.2586 25L17.9888 19.729C16.028 21.3009 13.5892 22.1558 11.0761 22.1522C4.9621 22.1522 0 17.1901 0 11.0761C0 4.9621 4.9621 0 11.0761 0C17.1901 0 22.1522 4.9621 22.1522 11.0761C22.1558 13.5892 21.3009 16.028 19.729 17.9888ZM17.2603 17.0757C18.8221 15.4695 19.6944 13.3165 19.6909 11.0761C19.6909 6.31584 15.8351 2.46136 11.0761 2.46136C6.31584 2.46136 2.46136 6.31584 2.46136 11.0761C2.46136 15.8351 6.31584 19.6909 11.0761 19.6909C13.3165 19.6944 15.4695 18.8221 17.0757 17.2603L17.2603 17.0757Z"
          fill="#E0BEA2"
        />
      </svg>

      <input className={styles.input} placeholder="Введите ваш запрос" />
    </div>
  );
};

export default Search;
