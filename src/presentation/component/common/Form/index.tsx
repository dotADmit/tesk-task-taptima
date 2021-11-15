import styles from './style.module.scss';
import cn from 'classnames';
import { Button } from '../..';
import { ChangeEvent, FormHTMLAttributes, MouseEvent, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import * as actions from '../../../../actions';
import { connect } from 'react-redux';
import { capitalizeFirst } from '../../../../helper';

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
    toRub: '-',
    sign: '₽',
  },
};

const cities = {
  moscow: 'Москва',
  kazan: 'Казань',
  stPetersburg: 'Санкт-Петербург',
};

const mapStateToProps = (state) => ({
  formState: state.formState,
});

const actionCreators = {
  updateForm: actions.updateForm,
  promptShow: actions.promptShow,
  promptHide: actions.promptHide,
};

type PropsT = FormHTMLAttributes<HTMLFormElement> & {
  size: 'm' | 'b';
  isEditable: boolean,
};

const Form = (props: PropsT): JSX.Element => {
  const {
    size,
    className,
    isEditable,
    updateForm,
    promptShow,
    promptHide,
    formState,
  } = props;
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

  const handleChangeForm = ({ target: { name, value } }: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    updateForm({ propName: name, value });
    promptHide('mainForm');
    if (name === 'from' && value) {
      promptShow('mainBtn');
      updateForm({ propName: 'submitDisabled', value: false });
    } else {
      promptHide('mainBtn');
      updateForm({ propName: 'submitDisabled', value: true });
    }
  };

  const formClasses = cn(className, styles.formB, { [styles.formM]: size === 'm' });
  const labelClasses = cn(styles.labelB, { [styles.labelM]: size === 'm' });
  const itemsContainerClasses = cn(styles.itemsContainerB, { [styles.itemsContainerM]: size === 'm' });
  const inputFromClasses = cn(styles.itemB, styles.from, { [styles.itemM]: size === 'm' });
  const selectToClasses = cn(styles.itemB, styles.to, { [styles.itemM]: size === 'm' });
  const selectCurrencyClasses = cn(styles.itemB, styles.currency, { [styles.itemM]: size === 'm' });
  const inputRateClasses = cn(styles.itemB, styles.rateB, { [styles.itemM]: size === 'm' });

  const form = (
    <form className={cn(formClasses, className)} action="">
      <div className={cn(styles.wrapper, styles.fromBlock)}>
        <label htmlFor="from" className={labelClasses}>Откуда</label>
        <div className={itemsContainerClasses}>
          <input
            type="text"
            name="from"
            id="from"
            className={inputFromClasses}
            required
            value={formState.from}
            onChange={handleChangeForm}
          />
        </div>
      </div>
      <div className={cn(styles.wrapper, styles.toBlock)}>
        <label htmlFor="to" className={cn(labelClasses, styles.labelCurrency)}>Куда</label>
        <div className={itemsContainerClasses}>
          <select
            name="to"
            id="to"
            className={selectToClasses}
            value={formState.to}
            onChange={handleChangeForm}
          >
            {Object.entries(cities).map(([value, name]) => <option key={value} value={value}>{name}</option>)}
          </select>
        </div>
      </div>
      <div className={cn(styles.wrapper, styles.currencyBlock)}>
        <label htmlFor="currency" className={labelClasses}>Валюта</label>
        <div className={itemsContainerClasses}>
          <select
            name="currency"
            id="currency"
            className={selectCurrencyClasses}
            value={formState.currency}
            onChange={handleChangeForm}
          >
            {Object.keys(currency).map((с) => <option key={с} value={с}>{с.toUpperCase()}</option>)}
          </select>
        </div>
      </div>
      <div className={cn(styles.wrapper, styles.rateBlock)}>
        <label htmlFor="rate" className={labelClasses}>Курс</label>
        <div className={itemsContainerClasses}>
          {size === 'b' && <input className={inputRateClasses} value={currency[formState.currency].toRub} disabled />}
        </div>
      </div>

      {size === 'b'
        ? (
          <>
            <Button disabled={formState.submitDisabled} color="primary" arrow="right" type="submit" className={cn(styles.submitB, styles.desktop)} onClick={goToSelection}>Далее</Button>
            <Button disabled={formState.submitDisabled} color="primary" type="submit" className={cn(styles.submitB, styles.mobile)} onClick={goToSelection}>Выбрать мебель</Button>
          </>
        )
        : <Button color="primary" type="submit" className={styles.submitM} onClick={handleSumbit}>Сохранить</Button>}
    </form>
  );

  const handleChangeDisplay = () => {
    setEdit(!isEdit);
  };

  const formSpan = (
    <form action="" className={className}>
      <div className={styles.small}>
        <span className={styles.filled}>
          {capitalizeFirst(formState.from)} &rarr; {cities[formState.to]}, {currency[formState.currency].sign}
        </span>
        <span className={styles.hover} onClick={handleChangeDisplay}>
          {capitalizeFirst(formState.from)} &rarr; {cities[formState.to]}, {currency[formState.currency].sign}
        </span>
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

export default connect(mapStateToProps, actionCreators)(Form);
