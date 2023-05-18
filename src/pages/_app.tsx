import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '../store';
import { Provider } from 'react-redux';
import BookLoader from '@/components/BookLoader';

export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <BookLoader>
      <div className='max-w-4xl m-auto'>
        <Component {...pageProps} />
      </div>
    </BookLoader>
  </Provider>
}
