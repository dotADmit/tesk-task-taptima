import { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import { Button } from '..';

type PropsT = HTMLAttributes<HTMLDivElement> & {
};

const item = {
  id: 1,
  img: '/sofa.png',
  description: 'Диван-кровать, раскладывается',
};

const SearchBlock = (props: PropsT): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles['search-bar']}>
        <label htmlFor="search" className={styles.label}>Поиск мебели</label>
        <input type="text" name="search" id="seacth" className={styles.search} placeholder="Введите название" />
        <Button color="primary" className={styles['btn-search']}>Поиск</Button>
      </div>
      <div className={styles.result}>
        {new Array(10).fill(item).map((i) => (
          <div className={styles.item}>
            <img src={i.img} alt='furniture' className={styles.img} />
            <p className={styles.text}>{i.description}</p>
            <Button color="primary" className={styles['btn-select']}>Выбрать</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBlock;
