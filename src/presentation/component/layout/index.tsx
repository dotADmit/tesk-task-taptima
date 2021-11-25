import { ReactNode } from 'react';
import cn from 'classnames';

import Header from './Header';
import styles from './style.module.scss';

type PropsT = {
  home?: 'false' | 'true';
  selection?: 'false' | 'true';
  children: ReactNode;
};

const Layout = (props: PropsT): JSX.Element => {
  const { home, children, selection } = props;

  const wrapperClasses = cn(styles.wrapper, { [styles.home]: home });

  return (
    <div className={wrapperClasses}>
      <Header className={styles.header} home={home} selection={selection} />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
