import { HTMLAttributes, useState } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import { Button } from '../../components';

type PropsT = HTMLAttributes<HTMLDivElement> & {

};

const Header = (props: PropsT): JSX.Element => {
  const { className } = props;
  return (
    <header {...props} className={cn(styles.header, className)}>
      <img src="/logo.png" alt="logo" className={styles.logo}/>
      <Button color="white" className={styles.button}>Связаться</Button>
    </header>
  );
};

export default Header;
