import { HTag, PromptTag, Form } from '../components';
import Layout from '../layout';
import styles from '/styles/index.module.scss';
import cn from 'classnames';

export default function Home(): JSX.Element {
  return (
    <Layout home="true">
      <HTag tag="h1" className={styles.header}>Рассчитайте<br />стоимость доставки из Китая</HTag>
      <div className={styles.formContainer}>
        <Form className={styles.form} size="b" isEditable/>
        <PromptTag name="mainBtn" order="text arrow" arrow="down" className={cn(styles.promptSubmit,styles.prompt)}>Теперь нажмите на кнопку “Далее”</PromptTag>
      </div>
      <br />
      <PromptTag name="mainForm" order="text arrow" arrow="up" className={cn(styles.promptForm, styles.prompt)}>Для начала заполните поля выше</PromptTag>
    </Layout>
  );
}
