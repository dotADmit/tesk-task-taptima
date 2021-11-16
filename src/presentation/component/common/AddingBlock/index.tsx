import styles from './style.module.scss';

import { FormEvent, HTMLAttributes, MouseEventHandler, useState } from 'react';
import Image from 'next/image';
import cn from 'classnames';

import { ProductModelT } from '../../../../../types/product.type';
import { Button, PromptTag } from '../..';
import { priceNormalized } from '../../../../helper';
import { connect } from 'react-redux';
import * as actions from '../../../../actions';

const mapStateToProps = (state) => ({ addingState: state.addingState });

const actionCreators = {
  addItem: actions.addItem,
  addingItem: actions.addingItem,
};

type PropsT = HTMLAttributes<HTMLDivElement> & {
  item?: ProductModelT,
};

const AddingBlock = (props: PropsT): JSX.Element => {
  const { addingItem, addItem, addingState, className } = props;

  if (addingState.length === 0) return <p className={cn(styles.title, className)}>Вы не выбрали пока ни одного элемента.</p>;

  const [item] = addingState;
  const [query, setQuery] = useState({
    count: 1,
    size: item.size,
    netWeight: item.netWeight,
    grossWeight: item.grossWeight,
    price: item.price
  });

  const handleChangeCount = (operation: string): MouseEventHandler<HTMLButtonElement> => (e): void => {
    e.preventDefault();

    switch (operation) {
      case 'dec': {
        if (query.count === 0) return;
        setQuery({
          count: query.count - 1,
          size: query.size - item.size,
          netWeight: query.netWeight - item.netWeight,
          grossWeight: query.grossWeight - item.grossWeight,
          price: query.price - item.price,
        });
        return;
      }
      case 'inc': {
        setQuery({
          count: query.count + 1,
          size: query.size + item.size,
          netWeight: query.netWeight + item.netWeight,
          grossWeight: query.grossWeight + item.grossWeight,
          price: query.price + item.price,
        });
        return;
      }
      case 'reset': {
        setQuery(() => ({
          count: 0,
          size: 0,
          netWeight: 0,
          grossWeight: 0,
          price: 0,
        }));
        return;
      }
      default:
        return;
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addItem({ id: item.id, ...query });
    addingItem([]);
  };

  return (
    <div className={cn(styles.wrapper, className)}>
      <div className={styles.item}>
        <Image src={item.image} alt='furniture' height={70} width={100} />
        <span className={styles.text}>{item.title}</span>
        <PromptTag name="addingItem" order={'text arrow button'} arrow={'down'} className={styles.itemPrompt}>Теперь заполните поля для этого элемента</PromptTag>
      </div>
      <form className={styles.form} onSubmit={handleSubmit} action="#" method="POST">
        <div className={styles.counterWrapper}>
          <span className={styles.counterTitle}>Кол-во:</span>
          <div className={styles.counter}>
            <button className={styles.counterBtn} onClick={handleChangeCount('dec')}>&minus;</button>
            <input name="count" type="text" disabled value={query.count} className={styles.counterInput} />
            <button className={styles.counterBtn} onClick={handleChangeCount('inc')}>+</button>
          </div>
        </div>

        <label htmlFor="size" className={styles.label}>Общий объем, м3</label>
        <input
          type="text"
          name="size"
          id="size"
          className={styles.formInput}
          placeholder="Общий объем, м3"
          disabled
          value={query.size ? `${query.size} м3` : ""}
        />

        <label htmlFor="netWeight" className={styles.label}>Общая масса нетто, кг</label>
        <input
          type="text"
          name="netWeight"
          id="netWeight"
          className={styles.formInput}
          placeholder="Общая масса нетто, кг"
          disabled
          value={query.count ? `${query.count * item.netWeight} кг` : ""}
        />

        <label htmlFor="grossWeight" className={styles.label}>Общая масса брутто, кг</label>
        <input
          type="text"
          name="grossWeight"
          id="grossWeight"
          className={styles.formInput}
          placeholder="Общая масса брутто, кг"
          disabled
          value={query.count ? `${query.count * item.grossWeight} кг` : ""}
        />

        <label htmlFor="price" className={styles.label}>Стоимость одной единицы</label>
        <input
          type="text"
          name="price"
          id="price"
          className={styles.formInput}
          placeholder="Стоимость одной единицы"
          disabled
          value={query.count ? `${priceNormalized(query.count * item.price)} руб` : ""}
        />

        <Button className={styles.formBtn} color="primary" onClick={handleChangeCount('reset')}>Сбросить</Button>
        <Button className={styles.formBtn} color="primary" type="submit">Добавить</Button>
        <PromptTag name="addingBtn" order={'button text arrow'} arrow={'right'} className={styles.formPrompt}>Здесь вы можете сбросить параметры и добавить элемент</PromptTag>
      </form>
    </div>
  );
};

export default connect(mapStateToProps, actionCreators)(AddingBlock);
