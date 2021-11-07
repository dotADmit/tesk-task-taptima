import styles from './style.module.scss';
import cn from 'classnames';

type PropsT = {

};

const Form = (props: PropsT): JSX.Element => {
  return (
    <form className={styles.form}>
      <div>
        <label htmlFor="from" className={styles.label}>Откуда</label>
        <label htmlFor="to" className={styles.label}>Куда</label>
        <label htmlFor="currency" className={styles.label}>Валюта</label>
        <span className={styles.label}>Курс</span>
        <input type="text" name="from" id="from" className={styles.input} />
        <select name="to" id="to" className={cn(styles.input, styles.select)}>
          <option value="moscow" className={styles.option}>Москва</option>
          <option value="kazan" className={styles.option}>Казань</option>
        </select>
        <select name="currency" id="currency" className={styles.input}>
          <option value="usd" className={styles.option}>USD</option>
          <option value="cyn" className={styles.option}>CYN</option>
          <option value="rub" className={styles.option}>RUB</option>
        </select>
        <span className={cn(styles.input, styles.rate)}>64,54 руб.</span>
      </div>
    </form>
  );
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