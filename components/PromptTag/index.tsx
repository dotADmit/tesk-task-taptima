import { HTMLAttributes, MouseEvent } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import * as actions from '../../src/actions';
import { connect } from 'react-redux';

type PropsT = HTMLAttributes<HTMLDivElement> & {
  arrow?: 'right' | 'up' | 'down' | 'left';
  order: string,
  name: 'mainForm' | 'mainBtn' | 'selectionForm' | 'searching' | 'addingItem' | 'addingBtn'
};

const mapStateToProps = (state) => {
  const { promptsUIState } = state;
  return { promptsUIState };
};

const actionCreators = {
  promptHide: actions.promptHide,
};

const PromptTag = (props: PropsT): JSX.Element => {
  const {
    name,
    arrow = 'right',
    order,
    promptsUIState,
    promptHide,
    children,
    className
  } = props;

  const promptClasses = cn(styles.prompt, className, {
    [styles.hidden]: promptsUIState[name] === 'hidden',
  });

  const handleBtnClose = (value: string) => (e: MouseEvent) => {
    e.preventDefault();
    promptHide(value);
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
      <button className={cn(styles.close, styles['prompt-item'])} onClick={handleBtnClose(name)} key="button">
        <img src="./close-icon.svg" alt="button-close" />
      </button>
    )
  };

  return (
    <div className={promptClasses}>
      {order.split(' ').map((el: string) => elements[el as keyof typeof elements])}
    </div>
  );
};

export default connect(mapStateToProps, actionCreators)(PromptTag);
