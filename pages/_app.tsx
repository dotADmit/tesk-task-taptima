import '../src/styles/globals.scss';

import { AppProps } from 'next/dist/shared/lib/router/router';
import { Provider } from 'react-redux';

import store from '../src/app/store';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
