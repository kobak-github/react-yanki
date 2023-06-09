import React from 'react';
import { useGetColorsQuery } from '../../redux/slice/colorsApi';
import styles from './Card.module.css';

const Card = ({ id, categoryId, colorId, title, price, size, newProd, sale, images }) => {
  const { data: Colors } = useGetColorsQuery();

  const arrColors = Colors && Colors.filter((color) => color.id === colorId);

  return (
    <div className={styles.card}>
      <div className={styles.imgBlock}>
        <div className={styles.favoriteBtn}>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.50061 1.89671C9.26233 0.314993 11.9848 0.367492 13.682 2.06771C15.3785 3.76868 15.437 6.47763 13.859 8.24459L7.49911 14.6135L1.14073 8.24459C-0.437237 6.47763 -0.377988 3.76418 1.31773 2.06771C3.01645 0.369742 5.73365 0.312743 7.50061 1.89671ZM12.62 3.12744C11.495 2.00096 9.68007 1.95521 8.50259 3.01269L7.50136 3.91118L6.49938 3.01344C5.31816 1.95446 3.50694 2.00096 2.37896 3.12894C1.26148 4.24642 1.20523 6.03514 2.23496 7.21711L7.49986 12.4903L12.7648 7.21786C13.7952 6.03514 13.739 4.24867 12.62 3.12744Z"
              fill="white"
            />
          </svg>
        </div>
        <img className={styles.img} src={images[0]} alt="img" />
        <div className={styles.tags}>
          {newProd && <p className={styles.new}>new</p>}
          {sale > 0 && <div className={styles.sale}>- {sale}%</div>}
        </div>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.priceBlock}>
        <p className={`${styles.price} ${sale > 0 ? styles.priceOld : ''}`}>{price}тг</p>
        {sale > 0 && (
          <p className={styles.priceSale}>{Math.round((price - price / sale) / 5) * 5}тг</p>
        )}
      </div>
      <ul className={styles.sizes}>
        {size.map((s, i) => {
          return (
            <li className={styles.size} key={i}>
              {s}
            </li>
          );
        })}
      </ul>
      <ul className={styles.colors}>
        {arrColors &&
          arrColors.map((color) => (
            <li className={styles.color} key={color.id}>
              {color.color}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Card;
