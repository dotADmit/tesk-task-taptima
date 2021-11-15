import { HTag, SearchBlock, AddingBlock } from '../../src/presentation/component';
import Layout from '../../src/presentation/component/layout';
import styles from '../../src/styles/selection.module.scss';

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

export default function Home(): JSX.Element {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <HTag tag="h2" className={styles.searchTitle}>Выберите мебель, которую нужно перевезти</HTag>
        <HTag tag="h2" className={styles.addingTitle}>Затем заполните следующие поля выбранного элемента:</HTag>
        <SearchBlock items={products}/>
        <AddingBlock className={styles.addingBlock}/>
      </div>
    </Layout>
  );
}
