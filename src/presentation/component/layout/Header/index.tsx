import { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import { Button, PromptTag } from '../..';
import { Form } from '../..';

type PropsT = HTMLAttributes<HTMLDivElement> & {
  home?: 'false' | 'true',
};

const Header = (props: PropsT): JSX.Element => {
  const { className, home } = props;
  return (
    <header {...props} className={cn(styles.header, className)}>
      <img src="/logo.png" alt="logo" className={styles.logo} />
      {!home && (
        <>
          <Form size="m" isEditable={Boolean(home)} className={styles.form}/>
          <PromptTag name="selectionForm" order={'arrow text button'} arrow={'up'} className={styles.prompt}>Теперь ваши параметры выведены сверху, нажмите на них, чтобы  внести изменения</PromptTag>
        </>
      )}
      <Button color="white" className={styles.button}>Связаться</Button>
      <button className={styles.menu}></button>
    </header>
  );
};

export default Header;
