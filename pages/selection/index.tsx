import { HTag, SearchBlock, AddingBlock } from '../../components';
import Layout from '../../layout';
import styles from '/styles/selection.module.scss';

export default function Home(): JSX.Element {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <HTag tag="h2">Выберите мебель, которую нужно перевезти</HTag>
        <HTag tag="h2">Затем заполните следующие поля выбранного элемента:</HTag>
        <SearchBlock />
        <AddingBlock />
      </div>
    </Layout>
  );
}