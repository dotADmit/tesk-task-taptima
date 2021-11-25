import styles from '../../src/styles/selection.module.scss';

import { connect } from 'react-redux';
import { HTag, SearchBlock, AddingBlock } from '../../src/presentation/component';
import Layout from '../../src/presentation/component/layout';

import * as actions from '../../src/actions';

const item = {
  id: 1,
  image: '/sofa.png',
  title: 'Диван-кровать, раскладывается',
  size: 25,
  netWeight: 23,
  grossWeight: 26,
  price: 25000
};

const products = new Array(10).fill(item);

const mapStateToProps = (state: any) => ({ addingState: state.addingState });

const actionCreators = {
  addingItem: actions.addingItem,
};

type PropsT = {
  addingItem?: any,
  addingState?: any
};

function Selection(props: PropsT): JSX.Element {
  const { addingState, addingItem } = props;

  const btnClose = () => {
    addingItem([]);
  };

  return (
    <Layout selection="true">
      <div className={styles.wrapper}>
        <HTag tag="h2" className={styles.searchTitle}>Выберите мебель, которую нужно перевезти</HTag>
        <HTag tag="h2" className={styles.addingTitle}>Затем заполните следующие поля выбранного элемента:</HTag>
        <SearchBlock items={products} className={styles.searchBlock} />
        <AddingBlock className={styles.addingBlock} />
      </div>
      {addingState.length > 0 && (
        <div className={styles.hystmodal}>
          <AddingBlock />
          <button type="button" className={styles.btnCloseModal} onClick={btnClose}></button>
        </div>
      )}
    </Layout>
  );
}

export default connect(mapStateToProps, actionCreators)(Selection);
