// import styles from './style.module.scss';

// import { ButtonHTMLAttributes, useState } from 'react';
// import cn from 'classnames';

// const cities = {
//   moscow: 'Москва',
//   kazan: 'Казань',
//   stPetersburg: 'Санкт-Петербург',
// };

// type PropsT = ButtonHTMLAttributes<HTMLButtonElement> & {
//   color: 'primary' | 'white';
//   arrow?: 'right' | 'none';
// };

// const Select = (props: PropsT): JSX.Element => {
//   const { color, arrow = 'none', children, className, ...restProps } = props;
//   const [value, setValue] = useState(cities.moscow);

//   const classes = cn(styles.select, {
//   });

//   const handleSelectItem = (e) => {
//     console.log(e.target.textContent);
//     setValue(e.target.textContent);

//   }

//   return (
//     <div className={classes}>
//       <div className={styles.select__header}>
//         <span className={styles.select__current}>{value}</span>
//         <span className={styles.select__icon}></span>
//       </div>

//       <div className={styles.select__body}>
//         {Object.keys(cities).map((key) => (
//           <div className={styles.select__item} data-value={key} onClick={handleSelectItem}>{cities[key]}</div>
//         ))}
//       </div>
//     </div>
//   );
// };

export default () => <></>;