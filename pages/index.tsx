import Head from 'next/head';
import Image from 'next/image';
import { Button, HTag, PromptTag } from '../components';

export default function Home (): JSX.Element {
  return (
    <div>
      <HTag tag='h2'>Text</HTag>
      <Button color="primary" arrow="right">Далее</Button>
      <PromptTag arrow="down" order="text button">Для начала <br />заполните поля выше</PromptTag>
    </div>
  );
}
