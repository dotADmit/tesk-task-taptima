import styles from './style.module.scss';
import cn from 'classnames';
import { Button } from '../';
import { FormHTMLAttributes } from 'react';
import Link from 'next/link';

type PropsT = FormHTMLAttributes<HTMLFormElement> & {
  size: 's' | 'b';
};

const Form = (props: PropsT): JSX.Element => {
  const { size, className } = props;

  const formBig = (
    <form className={cn(className, styles.form)} action="">
      <label htmlFor="from" className={styles.label}>Откуда</label>
      <label htmlFor="to" className={styles.label}>Куда</label>
      <label htmlFor="currency" className={styles.label}>Валюта</label>
      <label htmlFor="rate" className={styles.label}>Курс</label>

      <div className={styles['items-container']}>
        <input type="text" name="from" id="from" className={cn(styles.item, styles.from)} required />
        <select name="to" id="to" className={cn(styles.item, styles.to)}>
          <option value="moscow">Москва</option>
          <option value="kazan">Казань</option>
          <option value="st_petersburg">Санкт-Петербург</option>
        </select>
        <select name="currency" id="currency" className={cn(styles.item, styles.currency)}>
          <option value="usd">USD</option>
          <option value="cyn">CYN</option>
          <option value="rub">RUB</option>
        </select>
        <input className={cn(styles.item, styles.rate)} value="64,54 руб." disabled />
      </div>

      <Link href="/selection">
        <Button color="primary" arrow="right" type="submit" className={styles.submit}>Далее</Button>
      </Link>
    </form>
  );

  const formSmall = (
    <form action="">
      I'm form
    </form>
  );

  switch (size) {
    case 'b':
      return formBig;
    case 's':
      return formSmall;
    default:
      return <></>;
  }
};

export default Form;

{/* <form className={styles.form}>
<div>
  <label htmlFor="from" className={styles.label}>Откуда</label>
  <input type="text" name="from" id="from" className={styles.input}/>
</div>
<div>
  <label htmlFor="to" className={styles.label}>Куда</label>
  <select name="to" id="to" className={cn(styles.input, styles.select)}>
    <option value="moscow" className={styles.option}>Москва</option>
    <option value="kazan" className={styles.option}>Казань</option>
  </select>
</div>
<div>
  <label htmlFor="currency" className={styles.label}>Валюта</label>
  <select name="currency" id="currency" className={styles.input}>
    <option value="usd" className={styles.option}>USD</option>
    <option value="cyn" className={styles.option}>CYN</option>
    <option value="rub" className={styles.option}>RUB</option>
  </select>      </div>
<div>
  <span className={styles.label}>Курс</span>
  <span className={cn(styles.input, styles.rate)}>64,54 руб.</span>
</div>
</form> */}