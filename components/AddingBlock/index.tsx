import { HTMLAttributes } from 'react';
// import styles from './style.module.scss';

type PropsT = HTMLAttributes<HTMLDivElement> & {
};

const AddingBlock = (props): JSX.Element => {
  return <p>Вы не выбрали пока ни одного элемента.</p>;
};

export default AddingBlock;
