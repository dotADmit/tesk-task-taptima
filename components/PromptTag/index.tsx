import { HTMLAttributes, useState } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

type PropsT = HTMLAttributes<HTMLDivElement> & {
  arrow?: 'right' | 'up' | 'down' | 'left' | 'none';
  order: string,
};

const PromptTag = (props: PropsT): JSX.Element => {
  const { arrow = 'none', order, children, className, ...restProps } = props;

  const [hidden, setHidden] = useState(false);

  const classes = cn(styles.prompt, className, {
    [styles.hidden]: hidden,
  });

  const handlerBtnClose = () => { setHidden(true); };

  const elements = {
    arrow: (
      <span className={styles.promptItem} key="arrow">
        <img src={`./arrows/arrow ${arrow}.svg`} alt="arrow" />
      </span>
    ),
    text: (
      <span className={cn(styles.text, styles.promptItem)} key="text">
        {children}
      </span>
    ),
    button: (
      <button className={cn(styles.close, styles.promptItem)} onClick={handlerBtnClose} key="button">
        <img src="./close-icon.svg" alt="button-close" />
      </button>
    )
  };

  return (
    <div className={classes} {...restProps}>
      {order.split(' ').map((el) => elements[el as keyof typeof elements])}
    </div>
  );
};

export default PromptTag;
