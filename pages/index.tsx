import Head from 'next/head';
import Image from 'next/image';
import { Button, HTag, PromptTag, Form } from '../components';
import Layout from '../layout';

export default function Home (): JSX.Element {
  return (
    <Layout home>
      <HTag tag='h1'>Рассчитайте<br />стоимость доставки из Китая</HTag>
      <Button color="primary" arrow="right">Далее</Button>
      <PromptTag order="text button arrow" arrow="right">Для начала <br />заполните поля выше</PromptTag>
      <Form />
    </Layout>
  );
}
