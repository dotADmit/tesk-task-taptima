import { HTMLAttributes, MouseEventHandler, useState } from 'react';
import styles from './style.module.scss';
import { ProductModelT } from '../../types/product.type';
import { Button, PromptTag } from '..';
import Image from 'next/image';
import { priceNormalized } from '../../src/helper';

type PropsT = HTMLAttributes<HTMLDivElement> & {
  item?: ProductModelT,
};

const AddingBlock = (props: PropsT): JSX.Element => {
  const { item } = props;

  if (!item) return <p className={styles.title}>Вы не выбрали пока ни одного элемента.</p>;

  const [count, setCount] = useState(1);

  const handleChangeCount = (operation: string): MouseEventHandler<HTMLButtonElement> => (e): void => {
    e.preventDefault();

    switch (operation) {
      case 'dec': {
        if (count === 0) return;
        setCount(count - 1);
        return;
      }
      case 'inc': {
        setCount(count + 1);
        return;
      }
      case 'reset': {
        setCount(0);
        return;
      }
      default:
        return;
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <Image src={item.image} alt='furniture' height={70} width={100} />
        <span className={styles.text}>{item.title}</span>
        <PromptTag order={'text arrow button'} arrow={'down'} className={styles.itemPrompt}>Теперь заполните поля для этого элемента</PromptTag>
      </div>
      <form action="" className={styles.form}>
        <div className={styles.counterWrapper}>
          <span className={styles.counterTitle}>Кол-во:</span>
          <div className={styles.counter}>
            <button className={styles.counterBtn} onClick={handleChangeCount('dec')}>&minus;</button>
            <input type="text" disabled value={count} className={styles.counterInput} />
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
          value={count ? `${count * item.size} м3` : ""}
        />

        <label htmlFor="netWeight" className={styles.label}>Общая масса нетто, кг</label>
        <input
          type="text"
          name="netWeight"
          id="netWeight"
          className={styles.formInput}
          placeholder="Общая масса нетто, кг"
          disabled
          value={count ? `${count * item.netWeight} кг` : ""}
        />

        <label htmlFor="grossWeight" className={styles.label}>Общая масса брутто, кг</label>
        <input
          type="text"
          name="grossWeight"
          id="grossWeight"
          className={styles.formInput}
          placeholder="Общая масса брутто, кг"
          disabled
          value={count ? `${count * item.grossWeight} кг` : ""}
        />

        <label htmlFor="price" className={styles.label}>Стоимость одной единицы</label>
        <input
        type="text"
        name="price"
        id="price"
        className={styles.formInput}
        placeholder="Стоимость одной единицы"
        disabled
        value={count ? `${priceNormalized(count * item.price)} руб` : ""}
        
        />

        <Button className={styles.formBtn} color="primary" onClick={handleChangeCount('reset')}>Сбросить</Button>
        <Button className={styles.formBtn} color="primary">Добавить</Button>
        <PromptTag order={'button text arrow'} arrow={'right'} className={styles.formPrompt}>Здесь вы можете сбросить параметры и добавить элемент</PromptTag>
      </form>
    </div>
  );
};

export default AddingBlock;
