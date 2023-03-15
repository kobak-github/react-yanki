import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useGetCategoriesQuery } from '../../redux/slice/categoriesApi';
import { useGetProductsQuery } from '../../redux/slice/productsApi';
import { setProducts } from '../../redux/slice/productsSlice';

import styles from './Sidebar.module.css';

const Sidebar = () => {
  const dispatch = useDispatch();
  const { data: Categories } = useGetCategoriesQuery();
  const { data: Products } = useGetProductsQuery();
  const [activeId, setActiveId] = useState(null);

  const onClickCategory = (id) => {
    const categoryProducts = Products && Products.filter((obj) => obj.categoryId === id);
    dispatch(setProducts(categoryProducts));
    setActiveId(id);
  };

  return (
    <div className={styles.sidebar}>
      <h3 className={styles.title}>Каталог</h3>
      <ul className={styles.lists}>
        {Categories &&
          Categories.map((list) => (
            <li
              className={`${styles.list} ${activeId === list.id ? styles.active : ''}`}
              key={list.id}
              onClick={() => onClickCategory(list.id)}>
              {list.title}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Sidebar;
