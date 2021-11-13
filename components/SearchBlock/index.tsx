import { HTMLAttributes, useState, ChangeEvent } from 'react';
import styles from './style.module.scss';
import { Button, PromptTag } from '..';
import { ProductModelT } from '../../types/product.type';
import Image from 'next/image';

type PropsT = HTMLAttributes<HTMLDivElement> & {
  items: ProductModelT[],
};

const SearchBlock = (props: PropsT): JSX.Element => {
  const { items } = props;
  const [text, setText] = useState('');

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.searchBar}>
        <label htmlFor="search" className={styles.label}>Поиск мебели</label>
        <input
          type="text"
          name="search"
          id="search"
          className={styles.search}
          placeholder="Введите название"
          value={text}
          onChange={handleChangeText}
        />
        <Button color="primary" className={styles.btnSearch}>Поиск</Button>
        <PromptTag order={'arrow text'} arrow={'left'} className={styles.prompt}>Введите название мебели в строку поиска или<br />выберите мебель из предложенного списка</PromptTag>
      </div>
      <div className={styles.result}>
        {items.map((item, i) => (
          <div className={styles.item} key={i}>
            <Image src={item.image} alt='furniture' className={styles.img} height={97} width={100} />
            <p className={styles.text}>{item.title}</p>
            <Button color="primary" className={styles.btnSelect}>Выбрать</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBlock;
