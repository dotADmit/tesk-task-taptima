import { HTMLAttributes, useState, ChangeEvent, KeyboardEvent } from 'react';
import styles from './style.module.scss';
import { Button, PromptTag } from '../..';
import { ProductModelT } from '../../../../../types/product.type';
import Image from 'next/image';
import * as actions from '../../../../actions';
import { connect } from 'react-redux';

const actionCreators = {
  addingItem: actions.addingItem,
  promptHide: actions.promptHide,
};

type PropsT = HTMLAttributes<HTMLDivElement> & {
  items: ProductModelT[],
};

const SearchBlock = (props: PropsT): JSX.Element => {
  const { items, addingItem, promptHide } = props;
  const [text, setText] = useState('');
  const [filter, setFilter] = useState('');

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value.trim().toLowerCase());
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') setFilter(text);
  };

  const handleAddingItem = (item) => () => {
    addingItem([item]);
    promptHide('searching');
  };

  const filteredItems = filter
    ? items.filter((i) => i.title.toLowerCase().includes(filter))
    : items;

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
          onKeyDown={handleKeyDown}
        />
        <Button color="primary" className={styles.btnSearch} onClick={() => setFilter(text)}>Поиск</Button>
        <PromptTag name="searching" order={'arrow text'} arrow={'left'} className={styles.prompt}>Введите название мебели в строку поиска или<br />выберите мебель из предложенного списка</PromptTag>
      </div>
      <div className={styles.result}>
        {filteredItems.length > 0
          ? filteredItems.map((item, i) => (
            <div className={styles.item} key={i}>
              <Image src={item.image} alt='furniture' className={styles.img} height={97} width={100} />
              <p className={styles.text}>{item.title}</p>
              <Button color="primary" className={styles.btnSelect} onClick={handleAddingItem(item)}>Выбрать</Button>
            </div>
          ))
          : <p className={styles.title}>Ничего не найдено.</p>
        }
      </div>
    </div>
  );
};

export default connect(null, actionCreators)(SearchBlock);
