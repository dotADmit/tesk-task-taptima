import styles from './style.module.scss';
import cn from 'classnames';
import { Button } from '../';
import { FormHTMLAttributes, MouseEvent, useState } from 'react';
import { useRouter } from 'next/dist/client/router';

const currency = {
  usd: {
    toRub: '64,54',
    sign: '$',
  },
  cyn: {
    toRub: '50',
    sign: '¥',
  },
  rub: {
    toRub: '64,54',
    sign: '₽',
  },
};

const cities = {
  moscow: 'Москва',
  kazan: 'Казань',
  stPetersburg: 'Санкт-Петербург',
};

type PropsT = FormHTMLAttributes<HTMLFormElement> & {
  size: 'm' | 'b';
  isEditable: boolean,
};

const Form = (props: PropsT): JSX.Element => {
  const { size, className, isEditable } = props;
  const router = useRouter();

  const [isEdit, setEdit] = useState(isEditable);

  const goToSelection = (e: MouseEvent): void => {
    e.preventDefault();
    router.push({ pathname: '/selection' });
  };

  const handleSumbit = (e: MouseEvent) => {
    e.preventDefault();
    setEdit(false);
  };

  const formClasses = cn(className, styles.formB, { [styles.formM]: size === 'm'});
  const labelClasses = cn(styles.labelB, { [styles.labelM]: size === 'm'});
  const itemsContainerClasses = cn(styles.itemsContainerB, { [styles.itemsContainerM]: size === 'm'});
  const inputFromClasses = cn(styles.itemB, styles.from, { [styles.itemM]: size === 'm'});
  const selectToClasses = cn(styles.itemB, styles.to, { [styles.itemM]: size === 'm'});
  const selectCurrencyClasses = cn(styles.itemB, styles.currency, { [styles.itemM]: size === 'm'});
  const inputRateClasses = cn(styles.itemB, styles.rateB, { [styles.itemM]: size === 'm' });

  const form = (
    <form className={formClasses} action="">
      <label htmlFor="from" className={labelClasses}>Откуда</label>
      <label htmlFor="to" className={labelClasses}>Куда</label>
      <label htmlFor="currency" className={labelClasses}>Валюта</label>
      <label htmlFor="rate" className={labelClasses}>Курс</label>

      <div className={itemsContainerClasses}>
        <input type="text" name="from" id="from" className={inputFromClasses} required />
        <select name="to" id="to" className={selectToClasses}>
          {Object.entries(cities).map(([value, name]) => <option key={value} value={value}>{name}</option>)}
        </select>
        <select name="currency" id="currency" className={selectCurrencyClasses}>
          {Object.keys(currency).map((с) => <option key={с} value={с}>{с.toUpperCase()}</option>)}
        </select>
        {size === 'b' && <input className={inputRateClasses} value="64,54 руб." disabled />}
      </div>

      {size === 'b'
        ? <Button color="primary" arrow="right" type="submit" className={styles.submitB} onClick={goToSelection}>Далее</Button>
        : <Button color="primary" type="submit" className={styles.submitM} onClick={handleSumbit}>Сохранить</Button>}
    </form>
  );

  const handleChangeDisplay = () => {
    setEdit(!isEdit);
  };

  const formSpan = (
    <form action="">
      <div className={styles.small}>
        <span className={styles['filled']}>Пекин &rarr; {cities.moscow}, {currency.usd.sign}</span>
        <span className={styles['hover']} onClick={handleChangeDisplay}>Пекин &rarr; {cities.moscow}, USD</span>
      </div>
    </form>
  );

  switch (isEdit) {
    case true:
      return form;
    case false:
      return formSpan;
    default:
      return <></>;
  }
};

export default Form;
