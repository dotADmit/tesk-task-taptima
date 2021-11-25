import styles from './style.module.scss';

import { HTMLAttributes } from 'react';
import cn from 'classnames';
import Link from 'next/link';

import { Button, PromptTag } from '../..';
import { Form } from '../..';

type PropsT = HTMLAttributes<HTMLDivElement> & {
  home?: 'false' | 'true',
  selection?: 'false' | 'true',
};

const Header = (props: PropsT): JSX.Element => {
  const { className, home, selection } = props;

  return (
    <header {...props} className={cn(styles.header, className)}>
      {home && <img src="/logo.png" alt="logo" className={styles.logo} />}
      {selection && <img src="/logo.png" alt="logo" className={cn(styles.logo, styles.logoSelection)} />}
      {!home && (
        <Link href="/">
          <a className={styles.btnBack}></a>
        </Link>
      )}
      {!home && (
        <>
          <Form size="m" isEditable={Boolean(home)} className={styles.form} />
          <PromptTag name="selectionForm" order={'arrow text button'} arrow={'up'} className={styles.prompt}>Теперь ваши параметры выведены сверху, нажмите на них, чтобы  внести изменения</PromptTag>
        </>
      )}
      <Button color="white" className={styles.button}>Связаться</Button>
      <button className={styles.menu}></button>
    </header>
  );
};

export default Header;
