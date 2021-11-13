import { HTMLAttributes, MouseEvent, useState } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

type PropsT = HTMLAttributes<HTMLDivElement> & {
  arrow?: 'right' | 'up' | 'down' | 'left';
  order: string,
};

const PromptTag = (props: PropsT): JSX.Element => {
  const { arrow = 'right', order, children, className, ...restProps } = props;

  const [hidden, setHidden] = useState<boolean>(false);

  const promptClasses = cn(styles.prompt, className, {
    [styles.hidden]: hidden,
  });

  const handlerBtnClose = (e: MouseEvent) => {
    e.preventDefault();
    setHidden(true);
  };

  const elements = {
    arrow: (
      <span className={styles['prompt-item']} key="arrow">
        <img src={`./arrows/arrow ${arrow}.svg`} alt="arrow" />
      </span>
    ),
    text: (
      <span className={cn(styles.text, styles['prompt-item'])} key="text">
        {children}
      </span>
    ),
    button: (
      <button className={cn(styles.close, styles['prompt-item'])} onClick={handlerBtnClose} key="button">
        <img src="./close-icon.svg" alt="button-close" />
      </button>
    )
  };

  return (
    <div className={promptClasses} {...restProps}>
      {order.split(' ').map((el: string) => elements[el as keyof typeof elements])}
    </div>
  );
};

export default PromptTag;
