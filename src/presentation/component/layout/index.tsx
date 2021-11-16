import { ReactNode } from 'react';
import cn from 'classnames';

import Header from './Header';
import styles from './style.module.scss';

type PropsT = {
  home?: 'false' | 'true';
  children: ReactNode;
};

const Layout = (props: PropsT): JSX.Element => {
  const { home, children } = props;

  const wrapperClasses = cn(styles.wrapper, { [styles.home]: home });

  return (
    <div className={wrapperClasses}>
      <Header className={styles.header} home={home} />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
