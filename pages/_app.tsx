import { AppProps } from 'next/dist/shared/lib/router/router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import '../styles/globals.scss';


const isBrowser = () => typeof window !== "undefined";

let devtoolMiddleware = null;

if (isBrowser()) {
  const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
  devtoolMiddleware = ext && ext();
}

const store = devtoolMiddleware
  ? createStore(reducers, devtoolMiddleware)
  : createStore(reducers);

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
