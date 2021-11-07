import { Main } from 'next/document';
import { HTMLAttributes, ReactNode } from 'react';
import Header from './Header';
import styles from './style.module.scss';
import cn from 'classnames';

type PropsT = {
  home?: boolean;
  children: ReactNode;
};

const Layout = (props: PropsT): JSX.Element => {
  const { home, children } = props;

  const wrapperClasses = cn(styles.wrapper, { [styles.home]: home });

  return (
    <div className={wrapperClasses}>
      <Header className={styles.header}/>
      <main className={styles.main}>
        <div>
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
