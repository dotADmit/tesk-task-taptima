import styles from './style.module.scss';

import { ButtonHTMLAttributes } from 'react';
import cn from 'classnames';

type PropsT = ButtonHTMLAttributes<HTMLButtonElement> & {
  color: 'primary' | 'white';
  arrow?: 'right' | 'none';
};

const Button = (props: PropsT): JSX.Element => {
  const { color, arrow = 'none', children, className, ...restProps } = props;

  const classes = cn(styles.btn, className, {
    [styles.primary]: color === 'primary',
    [styles.white]: color === 'white'
  });

  return (
    <button
      className={classes}
      {...restProps}
    >
      {children}
      {arrow !== 'none' && <span className={styles.arrow}>
        <img src="./arrows/arrow right btn.svg" alt="arrow" />
      </span>}
    </button>
  );
};

export default Button;
