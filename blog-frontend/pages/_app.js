import '@/styles/globals.css';
import { Fragment } from 'react';
import { Context, ContextProvider } from '@/context/Context';
import { useContext } from 'react';


function MyApp({ Component, pageProps }) {
  const {user} = useContext(Context);
  return ( 
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  )
}

export default MyApp;