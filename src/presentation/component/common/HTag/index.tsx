import styles from './style.module.scss';

import { HTMLAttributes } from 'react';
import cn from 'classnames';

type PropsT = HTMLAttributes<HTMLDivElement> & {
  tag: 'h1' | 'h2';
};

const Htag = (props: PropsT): JSX.Element => {
  const { tag, children, className } = props;

  switch (tag) {
    case 'h1':
      return <h1 className={cn(className, styles.title)}>{children}</h1>;
    case 'h2':
      return <h2 className={cn(className, styles.subtitle)}>{children}</h2>;
    default:
      return <></>;
  }
};

export default Htag;
