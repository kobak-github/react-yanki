import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../../Components/Card/Card';
import Sidebar from '../../Components/Sidebar/Sidebar';
import styles from './Catalog.module.css';

const Catalog = () => {
  const { products } = useSelector((state) => state.productsSlice);
  return (
    <div className={styles.catalog}>
      <Sidebar />

      <div className={styles.content}>
        {/* {isLoading && <div>Идет загрузка...</div>} */}
        {products.map((obj) => {
          return <Card {...obj} key={obj.id} />;
        })}
      </div>
    </div>
  );
};

export default Catalog;
