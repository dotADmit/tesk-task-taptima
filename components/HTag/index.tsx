import { ReactNode } from 'react';
import styles from './style.module.scss';

type PropsT = {
  tag: 'h1' | 'h2';
  children: ReactNode;
};

const Htag = (props: PropsT): JSX.Element => {
  const { tag, children } = props;

  switch (tag) {
    case 'h1':
      return <h1 className={styles.title}>{children}</h1>;
    case 'h2':
      return <h2 className={styles.subtitle}>{children}</h2>;
    default:
      return <></>;
  }
};

export default Htag;
